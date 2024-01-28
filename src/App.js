import { useState } from "react";
import "./App.css";
import CatchyCheckbox from "./components/CatchyCheckbox/CatchyCheckbox";
import AnimatedCheckbox from "./components/AnimatedCheckbox/AnimatedCheckbox";
import CenteredTextHR from "./components/CenteredTextHR/CenteredTextHR";
import IranMap from "./components/IranMap/IranMap";
import AroundCircle from "./components/AroundCircle/AroundCircle";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="App">
      <div className="flex flex-col">
        <CenteredTextHR title="چک باکس" type={1} />
        <div className="w-full">
          <CatchyCheckbox
            handleCheck={() => setIsChecked(!isChecked)}
            isActive={isChecked}
            label="چکباس سفارشی ۱"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <CenteredTextHR title="چک باکس" type={2} />
        <div className="w-full">
          <AnimatedCheckbox
            handleCheck={() => setIsChecked(!isChecked)}
            isActive={isChecked}
            label="چکباس سفارشی ۲"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <CenteredTextHR title="نقشه ایران" type={1} />
        <div className="w-full flex justify-center">
          <div className="w-[400px]">
            <IranMap />
          </div>
        </div>
      </div>


      <div className="flex flex-col">
        <CenteredTextHR title="Around Circle" type={1} />
        <div className="w-full">
          <AroundCircle dataArray={['test1', 'test2', 'test3', 'test4', "test5", "test6", "test7"]} title="hello world" />
        </div>
      </div>
    </div>
  );
}

export default App;
