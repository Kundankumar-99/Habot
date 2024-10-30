import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-[80%]  max-w-8xl mx-auto'>
      {children}
    </div>
  )
}
