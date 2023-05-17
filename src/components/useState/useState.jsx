import { useState } from "react";

const UseStateExample = () => {
    const [age, setAge] = useState(0);

    const addThree = () => {
        setAge(age + 3);
    }

    const addOne = () => {
        setAge(age + 1);
    }

    const addAge = (e) => {
        setAge(Number(e.target.value));
    }

    return(
        <>  <input type="text" value={age} onChange={addAge}></input>
            <h3>Your age: {age}</h3>
            <button onClick={addThree}>Add 3</button>
            <button onClick={addOne}>Add 1</button>
            <button onClick={()=>setAge(0)}>Reset</button>
        </>
    )

}

export default UseStateExample;