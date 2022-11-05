import React, { useEffect, useState } from 'react'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Modal from '../../components/Modal'
import MultiSelect from '../../components/MultiSelect'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import Skeleton from '../../layouts/Skeleton'

function AddQualification({title , open, onClose }) {
    const [name, setName] = useState('')
    const [countries, setCountries] = useState([])
    const [date, setDate] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            name,
            countries
        }
        console.log("values --", values)
    }

    const handleClick = () => {
        setName('')
        setCountries([])
    }
    useEffect(() => {

    }, [])
    return (
        <Modal title ={title}
            open={open} onClose={onClose}
        >
                    <div className='py-10 px-5'>
                        <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Main Information</div>
                        <form action='#' onSubmit={(event) => onSubmit(event)}>
                            <div className='mb-5'>
                                <div className='grid grid-col-2 gap-5'>
                                    <Input
                                        id="name"
                                        label={"Qualification"}
                                        required
                                        type={"text"}
                                        placeholder="Country name"
                                        value={name}
                                        onChange={(v) => setName(v)}
                                    />
                            <MultiSelect label={"Country"} checkbox onSelect={(e) => setCountries(e)} required value={countries} />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid md:grid-cols-2 gap-5'>
                                    <Input
                                        id="date"
                                        label={"Date Added (Optional)"}
                                        type={"date"}
                                        placeholder="select Date"
                                        value={date}
                                        onChange={(v) => setDate(v)}
                                    />
                                    <Input
                                        id="addedBy"
                                        label={"Added By"}
                                        type={"text"}
                                        placeholder="Added By"
                                        value={addedBy}
                                        onChange={(v) => setAddedBy(v)}
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
        </Modal>
    )
}

export default AddQualification