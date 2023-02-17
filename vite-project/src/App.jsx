import { useState, useRef } from 'react'
import './App.css'

function App() {

  const inputRef = useRef()

  function runSearch(e) {
    const inputNumber = inputRef.current.value

    let n = inputNumber;

    nextPrime:
    for (let i = 2; i <= n; i++) {

      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }

      alert(i);
    }
  }

  return (
    <>
      <div className='App'>
        <input ref={inputRef} className='input' type={'number'} />
        <button className='button' onClick={runSearch}> Give it a go! </button>
        <div>  </div>
      </div>
    </>
  )
}

export default App
