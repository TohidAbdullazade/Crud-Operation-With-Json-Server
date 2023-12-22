import { Typography } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Create = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const saveData = (e) => {
    if ((name, lastName, email === "")) {
      const notify = () => {
        toast.error("All Fields must be filled", {
          position: "top-center",
          autoClose: 1500,
          draggable: true,
          closeOnClick: true,
        });
      };
      notify();
    } else {
      const notify = () => {
        toast.success("Wait until the data is added", {
          position: "top-center",
          autoClose: 1500,
        });
      };
      notify();
      setTimeout(() => {
        axios.post("http://localhost:3000/user", { name, lastName, email });
        navigate("/read");
      }, 1800);
    }
    e.preventDefault();
    setName("");
    setEmail("");
    setLastName("");
  };


  return (
    <>
      <ToastContainer />
      <div className="form-area flex justify-center h-screen items-center my-10 ">
        <div
          className="form-content flex flex-col pt-40 items-center bg-green-700"
          style={{ width: 500, height: 600 }}
        >
          <Typography.Title level={2}>Register Form</Typography.Title>
          <form className=" grid grid-rows-4 gap-5" >
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
            <label htmlFor="email-input" >
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
                type="submit"
                className="bg-red-700  p-1 w-full rounded-md text-white "
                onClick={saveData}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
