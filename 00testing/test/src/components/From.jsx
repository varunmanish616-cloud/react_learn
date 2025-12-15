import React from 'react'

export default function From({
    sendData
}) {
  return (
    <div>
       <button onClick={() => sendData("Hello Parent 👋")}>
        Click Me to Send Data
      </button>
    </div>
  )
}
