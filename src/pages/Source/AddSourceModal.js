import React,{useState} from 'react'
import Modal from '../../components/Modal'
import Input from '../../components/Input'
import CircularButton from '../../components/CircularButton'
import Select from '../../components/Select'

function AddSource({open, onClose, title}) {
    const [sources, setSources] = useState('')
    const [sourceType, setSourceType] = useState('')
    const [date, setDate] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const [type, setType] = useState('')
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
   
        const data = [
            { Source: "Online", id: 1 },
            { Source: "Offline", id: 2 }
        ]
    
  return (
    <Modal open={open} onClose= {onClose} title ={title} >
          <div className='py-10 px-5'>
              <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Main Information</div>
              <form action='#' onSubmit={(event) => onSubmit(event)}>
                  <div className='mb-5'>
                      <div className='grid grid-cols-2 gap-5'>
                          <Input
                              id="sources"
                              label={"Sources"}
                              required
                              type={"text"}
                              placeholder="Sources"
                              value={sources}
                              onChange={(v) => setSources(v)}

                          />
                          {/* <label className="block text-gray-700 text-sm font-bold mb-2">Source Type<span className="text-red-500">&nbsp;*</span>
                            <select className=" h-9 shadow-md outline-0 border  bg-white border-gray-300 mt-7"  onChange={(v) => setType(v)}>
                                <option>Select Source Type</option>
                                <option>Online</option>
                                <option>Offline</option>
                            </select>
                          </label> */}

                        <label className="block text-gray-700 text-sm font-bold mb-2"> Source Type<span className="text-red-500">&nbsp;*</span>
                                                                
                                        <select className="w-full h-10 border-1  shadow-md outline-0 rounded-lg bg-white text-gray-500 border-gray-300" onChange={(v) => setType(v)}>
                                            <option >Please Select</option>
                                            <option>Online</option>
                                            <option>Offline</option>
                                        </select>     
                      
                                        </label> 
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
    </Modal>
  )
}

export default AddSource