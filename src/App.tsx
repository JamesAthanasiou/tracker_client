import { useState } from 'react'
import './App.css'
import AButton from './AButton'
import SquareContainer from './SquareContainer'
import Square from './Square'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <AButton count={count} onClick={handleClick} />
        <Square/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className='container'>
        <SquareContainer></SquareContainer>
      </div>

    </>
  )
}

export default App
