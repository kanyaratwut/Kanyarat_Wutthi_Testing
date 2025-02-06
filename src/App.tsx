import { useState } from "react";
import "./App.css";

function App() {
  interface IData {
    [x: string]: any;
    type: string;
    name: string;
  }

  const [data, setData] = useState<IData[]>([
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ]);
  const [fruitList, setFruitList] = useState<IData[]>([]);
  const [vegetableList, setVegetableList] = useState<IData[]>([]);

  const handleRemoveFromCate = (item: IData, type: string) => {
    if (type === "Fruit") {
      setFruitList((prev) => prev.filter((i) => i !== item));
    } else {
      setVegetableList((prev) => prev.filter((i) => i !== item));
    }
  };

  const handleAddItem = (item: IData) => {
    if (item.type === "Fruit") {
      setFruitList((prev) => [...prev, item]);
    } else {
      setVegetableList((prev) => [...prev, item]);
    }
    setData((prev) => prev.filter((i) => i !== item));

    setTimeout(() => {
      setData((prev) => {
        if (!prev.includes(item)) {
          return [...prev, item];
        }
        return prev;
      });
      handleRemoveFromCate(item, item.type);
    }, 5000);
  };

  const handleRemoveItem = (item: IData, type: string) => {
    handleRemoveFromCate(item, type);
    setData((prev) => [...prev, item]);
  };

  return (
    <div>
      <div className="container">
        <div>
          {data.map((item, index) => {
            return (
              <div
                className="data-list-wrapper"
                key={index}
                onClick={() => handleAddItem(item)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="data-select-list-wrapper">
          <div className="header">Fruit</div>
          {fruitList.map((item, index) => {
            return (
              <div
                className="item"
                onClick={() => handleRemoveItem(item, "Fruit")}
                key={index}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="data-select-list-wrapper">
          <div className="header">Vegetable</div>
          {vegetableList.map((item, index) => {
            return (
              <div
                className="item"
                onClick={() => handleRemoveItem(item, "Vegetable")}
                key={index}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
