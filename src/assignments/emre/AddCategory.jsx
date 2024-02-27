import axios from "axios";
import React, { useState } from "react";

function AddCategories() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const add = () => {
    let newCategory = {
      name: name,
      description: description,
    };

    axios
      .post("https://northwind.vercel.app/api/categories", newCategory)
      .then((res) => {
        alert("Success!");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <label htmlFor="">Description:</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      
        <button onClick={add}>Add</button>
      </div>
    </>
  );
}

export default AddCategories;
