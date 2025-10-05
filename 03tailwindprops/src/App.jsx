import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-400 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card username="jay" post="CEO Bitch" />
      {/* //giving value */}
      <Card username="jaaayyyy" post="Staff Engineer" />
      <Card />

      <Footer name="Jay G"/>
    </>
  );
}

export default App;
