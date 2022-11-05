import React,{useState} from 'react'
import Skeleton from '../../layouts/Skeleton'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import AddUniversity from './AddUniversityModal'
import { FiSettings } from 'react-icons/fi'

function UniversityList() {
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
            name: "University",
            selector: (row) => row.name,
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
        { sno: 1, name: "Australia. AM",createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 2, name: "Canada",createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 3, name: "USA",createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Setting" component="University" current="List" icon=<FiSettings color='white' /> />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>University</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New University'} bgColor={'btn-bg-green'} bgColorHover={''} onClick ={()=> setOpenModal({action:true})}/>
                      </div>
                  </div>

                  <Table
                      columns={columns}
                      data={data}
                  />
              </div>
          </div>
          {openModal.action && <AddUniversity open={openModal} onClose={handleOnClose} title='Add University' />}
      </Skeleton>
  )
}

export default UniversityList