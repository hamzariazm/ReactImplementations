import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': {
            return state + 1;
        }
        case 'DECREMENT': {
            if(state > 0){
                return state - 1;
            }else{
                return 0;
            }
        }
        default: {
            return state;
        }
    }
}

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
        <>  
            <p>Count: {state}</p>
            <div>
                <button onClick={()=>{dispatch({type: "INCREMENT"})}}>Incrememt</button>
                <button onClick={()=>{dispatch({type: "DECREMENT"})}}>Deccrememt</button>
            </div>
        </>
    );
}

export default UseReducerExample;