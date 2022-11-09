import React, { useEffect, useState } from 'react'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'


function AddEnquiryModal({ title, open, onClose }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [lead, setLead] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            email,
            phone,
            country,
            lead
        }
        console.log("values --" , values)
    }
    const handleClick =() =>{
        console.log("hello")
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setCountry('')
        setLead('')
    }
   const Countryoptions=[

   ]
    return (
        <Modal title={title}
        open={open} onClose={onClose}>
            <div className='p-10'>
              
                <div className='w-auto bg-white mt-5 rounded-lg shadow-2l pb-2'>
                    
                    <div className='py-5 px-5'>
                        <div className='py-3 px-3 bg-[#F7F8FA] w-80 rounded-md mb-6' >Enquiry Information</div>
                        <form action='#' onSubmit={(event) => onSubmit(event)}>
                            <div className='mb-5'>
                                <h1 className='block text-gray-700 text-sm font-bold mb-2'>Name<span className="text-red-500">&nbsp;*</span></h1>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="firstName"
                                        type={"text"}
                                        placeholder="First name"
                                        value ={firstName}
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
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="number"
                                        label={"Mobile"}
                                        required
                                        type={"number"}
                                        placeholder="Mobile Number"
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
                            <div className='mb-10'>
                                <div className='grid grid-cols-2 '>
                                    <Select
                                        label={"Country Interested In"}
                                        required
                                        options={Countryoptions}
                                        value={country}
                                        onChange={(v) => setCountry(v)}
                                    />
                                     <label className="block text-gray-700 text-sm font-bold ml-3">Role Type<span className="text-red-500">&nbsp;*</span>
                                        
                                    <select className="w-full h-10 border-1 shadow-md outline-0 rounded-lg bg-white border-gray-300"   onChange={(v) => setLead(v)}>
                                        <option>Select Lead</option>
                                        <option>Online</option>
                                        <option>Offline</option>
                                    </select> 
                                    </label>  
                                  
                                </div>
                            </div>
                            <div className='mb-10'>
                                <div className='grid grid-cols-2 '>
                                    
                                </div>
                            </div>
                            <div className='text-center space-x-5 mt-10'>
                                <button
                                    className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
                                    type="submit"
                                >
                                   Submit
                                </button>
                                {/* <CircularButton title="Submit" bgColor={'btn-bg-green'} bgColorHover={''} type="submit" /> */}
                                <CircularButton title="Reset" bgColor={'btn-bg-gray'} bgColorHover={''} onClick ={() => handleClick()}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default AddEnquiryModal