import React from 'react'

const Alert = ({ alert }) => {
  return (
    <div>
        <div className='alert'>
            <h3>{alert}</h3>
        </div>
    </div>
  )
}

export default Alert