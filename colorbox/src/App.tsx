import { useEffect, useState } from "react";
import "./App.css";

const array = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function App() {
  const [flatArray, setFlatArray] = useState<number[]>([]);
  const [clickedOrder, setClickedOrder] = useState<number[]>([]);
  const [boxCount, setBoxCount] = useState<number>(0);
  const flatternArray = (source: any, result: any) => {
    for (let i = 0; i < source.length; i++) {
      if (typeof source[i] !== "number") {
        flatternArray(source[i], result);
      } else {
        result.push(source[i]);
      }
    }
    return result;
  };
  useEffect(() => {
    const temp = flatternArray(array, []);

    setFlatArray(temp);
    const count = temp.filter((num: number) => num === 1).length;
    setBoxCount(count);
  }, []);

  const startDecolor = () => {
    let temp = clickedOrder;
    const interval = setInterval(() => {
      if (temp.length > 0) {
        temp.pop();
        setClickedOrder([...temp]);
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  useEffect(() => {
    if (clickedOrder.length === boxCount) {
      startDecolor();
    }
  }, [clickedOrder]);

  const appendBox = (index: number, value: number) => {
    if (!clickedOrder.includes(index) && value === 1) {
      setClickedOrder([...clickedOrder, index]);
    }
  };

  return (
    <div className="boxConatiner">
      {flatArray.map((item, index: number) => {
        return (
          <div onClick={() => appendBox(index, item)}>
            {item === 1 && (
              <div
                className={clickedOrder.includes(index) ? "coloredBox" : "box"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
