import React, { useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import AddCountry from './AddCountryModal'
import { FiSettings } from 'react-icons/fi'

function CountryList() {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState({ action: false })
    const handleOnClose = () => {
        setOpenModal({ action: false })  
    }
    const columns = [ 
        {
            name: "S.no.",
            selector: (row) => row.sno,
            width: "80px",
            sortable: true,
        },
        {
            name: "Country",
            selector: (row) => row.name,
            width: "250px"
        },
        {
            name: "Date Added",
            selector: (row) => new Date(row.createdAt).toDateString()
        },
        {
            name: "Status",
            cell: (row) => <button 
                className='py-1 px-5 my-2 text-sm no-cursor font-medium text-green-700 focus:outline-none bg-green-100 rounded-full border border-green-700 w-28 text-center'
                disabled ={!row.isActive}
            >
            {row.isActive ? "Active" : "InActive"}
            </button> 
        },
        {
            name: "Action",
            cell: (row) =>
                <>
                    <button className='btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1'><MdEdit /></button>
                </>
        },
    ]
    const data = [
        { sno: 1, name: "Australia",createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 2, name: "Canada",createdAt: "2022-10-27T06:47:16.859Z", isActive: true},
        { sno: 3, name: "USA",createdAt: "2022-10-28T06:47:16.859Z", isActive: true},
        { sno: 4, name: "UK",createdAt: "2022-10-29T06:47:16.859Z", isActive: true},
        { sno: 5, name: "France",createdAt: "2022-10-30T06:47:16.859Z", isActive: true},
        { sno: 6, name: "Ireland",createdAt: "2022-10-31T06:47:16.859Z", isActive: true},
        { sno: 7, name: "New Zealand",createdAt: "2022-11-01T06:47:16.859Z", isActive: true},
        { sno: 8, name: "Germany",createdAt: "2022-11-0206:47:16.859Z", isActive: true},
        { sno: 9, name: "China",createdAt: "2022-11-03T06:47:16.859Z", isActive: true},
        { sno: 10, name: "Russia",createdAt: "2022-11-04T06:47:16.859Z", isActive: true},
        { sno: 11, name: "Dubai",createdAt: "2022-11-05T06:47:16.859Z", isActive: true},
        { sno: 12, name: "South Africa",createdAt: "2022-11-06T06:47:16.859Z", isActive: true},
        { sno: 13, name: "Australia",createdAt: "2022-11-07T06:47:16.859Z", isActive: true},
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Setting" component="Country" current="List" icon={FiSettings } color='white' />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Country</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New Country'} bgColor={'btn-bg-green'} bgColorHover={''} onClick ={()=>setOpenModal({action: true})}/>
                      </div>
                  </div>

                  <Table
                      columns={columns}
                      data={data}
                  />
              </div>
          </div>
          {openModal.action && <AddCountry open={openModal} onClose={handleOnClose} title='Add Country' />}
      </Skeleton>
  )
}

export default CountryList