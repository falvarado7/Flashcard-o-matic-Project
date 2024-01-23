import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch } from "react-router-dom"
import { readDeck } from '../../utils/api'
import DeckPageBreadcrumbNav from './DeckPageBreadcrumbNav'
import DeckInfo from './DeckInfo'

function DeckPage() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  const deckId = useParams().deckId;
  const { url } = useRouteMatch();

// LOADING THE SPECIFIC DECK FROM API //
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId)
      const deckFromApi = await response;
      setDeck(deckFromApi)
      setCards(deckFromApi.cards);
    }
    loadDeck();
  }, [deckId])

// IF DECK HAS BEEN FETCHED FROM API THE BREADCRUMB NAV AND DECK WILL DISPLAY //
  if (deck.name) {
    return (
      <div>
        <DeckPageBreadcrumbNav deckName={deck.name} />
        <Route path={url}>
          <DeckInfo 
            deckName={deck.name}
            deckDesc={deck.desc}
            deckId={deckId}
            cards={cards}
            url={url}
          />
        </Route>
      </div>
    )
  }
  return "Loading..."
  
}

export default DeckPage