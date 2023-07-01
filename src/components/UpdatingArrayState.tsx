import React, { useState } from "react";

const UpdatingArrayState = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);
  return (
    <div>
      <h1>
        {bugs.map((bug) => (
          <p key={bug.id}>
            {bug.title}
            {bug.fixed}
          </p>
        ))}
      </h1>
      <button
        style={{ width: "200px", height: 100 }}
        onClick={() => {
          setBugs(
            bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug))
          );
        }}
      ></button>
    </div>
  );
};

export default UpdatingArrayState;
