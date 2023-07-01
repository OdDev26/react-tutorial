import React from "react";

const Form = () => {
  return (
    <form
      onSubmit={(event) => {
        // To prevent this form from being submitted to a server, we do
        event.preventDefault();
        console.log("Submitted");
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/** We add id below to ensure when we click on the label 'Name' input automatically gets focused  */}
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
