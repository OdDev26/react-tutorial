import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const UsingZodToHandleFormValidation = () => {
  // Create object to hold form input validations
  const schema = z.object({
    name: z
      .string()
      .min(7, { message: "Name must be at least seven characters" }),
    // To ensure we display a custom error when an input that's not a number is entered for age we create the invalid_type_error object
    age: z
      .number({ invalid_type_error: "Age is required" })
      .min(18, { message: "Age must be at least 18" }),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })} // We set "valueAsNumber" to true to ensure react treats this input as a number
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UsingZodToHandleFormValidation;
