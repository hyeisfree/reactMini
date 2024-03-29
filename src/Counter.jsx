import React from 'react'

function Counter() {
  return (
    <>
      <div>
        <h2>Counter</h2>
        <p>0</p>
        <div className="btn_container">
          <button className="inc">INCREASE</button>
          <button className="res">RESET</button>
          <button className="dec">DECREASE</button>
        </div>
      </div>
    </>
  )
}

export default Counter
