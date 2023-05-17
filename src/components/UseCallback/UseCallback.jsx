import { useCallback, useState } from "react";
import Todos from "./ToDo"
import { Link } from "react-router-dom";
const UseCallbaclExample = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(count + 1);
    }

    const addTodo = useCallback(()=>{
        setTodos((prev) => [...prev, `new Entry `]);
    }, [])
                                                        
    return(
        <>
            <Todos todos={todos} addTodo={addTodo} />            
            <hr />
            <div>
                Count: {count} {''}
                <button onClick={increment}>+</button>
            </div>

            <Link to='/'>Go back</Link>
        </>
    )
}

export default UseCallbaclExample;