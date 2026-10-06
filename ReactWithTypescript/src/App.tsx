import { useState } from "react";
import { ChaiCard } from "./component/ChaiCard.tsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Rohit Prajapati</h1>

        <ChaiCard name="headPhone" price="4000" />
      </div>
    </>
  );
}

export default App;
