import React, { useEffect, useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import Modal from '../../components/Modal';

function CreateForm({open , onClose , title}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [destination, setDestination] = useState('')
    const [branch, setBranch] = useState('')
    const [email, setEmail] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            destination,
            branch,
            email
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
    }
    useEffect(() => {

    }, [])
    return (
        <Modal open={open} onClose={onClose} title={title} >
            <div className='p-10'>
               
                <div className='w-auto bg-white mt-5 rounded-lg shadow-2l pb-2'>
                   
                    <div className='py-10 px-5'>
                        <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Councellor Information</div>
                        <form action='#' onSubmit={(event) => onSubmit(event)}>
                            <div className='mb-5'>
                                <h1 className='block text-gray-700 text-sm font-bold mb-2'>Name<span className="text-red-500">&nbsp;*</span></h1>
                                <div className='grid grid-cols-2 gap-5'>
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
                                <div className='grid grid-cols-2 gap-5'>
                                    <Select
                                        label={"Destination"}
                                        required
                                        value={destination}
                                        onChange={(v) => setDestination(v)}
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
                            <div className='mb-5'>
                                <div className='grid gap-5'>
                                    <Select
                                        label={"Branch"}
                                        required
                                        value={branch}
                                        onChange={(v) => setBranch(v)}
                                    />
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
                                <CircularButton title="Reset" bgColor={'btn-bg-gray'} bgColorHover={''} onClick={() => handleClick()} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </Modal> 
    )
}

export default CreateForm