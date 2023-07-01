import React, { useState } from "react";
import produce from "immer";

const SimplifyingArrayStateUpdateLogicWithImmer = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button
        onClick={() => {
          setBugs(
            produce((draft) => {
              const bug = draft.find((bug) => bug.id === 1);
              if (bug) bug.fixed = true;
              console.log(bug);
            })
          );
        }}
        style={{ width: "60px", height: 60 }}
      ></button>
    </div>
  );
};

export default SimplifyingArrayStateUpdateLogicWithImmer;
