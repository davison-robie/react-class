import { useState } from "react";

const State = () => {
    const [monkeys, setCount] = useState(10);
    function decCount() {
        setCount(monkeys - 1);
    }
    function resetMonkeys(){
        setCount(monkeys + 10);
    }
    if (monkeys > 0){
        return (
            <div className="monkeyBusiness">
            <button onClick={decCount}>Fall Off!</button>
            <p> { monkeys } little monkeys jumping on the bed. One fell of and bumped his head! </p>
            <p>Momma called the doctor and the doctor said: "No more monkeys jumping on the bed."</p>
            </div>
        )
    } else if (monkeys <= 0) {
        return (
            <div className="monkeyBusiness">
                <button onClick={resetMonkeys}>Reset the Monkeys!</button>
                <p>There are no more monkeys jumping on the bed!</p>
            </div>
        )
    }
}

export default State;