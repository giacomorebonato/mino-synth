import React from 'react'

export default function PlayButton({ children, onMouseDown, onMouseUp }) {
  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
    >
      {children}
    </button>
  )
}
