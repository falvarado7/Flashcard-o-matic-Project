import React from 'react'
import { useHistory } from 'react-router-dom'

function CreateDeckBtn() {
  const history = useHistory();

  // EITHER METHOD WORKS FOR onCLICK //
  // function handleClick() {
  //   history.push("/decks/new")
  // }

  return (
    <div className='create-deck-btn'>
      <button 
        type="button"
        className='btn btn-success mb-3 btn-lg'
        onClick={() => history.push("/decks/new")}
      >
        <span className='oi oi-plus' /> Create Deck
      </button>
    </div>
  )
}

export default CreateDeckBtn