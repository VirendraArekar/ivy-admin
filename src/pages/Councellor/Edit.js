import React,{useState} from 'react'
import ChooseFile from '../../components/ChooseFile'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import { IoCloseOutline } from 'react-icons/io5';
import Select from '../../components/Select'
import Modal from '../../components/Modal';


function EditCouncellor({open , onClose , title}) {
    
    const { value } = open
    console.log("values -- ", value)
    const [firstName, setFirstName] = useState(`${value.firstName}`)
    const [lastName, setLastName] = useState(`${value.lastName}`)
    const [destination, setDestination] = useState(`${value.destination}`)
    const [branch, setBranch] = useState(`${value.branch}`)
    const [email, setEmail] = useState(`${value.email}`)
    const [phone, setPhone] = useState(`${value.phone}`)
    const [councellorType, setCouncellorType] = useState(``)
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            destination,
            branch,
            email,
            councellorType
        }
        console.log("values --", values)
    }
    const handleClick = () => {
        console.log("hello")
        setFirstName('')
        setLastName('')
        setDestination('')
        setBranch('')
        setEmail('')
        setCouncellorType('')
    }
    
  return (
      <Modal open={open} onClose={onClose} title={title} >
              <div className='pb-10 pt-5 px-5'>
                  <div className='py-3 px-3 bg-neutral-200 md:w-2/4 lg:w-2/6  rounded-md font-semibold mb-6' >Main Information</div>
                  <form action='#' onSubmit={(event) => onSubmit(event)}>
                      <div className='mb-5'>
                          <h1 className='block text-gray-700 text-sm font-bold mb-2'>Name<span className="text-red-500">&nbsp;*</span></h1>
                          <div className='grid md:grid-cols-2 gap-5'>
                              <Input
                                  id="firstName"
                                  type={"text"}
                                  placeholder="First name"
                                  value={firstName}
                                  required
                                  onChange={(v) => setFirstName(v)}
                              />
                              <Input
                                  id="lastName"
                                  type={"text"}
                                  placeholder="last name"
                                  value={lastName}
                                  required
                                  onChange={(v) => setLastName(v)}
                              />
                          </div>
                      </div>
                      <div className='mb-5'>
                          <div className='grid md:grid-cols-2 gap-5'>
                              <Select
                                  label={"Destination"}
                                  required
                                  value={destination}
                                  onChange={(v) => setDestination(v)}
                              />
                              <Select
                                  label={"Branch"}
                                  required
                                  value={branch}
                                  onChange={(v) => setBranch(v)}
                              />
                              
                          </div>
                      </div>
                      <div className='mb-5'>
                          <div className='grid md:grid-cols-2 gap-5'>
                              <Select
                                  label={"Destination"}
                                  required
                                  value={destination}
                                  onChange={(v) => setDestination(v)}
                              />
                              <Input
                                  id="councellorType"
                                  label={"Councellor Type (Optional)"}
                                  type={"text"}
                                  placeholder="Councellor Type"
                                  value={councellorType}
                                  onChange={(v) => setCouncellorType(v)}
                              />
                              
                          </div>
                      </div>
                      <div className='py-3 px-3 bg-neutral-200 md:w-2/4 lg:w-2/6  rounded-md font-semibold mb-6' >Additional Information</div>
                      <div className='mb-5'>
                          <div className='grid  gap-5'>
                              <ChooseFile 
                                label ="Profile Photo"
                              />
                          </div>
                      </div>
                      <div className='mb-5'>
                          <div className='grid md:grid-cols-2 gap-5'>
                              <Input
                                  id="phone"
                                  label={"Mobile"}
                                  
                                  type={"number"}
                                  placeholder="Mobile number"
                                  value={phone}
                                  onChange={(v) => setPhone(v)}
                              />
                              <Input
                                  id="email"
                                  label={"Email"}
                                  required
                                  type={"email"}
                                  placeholder="Email Id"
                                  value={email}
                                  onChange={(v) => setEmail(v)}
                              />
                          </div>
                      </div>
                      <div className='text-center md:space-x-5 sm:space-y-1 mt-10'>
                          <button
                              className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
                              type="submit"
                          >
                              Submit
                          </button>
                          {/* <CircularButton title="Submit" bgColor={'btn-bg-green'} bgColorHover={''} type="submit" /> */}
                          <CircularButton title="Reset" bgColor={'btn-bg-gray'} bgColorHover={''} onClick={() => handleClick()} />
                      </div>
                  </form>
              </div>
      </Modal> 
  )
}

export default EditCouncellor