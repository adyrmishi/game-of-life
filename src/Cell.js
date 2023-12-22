export default function Cell({ state }) {
    return (
        <div id="cell" class={state === 1? 'alive': 'dead'}>
            <p>{state === 1? "{}" : "_"}</p>
        </div>
    )
};