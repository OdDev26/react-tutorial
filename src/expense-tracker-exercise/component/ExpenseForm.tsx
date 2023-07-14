import React from "react";
import categories from "../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import errorMap from "zod/lib/locales/en";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const schema = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 characters" })
    .max(100, { message: "Description must be at least 100 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),

  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset, // This is used to clear the form upon submission
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  console.log(errors);
  return (
    <div className="mb-5">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
