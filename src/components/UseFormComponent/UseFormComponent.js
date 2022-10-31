import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { Button } from "react-bootstrap";
import Select from "react-select";

import Navbarcomp from "../Navbar/Navbarcomp";

const UseFormComponent = () => {
  // const schema = yup.object({
  //     name: yup.string().required(),
  //     age: yup.number().positive().integer().required(),
  //   }).required();

  const {
    handleSubmit,
    register,
    control,
    resetField,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset({
        name:'',
        role:''
    });
  };
  const formError = (errors) => {
    console.log(errors);
    {
      errors?.password && resetField("password");
    }
  };



  const validateOptions = {
    name: { required: "Name is Required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password should be more than 6 characters",
      },
    },
    role: {
      required: "Role is necessary",
    },
    age: {
      required: "Age is necessary",
    },
  };

  const selectOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <Navbarcomp /> <br />
      <br />
      <br />
      <form onSubmit={handleSubmit(formSubmit, formError)}>
        <div>
          <label>name</label>
          <input name="name" {...register("name", validateOptions.name)} />
          {errors?.name && errors?.name.message}
        </div>
        <br />
        <br />
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", validateOptions.password)}
          />
          {errors?.password && errors?.password.message}
        </div>
        <br />
        <br />
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            {...register("age", validateOptions.age)}
          />
          {errors?.age?.message}
        </div>
        <br />
        <br />
        <Controller
          name="role"
          control={control}
          rules={validateOptions.role}
          render={({ field }) => (
            <Select options={selectOptions} {...field} label="Text field" />
          )}
        />
        <br />
        <br />
        {errors?.role && errors?.role.message}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default UseFormComponent;
