import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

 const Cell = ({count}) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [value, setValue] = useState(count)

    const handleCellClick = () => {
      setIsEmpty(false)
      if(isEmpty) {
        setValue(count+1)
      } else {
        setValue(count)
      }
    }
    return (<div onClick={handleCellClick} className="cell">{isEmpty ? "" : value}</div>)
  }


function App() {
  const [gridSize, setGridSize] = useState(0);
  const [gird, setGrid] = useState(null);
  const [renderGrid, setRenderGrid] = useState(false);
  const createGrid = () => {
    setRenderGrid(true);
  };

 

  const renderCells = (gridSize) => {
  let i = 0;
  const createCells = () => {
    const grid= []
    let count = 1
    for(let i = 0 ; i < gridSize; i++) {
      const column = [] 
      for(let j = 0; j < gridSize; j++) {
        column.push(count)
        count = count +1
      }
      grid.push(column)
    }
    return (
      <div className="gridContainer">{grid.map((row, rowIndex) => {return (<div className="row">{row.map((column, columnIndex) => {return <Cell count={grid[rowIndex][columnIndex]}/>})}</div>)})}</div>
    )
  }
  return (<div>{createCells()}</div>)
}
  return (
    <div className="App">
      <header className="App-header">
        <h3>Grid Incremental</h3>
        <div>
          <input
            type="number"
            placeholder="size of the grid"
            onChange={(e) => {
              setRenderGrid(false);
              setGridSize(e.target.value);
            }}
            value={gridSize}
          ></input>
          <button onClick={createGrid}>Create</button>
        </div>
        {renderGrid && <div>{renderCells(gridSize)}</div>}
      </header>
    </div>
  );
}

export default App;
