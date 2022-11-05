import React from 'react'
import Skeleton from '../../layouts/Skeleton'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'
import DropDown from '../../components/DropDown'
import SearchBar from '../../components/SearchBar'
import DropDownCheck from '../../components/DropDownCheck'


function CouncellorList() {
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
            width: "220px"
        },
        {
            name: "Email",
            selector: (row) => row.email,
            width: "180px"
        },
        {
            name: "Company",
            selector: (row) => row.company,
        },
        {
            name: "Roll",
            cell: (row) =>
            <>
                <DropDown
            options={[
              "John Doe",
              "Naveen Din",
              "John Doe",
              "Martin Gill",
              "Naveen Din",
            ]}
          />
            </>,
             width: "200px"
        },
        {
            name: "Date Added",
            selector: (row) => row.date
        },
        {
            name: "Action",
            cell: (row) =>
                <>
                    <button className='btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1'><MdEdit /></button>
                    <button className='btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1'><MdDelete /></button>
                </>
        },
    ]
    const data = [
        { sno: 1, firstName: "Abhishek", lastName: "Sharma",company: "Ivy Overseas", email: "abhi@abhi.com" ,date:"2-5-2022"},
        { sno: 2, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
        { sno: 3, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
        { sno: 4, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
        { sno: 5, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
        { sno: 6, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
        { sno: 7, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
        { sno: 8, firstName: "Abhishek", lastName: "Sharma", company: "Ivy Overseas", email: "abhi@abhi.com",date:"2-5-2022"},
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="User" component="Users" current="List" />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Users</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'Add User'} bgColor={'btn-bg-green'} bgColorHover={''} />
                      </div>
                  </div>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex' style={{    justifyContent:" center"}}>
                        <SearchBar></SearchBar>
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