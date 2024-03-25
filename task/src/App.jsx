import React, { useState } from "react";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ItemList from "./Components/Items";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="container mx-auto">
      {!token ? (
        <>
          <Login setToken={setToken} />
          <Register setToken={setToken} />
        </>
      ) : (
        <ItemList token={token} />
      )}
    </div>
  );
};

export default App;
