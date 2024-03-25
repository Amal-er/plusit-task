import React, { useState, useEffect } from "react";
import axios from "axios";

const Items = ({ token }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://interview-plus.onrender.com/api/items",
          {
            headers: { "x-access-token": token },
          }
        );
        setItems(response.data);
        setError("");
      } catch (error) {
        setError("Failed to fetch items. Please log in again.");
      }
    };

    if (token) {
      fetchItems();
    }
  }, [token]);

  return (
    <div className="p-4">
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {items.map((item) => (
        <div key={item.id} className="bg-gray-200 p-4 my-2 rounded">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
