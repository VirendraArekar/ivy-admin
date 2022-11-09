import React, { useState, useEffect } from "react";
import Skeleton from "../../layouts/Skeleton";
import TopComponent from "../../components/TopComponent";
import CircularButton from "../../components/CircularButton";
import Table from "../../components/Table";
import { MdDelete, MdEdit } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import MultiSelect from "../../components/MultiSelect_U";
import UserModal from "./UserModel"; 




// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: "12389",
//     position: "fixed",
//     width: "70%",
//     height: "82%",
//   },
// };

function UserList() {
  const [openModal, setOpenModal] = useState({ action: false })
    const handleOnClose = () => {
        setOpenModal({ action: false })
    }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const values = {
      firstName,
      lastName,
      company,
      date,  
      phone,
      email,
      profile,
    };
    console.log(values,"values---");
  };
  const handleClick = () => {
    console.log("hello");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setDate("");
    setPhone("");
    setProfile("");
  };
  useEffect(() => {}, []);

  const columns = [
    {
      name: "S.no.",
      selector: (row) => row.sno,
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
      selector: (row) => row.date,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button className="btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1">
            <MdEdit />
          </button>
          <button className="btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1">
            <MdDelete />
          </button>
        </>
      ),
    },
  ];
  const data = [
    {
      sno: 1,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 2,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 3,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 4,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 5,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 6,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 7,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 8,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
  ];


 

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

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
              {/* <CircularButton
                onClick={openModal}
                title={"Add User"}
                bgColor={"btn-bg-green"}
                bgColorHover={""}
              /> */}
              <CircularButton  title={"Add User"} bgColor={'bg-[#448268]'} bgColorHover={''} onClick ={()=>setOpenModal({action: true})}/>
            </div>
          </div>
          <div
            className="p-5 border-b border-#6c6c6c-500  m-b-2 flex"
            style={{ justifyContent: " center" }}
          >
            <SearchBar></SearchBar>
          </div>

          <Table columns={columns} data={data} />
        </div>
      </div>
      {openModal.action && <UserModal open={openModal} onClose={handleOnClose} title='Add User'/>}
    </Skeleton>
  );
}

export default UserList;
