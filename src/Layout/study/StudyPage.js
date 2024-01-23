import React, { useEffect, useState } from 'react'
import { readDeck } from '../../utils/api'
import { useParams } from 'react-router-dom'
import StudyCard from './StudyCard'
import StudyPageBreadcrumbNav from './StudyPageBreadcrumbNav'

function StudyPage() {
  const [deck, setDeck] = useState({})
  const [cards, setCards] = useState([])
  const [currentCard, setCurrentCard] = useState({})
  const deckId = useParams().deckId;

  useEffect(() => {
    async function loadDeck() {
        const response = await readDeck(deckId)
        const deckFromApi = await response
        setDeck(deckFromApi)
        setCards(deckFromApi.cards)
        setCurrentCard(deckFromApi.cards[0])
    }
    loadDeck()
  }, [deckId])

  return (
    <div>
        <StudyPageBreadcrumbNav deckId={deckId} deck={deck}/>
        <h2 className='mb-4'>Study: {deck.name}</h2>
        <StudyCard cards={cards} currentcard={currentCard} setCurrentcard={setCurrentCard} deckId={deckId}/>
    </div>
  )
}

export default StudyPage