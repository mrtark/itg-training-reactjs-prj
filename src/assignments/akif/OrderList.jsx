// Akif Yanamatma, Homework 2

import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosSample/axiosInstance"; //Akif:"../api/axiosInstance";
import { DataGrid, trTR } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import "dayjs/locale/tr";

dayjs.locale("tr");

function OrderList() {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    axiosInstance.get("/orders").then((res) => {
      setorders(res.data);
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "customerId",
      headerName: "Customer ID",
      width: 200,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      width: 250,
      renderCell: (params) => {
        return dayjs(params.value).format("DD MMMM YYYY dddd");
      },
    },
    {
      field: "shippedDate",
      headerName: "Shipped Date",
      width: 250,
      renderCell: (params) => {
        return dayjs(params.value).format("DD MMMM YYYY dddd");
      },
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => {
        return (
          <Button
            onClick={() => deleteOrder(params.row.id)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const deleteOrder = (id) => {
    axiosInstance.delete("/orders/" + id).then((res) => {
      loadOrders();
    });
  };

  return (
    <>
      <div style={{ height: 400 }}>
        <DataGrid
          rows={orders}
          columns={columns}
          localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </>
  );
}

export default OrderList;
