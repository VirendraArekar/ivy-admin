import React, { useEffect, useState } from 'react'
import CircularButton from '../../components/CircularButton'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TopComponent from '../../components/TopComponent'
import Skeleton from '../../layouts/Skeleton'

function CreateSourceForm() {
    const [sources, setSources] = useState('')
    const [sourceType, setSourceType] = useState('')
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
                <TopComponent title="Setting" component="Source" current="Create Sources" />
                <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
                    <div className='p-5 border-b border-#6c6c6c-500  m-b-2'>
                        <h1 style={{ fontWeight: 700 }}>Add Sources</h1>
                    </div>
                    <div className='py-10 px-5'>
                        <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Source Information</div>
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