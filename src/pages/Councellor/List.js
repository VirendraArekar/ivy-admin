import React, { useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import {  useNavigate } from 'react-router-dom'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'
import EditCouncellor from './Edit'
import { FiSettings } from 'react-icons/fi'
import CreateForm from './Create'



function CouncellorList() {
    const [openModal, setOpenModal] = useState({ action: false })
    const handleOnCloseq = () => {
        setOpenModal({ action: false })  
    }
    const navigate =useNavigate()
    const [openEdit ,setOpenEdit ] = useState({
        action: false,
        value:null
    })
    const handleOnClose =() => setOpenEdit({
        action: false,
        value: null
    })
    const columns = [
        {
            name: "S.no.",
            selector: (row) => row.sno,
            width: "80px",
            sortable: true,
        },
        {
            name: "Councellor Name",
            selector: (row) => `${row.firstName} ${row.lastName}`,
            width: "250px"
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "Destination",
            selector: (row) => row.destination
        },
        {
            name: "Branch",
            selector: (row) => row.branch
        },
        {
            name: "Status",
            cell: (row) => <button
                className='py-1 px-5 my-2 text-sm no-cursor font-medium text-green-700 focus:outline-none bg-green-100 rounded-full border border-green-700 w-28 text-center'
                disabled={!row.isActive}
            >
                {row.isActive ? "Active" : "InActive"}
            </button>
        },
        {
            name: "Date Added",
            selector: (row) => new Date(row.createdAt).toDateString()
        },
        {
            name: "Action",
            cell: (row) =>
                <>
                    <button className='btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1'
                    onClick={()=> setOpenEdit({
                        action: true,
                        value: row
                    })}
                    ><MdEdit /></button>
                    {/* <button className='btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1'><MdDelete /></button> */}
                </>
        },
    ]
    const data = [
        { sno: 1, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 2, firstName: "Abhishek", lastName: "Sharma", destination: "US", branch: "Branch_1", email: "abhi@abhi.com", isActive: true, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 3, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: false, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 4, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 5, firstName: "Abhishek", lastName: "Sharma", destination: "UK", branch: "Branch_1", email: "abhi@abhi.com", isActive: false, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 6, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 7, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true, createdAt: "2022-10-26T06:47:16.859Z" },
        { sno: 8, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true, createdAt: "2022-10-26T06:47:16.859Z" },
       
        
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Councellor" component="Source" current="List" icon={FiSettings }color='white' />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Councellor</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New Councellor'} bgColor={'btn-bg-green'} bgColorHover={''} onClick ={()=>setOpenModal({action: true})} />
                      </div>
                  </div>

                  <Table  
                      columns={columns}
                      data={data}

                  />
              </div>
          </div>
          {openEdit.action && <EditCouncellor open={openEdit} onClose ={handleOnClose}/>}
          {openModal.action && <CreateForm open={openModal} onClose={handleOnCloseq} title='Create Councellor' />}
      </Skeleton>
  )
}

export default CouncellorList