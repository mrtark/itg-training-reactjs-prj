//PK: was:CategoryAdd in inner index.tsx integrated as CategoryAdd.tsx
import { Button, CircularProgress, TextField } from "@mui/material";
import { useForm } from "react-hook-form";//Serhat:{ Form, useForm }
import {axiosInstance} from "../../axiosSample/axiosInstance"; //Serhat:import axiosInstance from "../../../config/axiosInstance";
import { useMutation } from "react-query";
//PK: requires: tsconfig.json //import React from 'react';//PK added to fix form,TextField usage prob.: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.ts(2686)
//PK: post URL postfix fixed as categories, was:axiosInstance.post("category", newCategory)
function CategoryAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    let newCategory = {
      name: data.name,
      description: data.description,
    };

    handleAddCategory(newCategory);
  };

  const addCategoryMutation = useMutation(
    (newCategory: any) => axiosInstance.post("categories", newCategory),
    {
      onSuccess: () => {
        reset();
      },
      onError: (error) => {
        console.error("Add Category mutation error:", error);
      },
    }
  );
  
  const handleAddCategory = async (newCategory: any) => {
    try {
      await addCategoryMutation.mutateAsync(newCategory);
    } catch (error) {
      console.error("Add Category mutation error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="name"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("name", { required: true, maxLength: 10 })}
      />
      {errors.name?.type === "required" && <span>This field is required</span>}
      {errors.name?.type === "maxLength" && <span>maxLength 10</span>}
      <TextField
        label="description"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("description")}
      />
      {errors.description?.type === "required" && (
        <span>This field is required</span>
      )}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={addCategoryMutation.isLoading} // İşlem devam ederken düğmeyi devre dışı bırak
      >
        {addCategoryMutation.isLoading ? (
          <CircularProgress size={24} />
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}

export default CategoryAdd;