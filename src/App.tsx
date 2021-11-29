import { useState } from "react";
import { themeClass, exampleStyle } from "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={themeClass}>
      <h1 className={exampleStyle}>Hello world!</h1>
    </div>
  );
}

export default App;
