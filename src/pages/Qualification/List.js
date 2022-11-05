import React ,{useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import AddQualification from './AddQualificationModal'
import { FiSettings } from 'react-icons/fi'

function QualificationList() {
    const navigate = useNavigate()
    const [openModal , setOpenModal] = useState({action:false})
    const handleOnClose =()=>{
        setOpenModal({action:false})
    }
    const columns = [
        {
            name: "S.no.",
            selector: (row) => row.sno,
            width: "80px",
            sortable: true,
        },
        {
            name: "Qualification",
            selector: (row) => row.name,
            width: "180px"
        },
        {
            name: "Country",
            cell: (row) =><>{(row.country).map((d,i)=>{
              return <p className='pr-2' key={i}>{d.Country}</p>
            })}</>,
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
        { sno: 1, name: "Bachelor", country: [{ Country: "India", id: "1" }, { Country: "New Zealand", id: "2" }],createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 2, name: "Masters", country: [{ Country: "All", id: "2" }],createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 3, name: "Intermediate", country: [{ Country: "All", id: "3" }],createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Setting" component="Qualification" current="List" icon=<FiSettings color='white' /> />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Qualifiacation</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New Qualifiacation'} bgColor={'btn-bg-green'} bgColorHover={''} onClick ={()=> setOpenModal({action:true})}/>
                      </div>
                  </div>

                  <Table
                      columns={columns}
                      data={data}
                  />
              </div>
          </div>
          {openModal.action && <AddQualification open={openModal} onClose={handleOnClose} title ='Add Qualification'/>}
      </Skeleton>
  )
}

export default QualificationList