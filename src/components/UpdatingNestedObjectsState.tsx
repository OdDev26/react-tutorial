import React, { useState } from "react";

const UpdatingNestedObjectsState = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      state: "Lagos",
      zipCode: "2001",
    },
  });
  const [newCustomer, setNewCustomer] = useState({
    // Doing the below ensures that our new object's address does not point to the same location of
    //customer's address in memory (ensuring the newCustomer is completely independent/detached from the
    // customer object)
    ...customer,
    address: { ...customer.address, zipCode: "1200" },
  });
  return (
    <div>
      <h1>{customer.address.zipCode}</h1>
      <button onClick={() => setCustomer(newCustomer)}></button>
    </div>
  );
};

export default UpdatingNestedObjectsState;
