import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";
import Spinner from "./common/spinner";
import Table from "./common/table";
import { Link } from "react-router-dom";
const Users = () => {
  // const [users, setUsers] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const columns = [
    { path: "id", label: "ID" },
    { path: "name", label: "Name" },
    { path: "username", label: "UserName" },
    { path: "email", label: "Email" },
    {
      label: "Actions",
      content: (item) => (
        <>
          <button
            className="btn btn-danger m-2"
            onClick={() => handleDelete(item)}
          >
            Delet
          </button>
          {/* <button
            className="btn btn-warning m-2"
            onClick={() => setSelectedItem(item)}
          >
            Edit
          </button> */}
          <Link className="btn btn-primary " to={`/users/${item.id}`}>
            View
          </Link>
        </>
      ),
    },
  ];
  const { data: users, setData: setUsers } = useFetch("/users");
  const handleDelete = (item) => {
    const NewData = users.filter((user) => user.id !== item.id);
    setUsers(NewData);
    toast.warning(" User is deleted succesfully");
  };
  return (
    <>
      <h1> Users page</h1>
      {users ? <Table data={users} columns={columns} /> : <Spinner />}
    </>
  );
};

export default Users;
