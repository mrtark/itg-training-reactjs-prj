import React, { useState } from "react";
import { axiosInstance } from "../../axiosSample/axiosInstance"; //ISmail: "../api/axiosInstance";

function AddCategory() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  const add = () => {
    let newRecord = {
      name: name,
      description: description,
    };

    axiosInstance
      .post("/categories", newRecord)
      .then((res) => {
        alert("Success!");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => setname(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="">Description:</label>
        <input
          type="text"
          onChange={(e) => setdescription(e.target.value)}
        ></input>
      </div>
      <div>
        <button onClick={add}>Add</button>
      </div>
    </>
  );
}

export default AddCategory;
