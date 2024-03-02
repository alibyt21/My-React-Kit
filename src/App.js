import { useEffect, useState } from "react";
import "./App.css";
import CatchyCheckbox from "./components/CatchyCheckbox/CatchyCheckbox";
import AnimatedCheckbox from "./components/AnimatedCheckbox/AnimatedCheckbox";
import CenteredTextHR from "./components/CenteredTextHR/CenteredTextHR";
import IranMap from "./components/IranMap/IranMap";
import AroundCircle from "./components/AroundCircle/AroundCircle";
import AlMarquee from "./components/AlMarquee/AlMarquee";
import ShiningEffect from "./components/ShiningEffect/ShiningEffect";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [circleCount, setCircleCount] = useState(0);
  const [dataArray, setDataArray] = useState([])
  let newDataArray = [];
  useEffect(() => {
    for (let index = 0; index < circleCount; index++) {
      newDataArray.push(`test${index}`);
      setDataArray(newDataArray)
      console.log(dataArray);

    }
  }, [circleCount])

  const handleCountChange = (e) => {
    const { target } = e;
    setCircleCount(target.value);
  }


  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center">
        <CenteredTextHR title="My Shining Button" type={1} />
        <ShiningEffect>
          <button className="bg-blue-500 p-3 py-2 rounded-xl">
            shining effect
          </button>
        </ShiningEffect>
      </div>


      <div className="flex flex-col justify-center items-center">
        <CenteredTextHR title="My custom Marquee" type={1} />
        <AlMarquee text="These are some of my custom components created in React" width={400} direction="ltr" />
      </div>


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
        <div className="flex w-full">
          <AroundCircle dataArray={["test0", "test1", "test2", "test3", "test4", "test5"]} title="hello world" />
          {/* <input onChange={handleCountChange} type="number" min="0" max="12" className="border border-black" /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
