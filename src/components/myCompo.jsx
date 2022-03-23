import React, {useState} from 'react'

function MyCompo({initial}) {
    const initialValue = 10;
    const [counter, setCounter] = useState(initialValue);

    const Increment = () =>{
      setCounter(counter + 1)
    }
    const Decrement = () =>{
      setCounter(counter - 1)
    }
    const Reset = () =>{
      setCounter(initialValue)
      
    }
  return (
    <div>
      <p>Counter Value = {counter}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default MyCompo;