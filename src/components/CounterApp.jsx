import React, { useState } from 'react'
import './Counter.css'

export default function CounterApp() {
    const [currentvalue , setvalue] =useState(0);
    function updatevalue(){
        setvalue(currentvalue +1)
    }
    function decrement(){
        setvalue(currentvalue -1)
    }
  return (
    
    <div>
        <h1>CounterApp</h1>
        <div className='counterdiv'>
            <button onClick={decrement}>Decrement</button>
            <p>current value:{currentvalue}</p>
            <button onClick={updatevalue}>Increment</button>
            

        </div>
    </div>
  )
}
