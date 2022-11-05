import React,{useState} from 'react'
import Skeleton from '../../layouts/Skeleton'
import TopComponent from '../../components/TopComponent'
import CircularButton from '../../components/CircularButton'
import Table from '../../components/Table'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import AddBranch from './AddBranchModal'
import { FiSettings } from 'react-icons/fi'

function BranchList() {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState({action: false})
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
            name: "Branch",
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
                    <button className='btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1'><MdDelete /></button>
                </>
        },
    ]
    const data = [
        { sno: 1, name: "Branch_1",createdAt: "2022-10-26T06:47:16.859Z", isActive: true},
        { sno: 2, name: "Branch_2",createdAt: "2022-10-27T06:47:16.859Z", isActive: true},
        { sno: 3, name: "Branch_3",createdAt: "2022-10-28T06:47:16.859Z", isActive: true},
        { sno: 4, name: "Branch_4",createdAt: "2022-10-29T06:47:16.859Z", isActive: true},
        { sno: 5, name: "Branch_5",createdAt: "2022-10-30T06:47:16.859Z", isActive: true},
        { sno: 6, name: "Branch_6",createdAt: "2022-10-31T06:47:16.859Z", isActive: true},
        { sno: 7, name: "Branch_7",createdAt: "2022-11-01T06:47:16.859Z", isActive: true},
        { sno: 8, name: "Branch_8",createdAt: "2022-11-0206:47:16.859Z", isActive: true},
        { sno: 9, name: "Branch_9",createdAt: "2022-11-03T06:47:16.859Z", isActive: true},
        { sno: 10, name: "Branch_10",createdAt: "2022-11-04T06:47:16.859Z", isActive: true},
        { sno: 11, name: "Branch_11",createdAt: "2022-11-05T06:47:16.859Z", isActive: true},
        { sno: 12, name: "Branch_12",createdAt: "2022-11-06T06:47:16.859Z", isActive: true},
        { sno: 13, name: "Branch_13",createdAt: "2022-11-07T06:47:16.859Z", isActive: true},
    ]
  return (
      <Skeleton>
          <div className='p-10'>
              <TopComponent title="Setting" component="Branch" current="List" icon=<FiSettings color='white' /> />
              <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                  <div className='p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between'>
                      <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Branch</h1></div>
                      <div className='px-8 py-3'>
                          <CircularButton title={'New Branch'} bgColor={'btn-bg-green'} bgColorHover={''} onClick={ ()=> setOpenModal({action:true})} />
                      </div>
                  </div>

                  <Table
                      columns={columns}
                      data={data}
                  />
              </div>
          </div>
          {openModal.action && <AddBranch open={openModal} onClose={handleOnClose} title='Add Branch' />}
      </Skeleton>
  )
}

export default BranchList