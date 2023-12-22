import Cell from './Cell';
import { useState, useEffect } from 'react';

export default function Grid() {

  let grid = new Array(10);

  for (let x = 0; x < 10; x++) {
      grid[x] = new Array(10); 
      for (let y = 0; y < 10; y++) {
          grid[x][y] = Math.floor(Math.random() * 2);
      }
  }
  
    
  const [cellStatus, setCellStatus] = useState(grid);
    const [iteration, setIteration] = useState(0);
    const extinct = (grid) => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (grid[i][j] === 1) {
                    return false
                }
            }
        }
        return true
    }

    const reset = () => {
        setCellStatus(grid);
        setIteration(0);
    }

  function findNextState(alive, neighbours) {
    if (alive && neighbours < 2) {
      return 0;
    } else if (alive && (neighbours === 2 || neighbours === 3)) {
      return 1;
    } else if (alive && neighbours > 3) {
      return 0;
    } else if (!alive && neighbours === 3) {
      return 1;
    } else {
      return alive;
    }
  }

  function getAliveNeighbours(x, y) {
    let aliveNeighbours = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (i >= 0 && i < 10 && j >= 0 && j < 10 && (i !== x || j !== y)) {
          aliveNeighbours += cellStatus[j][i];
        }
      }
    }
    return aliveNeighbours;
  }

  function makeRow(array, y) {
      return array.map((ele, x) => {
          if (iteration === 0) {
            return <Cell state={ele}/>;
          } else {
            return <Cell state={findNextState(ele, getAliveNeighbours(x, y))} />;
        }
    });
  }

  function makeGrid(arrays) {
    return arrays.map((array, y) => <div>{makeRow(array, y)}</div>);
  }

  function triggerIteration() {
    setIteration(prevIteration => prevIteration + 1);
  }

    useEffect(() => {
        extinct(cellStatus);
    setCellStatus(previousCellStatus =>
      previousCellStatus.map((row, y) =>
          row.map((alive, x) => findNextState(alive, getAliveNeighbours(x, y)))));
  }, [iteration]);

  return (
      <>
          <button onClick={reset}>Reset</button> 
          {!extinct(cellStatus)? <button onClick={triggerIteration}>Iterate</button> : false}
      <div id="grid">
        {makeGrid(cellStatus)}
      </div>
    </>
  );
}
