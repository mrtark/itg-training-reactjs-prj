// Akif Yanamatma, Homework 2 28.02.24

import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../axiosSample/axiosInstance"; //Akif:"../api/axiosInstance";

function AddCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const add = (values) => {
    axiosInstance
      .post("categories", values)
      .then((res) => {
        alert("Success!");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(add)}>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>Name field can not be empty!</span>}
        </div>
        <div>
          <label htmlFor="">Description:</label>
          <input type="text" {...register("description")} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddCategory;
