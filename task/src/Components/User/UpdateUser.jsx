import React, { useState } from "react";
import axios from "axios";

const DeleteUser = ({ token }) => {
  const [error, setError] = useState("");

  const handleDeleteUser = async () => {
    try {
      await axios.delete(
        "https://interview-plus.onrender.com/api/delete-user",
        {
          headers: { "x-access-token": token },
        }
      );
      setError("");
    } catch (error) {
      setError("Delete failed. Please try again later.");
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleDeleteUser}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete User
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default DeleteUser;
