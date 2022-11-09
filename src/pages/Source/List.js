import React,{useState} from 'react'
import Skeleton from '../../layouts/Skeleton'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { MdDelete, MdEdit } from 'react-icons/md'
import { BsFillEyeFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import AddSource from './AddSourceModal'
import Button from '../../components/ButtonsComponent'

function SourceList() {
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
            name: "Sources",
            selector: (row) => row.sources,
            width: "250px"
        },
        {
            name: "Source Type",
            selector: (row) => row.sourceType,
            width: "180px"
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
                    <button className='btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1'><BsFillEyeFill /></button>
                    <button className='btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1'><MdDelete /></button>
                </>
        },
    ]
    const data = [
        { sno: 1, sources: "Telecalling", sourceType: "Offline", createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 2, sources: "Direct Walk-Ins", sourceType: "Offline", createdAt: "2022-10-27T06:47:16.859Z", isActive: false},
        { sno: 3, sources: "Siksha", sourceType: "Online", createdAt: "2022-10-28T06:47:16.859Z", isActive: true},
        { sno: 4, sources: "Sulekha", sourceType: "Online", createdAt: "2022-10-29T06:47:16.859Z", isActive: true},
        { sno: 5, sources: "Digital Marketing - Facebook", sourceType: "Online", createdAt: "2022-10-30T06:47:16.859Z", isActive: false},
        { sno: 6, sources: "Digital Marketing - Instagram", sourceType: "Online", createdAt: "2022-10-31T06:47:16.859Z", isActive: true},
        { sno: 7, sources: "SMS Marketing", sourceType: "Offline", createdAt: "2022-11-01T06:47:16.859Z", isActive: true},
        { sno: 8, sources: "News Paper Ads", sourceType: "Offline", createdAt: "2022-11-02T06:47:16.859Z", isActive: true},
        { sno: 9, sources: "Google", sourceType: "Online", createdAt: "2022-11-03T06:47:16.859Z", isActive: true},
        
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Setting" component="Source" current="List" icon={FiSettings }color='white' /> 
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Source</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New Source'} bgColor={'btn-bg-green'} bgColorHover={''} onClick ={()=> setOpenModal({action:true})}/>
                      </div>
                  </div>
                  <div className='p-3 border-b border-#6c6c6c-500  m-b-2 flex justify-center'>
                      <div className='py-3 px-3'>
                      <Button title={'Online'}></Button>
                      </div>
                      <div className='px-8 py-3'>
                      <Button title={'Offline'} ></Button>
                      </div>
                  </div>

                  <Table
                      columns={columns}
                      data={data}

                  />
              </div>
          </div>
          {openModal.action && <AddSource open={openModal} onClose={handleOnClose} title={'Add Source'}/>}
      </Skeleton>
  )
}

export default SourceList