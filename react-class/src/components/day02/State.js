import { useState } from "react";

const State = () => {
    const [count, setCount] = useState( () => {
        console.log("Function Ran!")
        return 4
    })
    function decCount() {
        setCount(count - 1);
    }
    function incCount() {
        setCount(count + 1);
    }
    return (
        <>
        <button onClick={decCount}>-</button>
        <span>  { count }  </span>
        <button onClick={incCount}>+</button>
        </>
    )
}

export default State;