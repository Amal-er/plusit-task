import React, { useState } from "react";
import axios from "axios";

const Register = ({ setToken }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/register",
        { name, email, password }
      );
      setToken(response.data.token);
    } catch (error) {
      setError("Registration failed. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 p-2 border rounded w-full"
        />
        <button
          onClick={handleRegister}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Register
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
