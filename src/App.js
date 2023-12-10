import { useState } from "react";
import "./App.css";
import CatchyCheckbox from "./components/CatchyCheckbox/CatchyCheckbox";
import AnimatedCheckbox from "./components/AnimatedCheckbox/AnimatedCheckbox";
import CenteredTextHR from "./components/CenteredTextHR/CenteredTextHR";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="App">
      <div className="flex flex-col">
        <CenteredTextHR title="چک باکس" type={1} />
        <CatchyCheckbox
          handleCheck={() => setIsChecked(!isChecked)}
          isActive={isChecked}
          label="چکباس سفارشی ۱"
        />
      </div>

      <div className="flex flex-col">
        <CenteredTextHR title="چک باکس" type={2} />
        <AnimatedCheckbox
          handleCheck={() => setIsChecked(!isChecked)}
          isActive={isChecked}
          label="چکباس سفارشی ۲"
        />
      </div>
    </div>
  );
}

export default App;
