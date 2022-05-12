import React from 'react'

const IsEmpty = ({text}) => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '75vh'
      }}>
        <span style={{
          fontSize: '75px',
          fontFamily: 'RobotoCondensed, sans-serif',
          fontWeight: 'bold',
          transform: 'rotate(90deg)'
        }}>
            :
            <span style={{color: 'var(--orange)'}}>(</span>
        </span>
        <h2>
          {text}
        </h2>  
      </div>
  )
}

export default IsEmpty