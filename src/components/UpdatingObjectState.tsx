import React, { useState } from "react";

const UpdatingObjectState = () => {
  const [no, setNo] = useState({
    name: "five",
    value: 5,
  });

  const [newNo, setNewNo] = useState({
    // name: no.name
    // We can write the above as
    ...no, // This copy all the existing fields in no here
    value: 6,
  });

  return (
    <div>
      <h1>{no.value}</h1>
      <button
        onClick={() => {
          setNo(newNo);
        }}
        style={{ color: "blue", width: "60px" }}
      >
        Click
      </button>
    </div>
  );
};

export default UpdatingObjectState;
