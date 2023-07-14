import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

// We create a User interface to enable us to tell typescript we would be fetching an array of user objects
// to ensure we get autocompletion when accessing the user objects in the response data

interface User {
  id: number;
  name: string;
  username: string;
}

const LearningToFetchDataFromBackend = () => {
  const [users, setUsers] = useState<User[]>([]); // Note User[] is the type of the array
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return; // With this we no longer see the cancelled error message
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []); // adding an empty array ensures the effect hook runs just once. This is very important
  // to prevent a =n infinite call to the server

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default LearningToFetchDataFromBackend;
