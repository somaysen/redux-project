import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/conuterSlice'
import { useState } from 'react'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setnum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() =>{
        dispatch(increment())
      }} >Increment</button>
      <button onClick={() =>{
        dispatch(decrement())
      }} >Decrement</button>

      <input type="number" value={num} onChange={(e) => {
        setnum(e.target.value)
      }} />

      <button onClick={() => 
        dispatch(incrementByAmount(Number(num)))
      } >
        Increment by 10
      </button>
    </div>
  )
}

export default App