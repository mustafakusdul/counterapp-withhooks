import React, { useState } from 'react'

const App = () => {

    // initialize the state with hooks
    const [count, setCount] = useState(0)
    // external functions
    const decrease = () => { setCount(count - 1) }
    const reset = () => { setCount(0) }

    return (
        <div>
            <p>Counter: {count}</p>
            {/* inline function */}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            {/* external functions */}
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default App
