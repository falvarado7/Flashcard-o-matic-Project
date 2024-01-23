import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { createDeck } from '../../utils/api'
import CreatePageBreadcrumbNav from './CreatePageBreadcrumbNav'
import CancelBtn from './CancelBtn'

function CreatePage() {
  const history = useHistory();
  const [deckName, setDeckName] = useState("");
  const [deckDesc, setDeckDesc] = useState("");

// HANDLING CHANGES TO DECK NAME AND DESCRIPTION IN THE FORM //
  const handleNameChange = (event) => setDeckName(event.target.value);
  const handleDescChange = (event) => setDeckDesc(event.target.value);

// ADDING NEW CARD TO DATA. SAVED DECK WILL HAVE AN "id" PROPERTY //
// CLICKING "Submit" WILL TAKE USER TO DECK SCREEN //
  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck({
      name: deckName,
      description: deckDesc,
    }).then((newDeck) => history.push(`/decks/${newDeck.id}`));
  };

  return (
    <div>
      <CreatePageBreadcrumbNav />
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='deckName'>Name</label>
          <input
            id="deckName"
            type='text'
            name='deckName'
            className='form-control'
            placeholder='Deck Name'
            onChange={handleNameChange}
            value={deckName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='deckDesc'>Description</label>
          <textarea
            id="deckDesc"
            name='deckDesc'
            className='form-control'
            placeholder='Brief description of the deck'
            rows="5"
            onChange={handleDescChange}
            value={deckDesc}
          />
        </div>
        <CancelBtn />
        <button
          type='submit'
          className='btn btn-success'
        >
          Submit
        </button>
      </form>
      
    </div>
  )
}

export default CreatePage