import React from 'react'

const DarkCover = () => {
  return (
    <div
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1'
        }}
    >
    </div>
  )
}

export default DarkCover