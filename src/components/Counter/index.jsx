import React, { useState } from 'react'

const Counter=()=> {
    const [count, setCount] = useState(0)

    const increment = () => setCount(c => c + 1)
    const decrement = () => setCount(c => c - 1)

    return (
        <div style={{ textAlign: 'center' ,backgroundColor: '#ffffff', height: '200px',width: '400px',borderRadius:'20px'}}>
            <h1 style={{ color: '#000000' }}>Counter</h1>
            <p style={{ color: '#000000' }}>Current Count: {count}</p>
            <button onClick={increment} style={{ backgroundColor: '#000000', color: '#ffffff' }}>Increment</button>
            <button onClick={decrement} style={{ marginLeft: '10px', backgroundColor: '#000000', color: '#ffffff' }}>Decrement</button>
        </div>
    )
}

export default Counter