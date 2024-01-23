import React, { useState, useEffect } from 'react'
import { readDeck, updateDeck } from '../../utils/api'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CancelBtn from './CancelBtn';
import EditPageBreadcrumbNav from './EditPageBreadcrumbNav';

function EditPage() {
  const [deckName, setDeckname] = useState("");
  const [deckDesc, setDeckDesc] = useState("");
  const history = useHistory();
  const deckId = useParams().deckId

// LOADS SPECIFIC DECK FROM API //
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromApi = await response;
      setDeckname(deckFromApi.name)
      setDeckDesc(deckFromApi.description)
    }
    loadDeck();
  }, [deckId])


// HANDLING CHANGES TO NAME AND DESCRIPTION IN THE FORM //
  const handleNameChange = (event) => setDeckname(event.target.value)
  const handleDescChange = (event) => setDeckDesc(event.target.value)

/* UPDATES THE PRE-EXISTING DECK WITH THE CHANGES TO THE NAME AND DESCRIPTION.
CLICKING "Submit" WILL TAKE USER TO THE DECKS SCREEN */
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDesc,
    }).then((updatedDeck) => history.push(`/decks/${updatedDeck.id}`))
  }

  return (
    <div>
      <EditPageBreadcrumbNav deckName={deckName} deckId={deckId} />
      <h2>Edit Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='deckName'>Name</label>
          <input 
            id="deckName"
            type='text'
            name='deckName'
            className='form-control'
            onChange={handleNameChange}
            value={deckName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='deckDesc'>Description</label>
          <textarea 
            id='deckDesc'
            name='deckDesc'
            className='form-control'
            rows="5"
            onChange={handleDescChange}
            value={deckDesc}
          />
        </div>
        <CancelBtn deckId={deckId} />
        <button type='submit' className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default EditPage