import React, { useEffect, useState } from "react";
import CircularButton from "../../components/CircularButton";
import Input from "../../components/Input";
import TopComponent from "../../components/TopComponent";
import Skeleton from "../../layouts/Skeleton";
import Table from '../../components/Table';
import { MdDelete, MdEdit } from 'react-icons/md';
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';






function CreateUserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const values = {
      firstName,
      lastName,
      phone,
      email,
    };
    console.log("values --", values);
  };
  const handleClick = () => {
    console.log("hello");
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setDate("");
    setPhone("");
    setProfile("");
  };
  useEffect(() => {}, []);


  const columns1 = [
    
    {
        name: "Module Permissions",
        selector: (row) => `${row.firstName} ${row.lastName}`,
        width: "220px",
        
    },
    {
        name: "Enquiry Assign",
        // selector: (row) => row.email,
        width: "180px",
        cell: (row) =>
                <>
                   <input type={"checkbox"}></input>
                </>
        ,
        display:'flex',
        justifyContent:' center'
},
    {
        name: "Dashboard Access",
        cell: (row) =>
                <>
                   <input type={"checkbox"}></input>
                </>
        ,
        width: "150px",
    },
   
    {
        name: "create/Add",
        cell: (row) =>
                <>
                   <input type={"checkbox"}></input>
                </>
        ,
        width: "150px",
    },
    {
        name: "Delete",
        cell: (row) =>
                <>
                   <input type={"checkbox"}></input>
                </>
        ,
        width: "150px",
    },
    {
        name: "Read",
        cell: (row) =>
                <>
                   <input type={"checkbox"}></input>
                </>

          ,
          width: "150px",
    },
]
const data1 = [
    { sno: 1, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 2, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 3, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 4, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 5, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 6, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 7, firstName: "Abhishek", lastName: "Sharma"},
    { sno: 8, firstName: "Abhishek", lastName: "Sharma"},
]


  return (
    <Skeleton>

     
      <div className="p-10">
        <TopComponent title="Users" component="Users" current="Create Users" />
        <div className="w-auto bg-white mt-10 rounded-lg shadow-2l pb-2">
          <div className="p-5 border-b border-#6c6c6c-500  m-b-2">
            <h1 style={{ fontWeight: 700 }}>Add User</h1>
          </div>
          <div className="py-10 px-5">
            <div className="py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6">
              Users Information
            </div>
            <form action="#" onSubmit={(event) => onSubmit(event)}>
              <div className="mb-5">
                <h1 className="block text-gray-700 text-sm font-bold mb-2">
                  Name<span className="text-red-500">&nbsp;*</span>
                </h1>
                <div className="grid grid-cols-2 gap-5">
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

              <div className="mb-5">
                <div className="grid grid-cols-2 gap-5">
                  <Input
                    id="company"
                    label={"Company"}
                    required
                    type={""}
                    placeholder="Company"
                    value={company}
                    onChange={(v) => setCompany(v)}
                  />
                  <Input
                    id="date"
                    label={"Date"}
                    required
                    type={"date"}
                    placeholder="Select Date"
                    value={date}
                    onChange={(v) => setDate(v)}
                  />
                </div>
              </div>

              <div className="mb-5">
                <div className="grid grid-cols-1 gap-5">
                  <select className="w-full h-10 border-1 shadow-md outline-0 rounded-lg bg-white border-gray-300">
                    <option>Select Roll</option>
                    <option>Councellor</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
              <div className="mb-5">
              <div className="py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6">
              Additional Information
            </div>
            <div className="mb-5">
            <div className="grid grid-cols-1 gap-5">
              
              <Input
                    id="file"
                    label={"Profile Photo"}
                    required
                    type={"file"}
                    placeholder="Choose file"
                    value={profile}
                    onChange={(v) => setProfile(v)}
                />
            </div>
            </div>
            <div className="mb-5">
                <div className="grid grid-cols-2 gap-5">
                  <Input
                    id="number"
                    label={"Mobile"}
                    required
                    type={""}
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
              </div>

              
              <div className="text-center space-x-5 mt-10">
              <Table
                      columns={columns1}
                      data={data1}

                  />
              </div>
              <div className="text-center space-x-5 mt-10">
                <button
                  className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
                  type="submit"
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
        </div>
      </div>

     
    </Skeleton>
  );
}

export default CreateUserForm;
