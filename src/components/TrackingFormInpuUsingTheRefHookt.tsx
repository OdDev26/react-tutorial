import React, { FormEvent, useRef } from "react";

const TrackingFormInpuUsingTheRefHook = () => {
  //   We need to specify HTMLInputElement as the type of html element we want to reference using useRef
  // THis is compulsory to prevent an error on line 11
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null && ageRef.current !== null) {
      // Doing this enables us get the name input field values
      console.log(nameRef.current.value);
      console.log(ageRef.current.value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default TrackingFormInpuUsingTheRefHook;
