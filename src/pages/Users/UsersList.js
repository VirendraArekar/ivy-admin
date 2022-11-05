import React, { useState, useEffect } from "react";
import Skeleton from "../../layouts/Skeleton";
import TopComponent from "../../components/TopComponent";
import CircularButton from "../../components/CircularButton";
import Table from "../../components/Table";
import { MdDelete, MdEdit } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import MultiSelect from "../../components/MultiSelect_U";

import Input from "../../components/Input";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "12389",
    position: "fixed",
    width: "70%",
    height: "82%",
  },
};

function UserList() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
      company,
      date,
      phone,
      email,
      profile,
    };
    console.log(values,"values---");
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

  const columns = [
    {
      name: "S.no.",
      selector: (row) => row.sno,
      width: "80px",
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      width: "220px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: "180px",
    },
    {
      name: "Company",
      selector: (row) => row.company,
    },
    {
      name: "Roll",
      cell: (row) => (
        <>
          <MultiSelect
            options={[
              "John Doe",
              "Naveen Din",
              "John Doe",
              "Martin Gill",
              "Naveen Din",
            ]}
          />
        </>
      ),
      width: "150px",
    },
    {
      name: "Date Added",
      selector: (row) => row.date,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button className="btn-bg-green  hover:btn-bg-green text-white font-bold py-2 px-2 rounded mx-1">
            <MdEdit />
          </button>
          <button className="btn-bg-gray  hover:btn-bg-grey text-white font-bold py-2 px-2 rounded mx-1">
            <MdDelete />
          </button>
        </>
      ),
    },
  ];
  const data = [
    {
      sno: 1,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 2,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 3,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 4,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 5,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 6,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 7,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
    {
      sno: 8,
      firstName: "Abhishek",
      lastName: "Sharma",
      company: "Ivy Overseas",
      email: "abhi@abhi.com",
      date: "2-5-2022",
    },
  ];

  const columns_ADD = [
    {
      name: "Module Permissions",
      selector: (row) => `${row.firstName} ${row.lastName}`,
      width: "150px",
    },
    {
      name: "Enquiry Assign",
      // selector: (row) => row.email,
      width: "100px",
      cell: (row) => (
        <>
          <input type={"checkbox"}></input>
        </>
      ),
      display: "flex",
      justifyContent: " center",
    },
    {
      name: "Dashboard Access",
      cell: (row) => (
        <>
          <input type={"checkbox"}></input>
        </>
      ),
      width: "100px",
    },

    {
      name: "create/Add",
      cell: (row) => (
        <>
          <input type={"checkbox"}></input>
        </>
      ),
      width: "100px",
    },
    {
      name: "Delete",
      cell: (row) => (
        <>
          <input type={"checkbox"}></input>
        </>
      ),
      width: "100px",
    },
    {
      name: "Read",
      cell: (row) => (
        <>
          <input type={"checkbox"}></input>
        </>
      ),

      width: "100px",
    },
  ];
  const data_add = [
    { sno: 1, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 2, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 3, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 4, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 5, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 6, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 7, firstName: "Abhishek", lastName: "Sharma" },
    { sno: 8, firstName: "Abhishek", lastName: "Sharma" },
  ];

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Skeleton>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="border-b-2">
          <div className="py-3 px-3 bg-neutral-200 w-80 rounded-md font-semibold mb-6">
                      Add Information
            </div>
            <button
            onClick={closeModal}
            style={{ position: "absolute",top: '1.5rem', right: "2rem", fontWeight: "900" }}>X</button>
          </div>
         
          <div className="p-5">
            <div className="w-auto bg-white mt-0 rounded-lg shadow-2l pb-2">
              <div className="py-10 px-5">
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
                    <Table columns={columns_ADD} data={data_add} />
                  </div>
                  <div className="text-center space-x-5 mt-10">
                    <button
                      className={`text-white text-base rounded-3xl py-2 px-10 btn-bg-green `}
                      type="submit"
                    >
                      Submit
                    </button>

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
        </Modal>
      </div>

      <div className="p-8">
        <TopComponent title="User" component="Users" current="List" />
        <div className="w-auto bg-white mt-10 rounded-lg shadow-2l pb-2">
        
          <div className="p-5 border-b border-#6c6c6c-500  m-b-2 flex justify-between">
          <div className='py-3 px-3'><h1 style={{ fontWeight: 700 }}>Users</h1></div>
            <div className="px-8 py-3">
              <CircularButton
                onClick={openModal}
                title={"Add User"}
                bgColor={"btn-bg-green"}
                bgColorHover={""}
              />
            </div>
          </div>
          <div
            className="p-5 border-b border-#6c6c6c-500  m-b-2 flex"
            style={{ justifyContent: " center" }}
          >
            <SearchBar></SearchBar>
          </div>

          <Table columns={columns} data={data} />
        </div>
      </div>
    </Skeleton>
  );
}

export default UserList;
