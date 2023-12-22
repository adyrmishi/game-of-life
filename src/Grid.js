import Cell from './Cell';

export default function Grid() {

    const cellStatus = [[0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0]]
    
    const test = [1,0]

    function makeRow(array) { return array.map(ele => <Cell state={ele}/>) }

    function makeGrid(arries) {
        return arries.map(array => <div>{makeRow(array)}</div>)
    }
    
    return (
        <>
            <button>Start</button>
            <div id="grid">
                {makeGrid(cellStatus)}
            </div>
        </>
    )
};