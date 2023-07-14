import React from "react";
import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      {/** With event.target.value we can get the selected option value */}
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        className="form-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
