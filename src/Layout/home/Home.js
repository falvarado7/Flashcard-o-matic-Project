import React, { useState, useEffect } from 'react'
import { listDecks } from '../../utils/api'
import CreateDeckBtn from './CreateDeckBtn'
import StudyBtn from './StudyBtn'
import ViewBtn from './ViewBtn'
import DeleteDeckBtn from './DeleteDeckBtn'
import "../stylesheets/Home.css"

function Home() {
    const [decks, setDecks] = useState([]);

    // LOADS ALL DECKS FROM API //
    useEffect(() => {
        async function loadDecks() {
            const response = listDecks()
            const decksFromApi = await response;
            setDecks(decksFromApi)
        }
        loadDecks();
    }, []);

  return (
    <div className='home-page'>
        <CreateDeckBtn />

        {/* CREATING A CARD FOR EACH DECK */}
        {decks.map((deck, index) => {
            return (
              <div className='deck-card card mt-2' key={index}>
                <div className='card-body'>
                    <div className='d-flex justify-content-between'>
                        <h5 className='card-title font-weight-bold'>{deck.name}</h5>
                        <h6 className='card-subtitle text-muted'>{deck.cards.length} cards</h6>        
                    </div>
                    <p className='card-text'>{deck.description}</p>
                    <div className='d-flex'>
                        <div className='mr-auto'>
                            <StudyBtn deck={deck}/>
                            <ViewBtn deck={deck}/>
                        </div>
                        <div>
                            <DeleteDeckBtn deck={deck} />
                        </div>
                    </div>
                </div>
              </div>
            )
        })} 
    </div>
  )
}

export default Home