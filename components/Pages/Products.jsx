import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { products_rows } from "../../data";
import { DataGrid } from "@material-ui/data-grid";

const Products = () => {
  const [data, setdata] = useState(products_rows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      width: 300,
      editable: true,
      field: "products",
      headerName: "Product",
      renderCell: (params) => {
        return (
          <div className="products-name">
            <img src={params.row.product_image} alt="avatar" />
            {params.row.product_name}
          </div>
        );
      },
    },
    {
      width: 150,
      field: "product_quantity",
      editable: true,
      headerName: "Quantity",
    },
    {
      field: "available",
      width: 150,
      editable: true,
      headerName: "Available",
      description: "in years.",
    },
    {
      width: 150,
      field: "product_price",
      sortable: false,
      headerName: "Product Price",
    },
    {
      width: 100,
      field: "action",
      sortable: false,
      headerName: "Action",
      renderCell: (params) => {
        return (
          <div className="products-actions">
            <Link to={"/product/" + params.row.id}>
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
    <div className="products">
      <div className="products-wrapper">
        <h1 className="heading">products</h1>

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

export default Products;
