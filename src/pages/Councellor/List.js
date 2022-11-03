import React from 'react'
import Skeleton from '../../layouts/Skeleton'
import {  useNavigate } from 'react-router-dom'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'


function CouncellorList() {
    const navigate =useNavigate()
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
            name: "Action",
            cell: (row) =>
                <>
                    <button className='btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1'><MdEdit /></button>
                    {/* <button className='btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1'><MdDelete /></button> */}
                </>
        },
    ]
    const data = [
        { sno: 1, firstName: "Abhishek", lastName: "Sharma", destination: "Australia",branch:"Branch_1", email: "abhi@abhi.com", isActive:true},
        { sno: 2, firstName: "Abhishek", lastName: "Sharma", destination: "US", branch: "Branch_1", email: "abhi@abhi.com", isActive: true },
        { sno: 3, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: false },
        { sno: 4, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true },
        { sno: 5, firstName: "Abhishek", lastName: "Sharma", destination: "UK", branch: "Branch_1", email: "abhi@abhi.com", isActive: false },
        { sno: 6, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true },
        { sno: 7, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true },
        { sno: 8, firstName: "Abhishek", lastName: "Sharma", destination: "Australia", branch: "Branch_1", email: "abhi@abhi.com", isActive: true },
       
        
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Setting" component="Source" current="List" />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Councellor</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New Councellor'} bgColor={'btn-bg-green'} bgColorHover={''} onClick ={() => navigate("/councellor/create")} />
                      </div>
                  </div>

                  <Table
                      columns={columns}
                      data={data}

                  />
              </div>
          </div>
      </Skeleton>
  )
}

export default CouncellorList