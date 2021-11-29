import { useState } from "react";
import { themeClass, exampleStyle } from "./App.css";
import MyButton from "./components/myButton/myButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={themeClass}>
      <h1 className={exampleStyle}>Hello world!</h1>
      <MyButton />
      <MyButton color={"brand"} />
    </div>
  );
}

export default App;
