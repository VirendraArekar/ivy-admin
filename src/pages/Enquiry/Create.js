import React, { useState } from 'react'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import Skeleton from '../../layouts/Skeleton'

function CreateEnquiryForm() {
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
    }

    return (
        <Skeleton>
            <div className='p-10'>
                <TopComponent title="Enquiry" current="Add Enquiry" />
                <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                    <div className='p-5 border-b border-#6c6c6c-500  m-b-2'>
                        <h1 style={{ fontWeight: 700 }}>Add Enquiry</h1>
                    </div>
                    <div className='py-10 px-5'>
                        <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Enquiry Information</div>
                        <form action='#' onSubmit={(event) => onSubmit(event)}>
                            <div className='mb-5'>
                                <h1 className='block text-gray-700 text-sm font-bold mb-2'>Name<span className="text-red-500">&nbsp;*</span></h1>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="firstName"
                                        type={"text"}
                                        placeholder="First name"
                                        value={(v) => setFirstName(v)}
                                    />
                                    <Input
                                        id="lastName"
                                        type={"text"}
                                        placeholder="last name"
                                        value={(v) => setLastName(v)}
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
                                        value={(v) => setPhone(v)}

                                    />
                                    <Input
                                        id="email"
                                        label={"Email"}
                                        required
                                        type={"email"}
                                        placeholder="Email Id"
                                        value={(v) => setEmail(v)}
                                    />
                                </div>
                            </div>
                            <div className='mb-10'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Select
                                        label={"Country Interested In"}
                                        required
                                        value={(v) => setCountry(v)}
                                    />
                                    <Select
                                        label={"Lead Source"}
                                        required
                                        value={(v) => setLead(v)}
                                    />
                                </div>
                            </div>
                            <div className='text-center space-x-5 mt-10'>
                                <CircularButton title="Submit" bgColor={'btn-bg-green'} bgColorHover={''} />
                                <CircularButton title="Reset" bgColor={'btn-bg-gray'} bgColorHover={''} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Skeleton>
    )
}

export default CreateEnquiryForm