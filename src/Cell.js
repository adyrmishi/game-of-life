export default function Cell({ state }) {
    return (
        <div id="cell">
            <p>{state === 1? "{}" : "_"}</p>
        </div>
    )
};