import React from 'react'

function NextBtn({ NextCardHandler }) {
  return (
    <button
        type='button'
        className='btn btn-success'
        onClick={NextCardHandler}
    >
        Next
    </button>
  )
}

export default NextBtn