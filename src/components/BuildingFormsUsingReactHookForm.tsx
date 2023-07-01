import React from "react";
import { useForm, FieldValues } from "react-hook-form";

// To ensure we get autocompletion when we call errors.name
interface FormData {
  name: string;
  age: number;
}

const BuildingFormsUsingReactHookForm = () => {
  // Using react-hook-form ensures we don't need to use the onChange handler and value on our
  // input fields

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // "register" when given an input id helps us store the input values in the returned object's ref fields
  // "handleSubmit" is used to handle the submit action. It accepts the data"
  // "formState" is used for showing form errors to a user. We can do this by accessing its errors field (done above)

  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })} // By doing this all the fields in the object returned like ref, onChange, etc are made available to this input field
            // Adding "required" as true and minLength as 3 ensures the user must pass an input of at least 3 chars

            id="name"
            type="text"
            className="form-control"
          />
          {/** What line 39 is saying is show "This field is required only" if the error object on the name input is not empty and it's name.type is required" */}
          {errors.name?.type === "required" && (
            <p className="text-danger">This field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">Name must be at least 3 characters</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>

          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BuildingFormsUsingReactHookForm;
