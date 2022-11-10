import React, { useState, useEffect } from "react";
import Skeleton from "../../layouts/Skeleton";
import TopComponent from "../../components/TopComponent";
import CircularButton from "../../components/CircularButton";
import Table from "../../components/Table";
import { MdDelete, MdEdit } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import MultiSelect from "../../components/MultiSelect_U";
import UserModal from "./UserModel"; 
import { getAPI, postAPI , patchAPI, deleteAPI} from "../../network";
import {formatDate} from "../../utils"




function UserList() {
  const [openModal, setOpenModal] = useState({ action: false })
    const handleOnClose = () => {
        setOpenModal({ action: false })
    }
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [editId, setEditId] = useState('');

  const getUsers = async () => {
    setLoader(true)
    let data = await getAPI(`/user/all`)
    if(data) {
        setUsers(data)
    }
    setLoader(false)
  }

  console.log("USER",users)

  const handleDelete = async() => {
    
    setLoader(true);
    let process = await deleteAPI(`/user/delete/${editId}`);
    setLoader(false);
    if(process){
      getUsers();
    }
  }
  const deleteUser = (id) => {
    console.log("ID",id)
    setEditId(id);
  //  handleDelete()
  }

  const columns = [
    {
      name: "S.no.",
      selector: (row) => row.index,
      width: "80px",
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      width: "220px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: "180px",
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Role",
      cell: (row) => (
        <>
          <MultiSelect
            options={[
              "Councellor",
              "Admin"
            ]}
          />
        </>
      ),
      width: "150px",
    },
    {
      name: "Date Added",
      selector: (row) => formatDate(row?.createdAt),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button className="btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1" >
            <MdEdit />
          </button>
          <button className="btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1" onClick={deleteUser(row._id)}>
            <MdDelete />
          </button>
        </>
      ),
    },
  ];
  // const clearAll = () => {
  
  // }

  useEffect(() => {
    getUsers()
  },[]);


  return (
    <Skeleton>
      <div>
     
      </div>

      <div className="p-8">
        <TopComponent title="User" component="Users" current="List" />
        <div className="w-auto bg-white mt-10 rounded-lg shadow-2l pb-2">
        
          <div className="p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between">
          <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>User Role</h1></div>
            <div className="px-8 py-3">
              <CircularButton  title={"Add User"} bgColor={'bg-[#448268]'} bgColorHover={''} onClick ={()=>setOpenModal({action: true})}/>
            </div>
          </div>
          <div
            className="p-5 border-b border-#6c6c6c-500  m-b-2 flex"
            style={{ justifyContent: " center" }}
          >
            <SearchBar></SearchBar>
          </div>

          <Table columns={columns} data={users} />
        </div>
      </div>
      {openModal.action && <UserModal open={openModal} onClose={handleOnClose} title='Add User'/>}
    </Skeleton>
  );
}

export default UserList;
