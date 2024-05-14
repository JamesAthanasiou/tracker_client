import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AButton from './Button'
import SquareContainer from './SquareContainer'
import Square from './Square'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        {/* <div className='row'>
          <Square/>
          <Square/>
          <Square/>
        </div> */}
        <SquareContainer></SquareContainer>
      </div>

    </>
  )
}

export default App
