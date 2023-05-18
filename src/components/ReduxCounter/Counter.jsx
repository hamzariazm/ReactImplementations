import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, resetState} from '../../features/counter/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <button onClick={() => {dispatch(resetState())}}>Reset Count</button>
    </div>
  )
}

export default Counter;