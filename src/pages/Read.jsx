import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3000/user").then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`).then(() => {
      getData();
    });
  };
  const saveDataToLocal = (id, name, lastName, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastName);
    localStorage.setItem("email", email);
  };
  return (
    <>
      <Typography.Title level={2} className="text-center pt-10">
        This Is The Read Page
      </Typography.Title>
      <div className="addUserBtn flex justify-center">
       <Link to={'/'}> <button className="bg-blue-700 p-1 rounded-md text-white  ">Add New User</button></Link>
      </div>
      <div className="full-filed flex justify-center items-center h-screen">
        <div className="table-container mb-80">
          <table className="p-2.5 border text-center ">
            <thead>
              <tr>
                <th className="border text-gray-500 p-1">UserId</th>
                <th className="border text-gray-500 p-1">Name</th>
                <th className="border text-gray-500 p-1">Lastname</th>
                <th className="border text-gray-500 p-1">Email</th>
                <th className="border text-gray-500 p-1" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((userDatas) => (
                <tr key={userDatas.id}>
                  <td className="border p-2.5 text-center text-gray-400">
                    {userDatas.id}
                  </td>
                  <td className="border p-2.5 text-center text-gray-400">
                    {userDatas.name}
                  </td>
                  <td className="border p-2.5 text-center text-gray-400">
                    {userDatas.lastName}
                  </td>
                  <td className="border p-2.5 text-center text-gray-400">
                    {userDatas.email}
                  </td>
                  <td className="border p-2.5 text-center text-gray-400">
                   <Link to={'/update'}>
                   <Button
                      onClick={() =>
                        saveDataToLocal(
                          userDatas.id,
                          userDatas.name,
                          userDatas.lastName,
                          userDatas.email
                        )
                      }
                    >
                      <EditOutlined title="Edit User" />
                    </Button>
                   </Link>
                  </td>
                  <td className="border p-2.5 text-center text-gray-400 ">
                    <Button>
                      <UserDeleteOutlined
                        title="delete User"
                        onClick={() => deleteUser(userDatas.id)}
                      />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
