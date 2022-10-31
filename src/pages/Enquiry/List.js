import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import TopComponent from '../../components/TopComponent'
import Skeleton from '../../layouts/Skeleton'

function List() {

    const statusColor = (row) => {
        if (row.status === "Completed") {
            return { color: "green" }
        } else if (row.status === "Rejected") {
            return { color: 'red' }
        } else if (row.status === "Processing") {
            return { color: 'yellow' }
        }
    }

    const columns = [
        {
            name: "S.no.",
            selector: (row) => row.sno,
            width: "80px",
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            width: "150px"
        },
        {
            name: "Email",
            selector: (row) => row.email,
            width: "180px"
        },
        {
            name: "Mobile",
            selector: (row) => row.mobile
        },
        {
            name: "Country Interested",
            selector: (row) => row.countryInterested
        },
        {
            name: "Programme Interested",
            selector: (row) => row.programmeInterested
        },
        {
            name: "Councellor",
            selector: (row) => row.assignedTo
        },
        {
            name: "Status",
            selector: (row) => <div style={statusColor(row)}>{row.status}</div>
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
        { sno: 1, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
        { sno: 2, name: "Albert Moody", email: "albert@gmail.com", mobile: "9123456789", countryInterested: "Australia", programmeInterested: "Economics", assignedTo: "Martin Gill", status: "Completed" },
        { sno: 3, name: "William Din", email: "williamd@gmail.com", mobile: "9856321254", countryInterested: "UK", programmeInterested: "Data Science", assignedTo: "John Doe", status: "Processing" },
        { sno: 4, name: "Ashley Lynch", email: "ashley@gmail.com", mobile: "9856321254", countryInterested: "New Zealand", programmeInterested: "Medical", assignedTo: "John Doe", status: "Rejected" },
        { sno: 5, name: "Jeffery Larol", email: "larolj@gmail.com", mobile: "9856321254", countryInterested: "US", programmeInterested: "English", assignedTo: "Martin Gill", status: "Processing " },
        { sno: 6, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
        { sno: 7, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
        { sno: 8, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
        { sno: 9, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
        { sno: 10, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
        { sno: 11, name: "Abhishek Sharma", email: "abc@gmail.com", mobile: "9856321254", countryInterested: "India", programmeInterested: "MBBS", assignedTo: "Gabbar Singh", status: "Completed" },
    ]
    return (
        <Skeleton>
            <div className='p-10'>
                <TopComponent title ="Enquiry" current ="List"/>
                <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                    <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                        <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Enquiries</h1></div>
                        <div className='px-8 py-3'>
                            <CircularButton title={'New Enquiry'} bgColor={'btn-bg-green'} bgColorHover={''} />
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

export default List