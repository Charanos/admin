import { useState } from "react";
import { user_rows } from "../../data";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { DataGrid } from "@material-ui/data-grid";

const Users = () => {
  const [data, setdata] = useState(user_rows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      width: 200,
      editable: true,
      field: "user",
      headerName: "User name",
      renderCell: (params) => {
        return (
          <div className="users-username">
            <img src={params.row.avatar} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      width: 200,
      field: "email",
      editable: true,
      headerName: "Email Address",
    },
    {
      field: "age",
      width: 150,
      editable: true,
      headerName: "Age",
      description: "in years.",
    },
    {
      width: 100,
      field: "status",
      sortable: false,
      headerName: "status",
      description: "This column has a value getter and is not sortable.",
    },
    {
      width: 100,
      field: "action",
      sortable: false,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className="users-actions">
            <Link to={"/user/" + params.row.id}>
              <FiEdit className="icons" />
            </Link>
            <MdDelete
              className="icons del"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="users-page">
      <div className="users-page__wrapper">
        <h3 className="heading">members</h3>

        <DataGrid
          pageSize={10}
          rows={data}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Users;
