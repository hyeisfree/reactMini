import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  function addNum() {
    setCount(count + 1)
    document.body.style.backgroundColor = '#FFF0F5'
  }
  function resetNum() {
    setCount(0)
    document.body.style.backgroundColor = '#FFFFFF'
  }
  function minusNum() {
    setCount(count - 1)
    document.body.style.backgroundColor = '#F0FFF0'
  }
  return (
    <>
      <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <div className="btn_container">
          <button onClick={addNum} className="inc">
            INCREASE
          </button>
          <button onClick={resetNum} className="res">
            RESET
          </button>
          <button onClick={minusNum} className="dec">
            DECREASE
          </button>
        </div>
      </div>
    </>
  )
}
