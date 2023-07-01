import React, { useState } from "react";

const TrackingFormInputUsingTheStateHook = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            /**We use the onChange event handler to keep track of the inputs **/
            onChange={(event) =>
              setPerson({
                ...person,
                name: event.target.value,
              })
            }
            // To ensure the input value is tied to the react state(single source of truth)
            // meaning it would be in sync with the state, this makes the input field a controlled component
            // because its state is entirely controlled by react not the dom
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>

          <input
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
            value={person.age}
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

export default TrackingFormInputUsingTheStateHook;
