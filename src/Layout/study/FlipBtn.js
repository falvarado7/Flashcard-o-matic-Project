import React from 'react'

function FlipBtn({ setFrontOfCard }) {
  const flipCardHandler = () => {
    setFrontOfCard((currentSide) => !currentSide)
  }

  return (
    <button
        type='button'
        className='btn btn-dark mr-2'
        onClick={flipCardHandler}
    >
        Flip
    </button>
  )
}

export default FlipBtn