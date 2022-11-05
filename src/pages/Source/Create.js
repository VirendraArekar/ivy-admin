import React, { useEffect, useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import Skeleton from '../../layouts/Skeleton'

function CreateSourceForm() {
    const [sources, setSources] = useState('')
    const [sourceType, setSourceType] = useState('')
    const [date, setDate] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const [description, setDescription] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            sources,
            sourceType
        }
        console.log("values --", values)
    }
    const handleClick = () => {
        console.log("hello")
        setSourceType('')
        setSources('')
    }
    useEffect(() => {

    }, [])
    return (
        <Skeleton>
            <div className='p-10'>
                <TopComponent title="Setting" component="Source" current="Create Sources" icon=<FiSettings  color='white' /> />
                <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                    <div className='p-5 border-b border-#6c6c6c-500  m-b-2'>
                        <h1 style={{ fontWeight: 700 }}>Add Sources</h1>
                    </div>
                    <div className='py-10 px-5'>
                        <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Main Information</div>
                        <form action='#' onSubmit={(event) => onSubmit(event)}>
                            <div className='mb-5'>
                                <div className='grid grid-cols-2 gap-5'>
                                    <Input
                                        id="sources"
                                        label={"sources"}
                                        required
                                        type={"text"}
                                        placeholder="Sources"
                                        value={sources}
                                        onChange={(v) => setSources(v)}

                                    />
                                    <Select
                                        label={"Source Type"}
                                        required
                                        value={sourceType}
                                        onChange={(v) => setSourceType(v)}
                                    />
                                </div>
                            </div>
                            <div className='mb-5'>
                                <div className='grid md:grid-cols-2 gap-5'>
                                    <Input
                                        id="date"
                                        label={"Date Added"}
                                        type={"date"}
                                        placeholder="select Date"
                                        value={date}
                                        onChange={(v) => setDate(v)}
                                    />
                                    <Input
                                        id="addedBy"
                                        label={"Added By (Optional)"}
                                        type={"text"}
                                        placeholder="Added By"
                                        value={addedBy}
                                        onChange={(v) => setAddedBy(v)}
                                    />
                                </div>
                            </div>
                            
                            <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Additional Information</div>
                            <div className='mb-5'>
                                <div className='grid '>
                                    <label for="description" className="block text-gray-700 text-sm font-bold mb-2">Description (Optional)</label>
                                    <textarea
                                        id='description'
                                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        value={description}
                                        rows={5}
                                        placeholder="Enter Description"
                                        onChange={(e) => setDescription(e.target.value)}
                                    >
                                        Description
                                    </textarea>
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
        </Skeleton>
    )
}

export default CreateSourceForm