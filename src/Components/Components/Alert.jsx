import React from 'react'

export const Alert = ({ error }) => {
  return (
    <div className='text-red-400 text-center mt-8 border-2 border-red-400 p-2'>
      <h4 className='underline font-bold'>Error</h4>
      <p>{error}</p>
    </div>
  )
}
