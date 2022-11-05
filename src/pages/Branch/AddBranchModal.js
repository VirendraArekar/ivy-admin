import React,{useState} from 'react'
import Modal from '../../components/Modal'
import Input from '../../components/Input'
import CircularButton from '../../components/CircularButton'

function AddBranch({ title, open, onClose }) {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [place, setPlace] = useState('')
    const [addedBy, setAddedBy] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const values = {
            name,
            date,
            place,
            addedBy
        }
        console.log("values --", values)
    }
    const handleClick = () => {
        setName('')
        setDate('')
        setPlace('')
        setAddedBy('')
    }
  return (
    <Modal
    title={title}
    open={open}
    onClose={onClose}
    >
          <div className='py-10 px-5'>
              <div className='py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6' >Main Information</div>
              <form action='#' onSubmit={(event) => onSubmit(event)}>
                  <div className='mb-5'>
                      <div className='grid  gap-5'>
                          <Input
                              id="name"
                              label={"Branch Name"}
                              required
                              type={"text"}
                              placeholder="Branch name"
                              value={name}
                              onChange={(v) => setName(v)}

                          />
                      </div>
                  </div>
                  <div className='mb-5'>
                      <div className='grid  gap-5'>
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
                              id="place"
                              label={"Branch State/Country (Optional)"}
                              type={"text"}
                              placeholder="Branch State or Country"
                              value={place}
                              onChange={(v) => setPlace(v)}
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

export default AddBranch