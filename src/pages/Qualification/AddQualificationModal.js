import React, { useEffect, useState } from "react";
import CircularButton from "../../components/CircularButton";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import MultiSelect from "../../components/MultiSelect";
import Select from "../../components/Select";
import TopComponent from "../../components/TopComponent";
import Skeleton from "../../layouts/Skeleton";
import { getAPI, postAPI, patchAPI, deleteAPI } from "../../network";

function AddQualification({ title, open, onClose ,getQualifcation}) {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [date, setDate] = useState("");
  const [addedBy, setAddedBy] = useState("");
  const [isActive, setActive] = useState(false);

//   setActive(prevstate => !prevstate);


  const onSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name,
      countries,
      date,
      addedBy,
      isActive,
    };
    if(isActive=="Active"){
        values.isActive=true
    }
    else{
        values.isActive=false
    }
    console.log("values --", values);
    let data = await postAPI("/qualification/create", values);
    if (data) {
      console.log("Posted Data", data);
      onClose()
      getQualifcation()
    }
    setLoader(false);
  };

  const handleClick = () => {
    setName("");
    setCountries([]);
  };
  useEffect(() => {
    
  }, []);

  const AddQualificationFun = async () => {};
  return (
    <Modal title={title} open={open} onClose={onClose}>
      <div className="py-10 px-5">
        <div className="py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6">
          Main Information
        </div>
        <form action="#" onSubmit={(event) => onSubmit(event)}>
          <div className="mb-5">
            <div className="grid grid-col-2 gap-5">
              <Input
                id="name"
                label={"Qualification"}
                required
                type={"text"}
                placeholder="Qualification"
                value={name}
                onChange={(v) => setName(v)}
              />
              <MultiSelect
                label={"Country"}
                checkbox
                onSelect={(e) => setCountries(e)}
                required
                value={countries}
              />
            </div>
          </div>
          <div className="mb-5">
            <div className="grid md:grid-cols-2 gap-5">
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
          <div className="mb-5">
            <div className="grid md:grid-cols-1 gap-5">
              <label className="block text-gray-700 text-sm font-bold ">
                Select Status<span className="text-red-500">&nbsp;*</span>
              </label>
              <select
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(v) => setActive(v)}
              >
                <option>Select Status</option>
                <option>Active</option>
                <option>InActive</option>
              </select>
            </div>
          </div>
          <div className="text-center space-x-5 mt-10">
            <button
              className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
              type="submit"
              onClick={AddQualificationFun}
            >
              Submit
            </button>
            {/* <CircularButton title="Submit" bgColor={'btn-bg-green'} bgColorHover={''} type="submit" /> */}
            <CircularButton
              title="Reset"
              bgColor={"btn-bg-gray"}
              bgColorHover={""}
              onClick={() => handleClick()}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddQualification;
