import { useState } from 'react';

export default function Cell({ state }) {

    const [alive, setAlive] = useState(false);

    function findNextState(alive, aliveNeighbours) {
        if (alive && aliveNeighbours < 2) {
            setAlive(false)
        } else if (alive && aliveNeighbours === 2 || 3){
            setAlive(true)
        } else if (alive && aliveNeighbours > 3) {
            setAlive(false)
        } else if (!alive && aliveNeighbours === 3) {
            setAlive(true)
        }
    }

    return (
        <div id="cell">
            <p>{state}</p>
        </div>
    )
};