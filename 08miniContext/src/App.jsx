import { useState } from "react";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>react context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
