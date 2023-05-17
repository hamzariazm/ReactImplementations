import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../features/counter/CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h3>{count}</h3>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter;