import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography } from "antd";
import axios from "axios";

const Update = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const getPrevDataFromLocal = () => {
    setName(localStorage.getItem("name"));
    setLastName(localStorage.getItem("lastname"));
    setEmail(localStorage.getItem("email"));
    setId(localStorage.getItem("id"));
  };

  useEffect(() => {
    getPrevDataFromLocal();
  }, []);

  const saveNewData = () => {
    axios.put(`http://localhost:3000/user/${id}`, { name, lastName, email });
  };
  return (
    <>
      <div className="form-area flex justify-center h-screen items-center  ">
        <div
          className="form-content flex flex-col  items-center bg-green-700"
          style={{ width: 500, height: 600 }}
        >
          <Typography.Title level={2}>Register Form</Typography.Title>
          <form className=" ">
            <label htmlFor="name-input">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-100 rounded-md w-80 outline-none focus:outline-blue-500 px-2.5 p-1 ml-2.5 block my-2.5"
                placeholder="Enter Name..."
                id="name-input"
                required
              />
            </label>
            <label htmlFor="lastName-input">
              LastName:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-slate-100 rounded-md w-80 outline-none focus:outline-blue-500 px-2.5 p-1 ml-2.5 block my-2.5"
                placeholder="Enter Lastname"
                id="lastName-input"
                required
              />
            </label>
            <label htmlFor="email-input">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-100 rounded-md w-80 outline-none focus:outline-blue-500 px-2.5 p-1 ml-2.5 block my-2.5"
                placeholder="Enter Email"
                id="email-input"
              />
            </label>

            <Link to={"/read"}>
              <button
                onClick={saveNewData}
                type="submit"
                className="bg-red-700  p-1 w-full rounded-md text-white my-5"
              >
                Submit
              </button>
            </Link>

            <Link to={"/read"}>
              <button className="bg-blue-700 p-1 text-white block w-full">
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
