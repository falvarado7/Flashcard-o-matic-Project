import React from 'react'

// COMPONENT TO BE USED IN BOTH AddCardPage AND EditCardPage //
function CardForm({ cardFront, handleFrontChange, cardBack, handleBackChange }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="cardFront">Front</label>
        <textarea
          id="cardFront"
          name="cardFront"
          className="form-control"
          placeholder="Front side of card"
          rows="3"
          onChange={handleFrontChange}
          value={cardFront}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardBack">Back</label>
        <textarea
          id="cardBack"
          name="cardBack"
          className="form-control"
          placeholder="Back side of card"
          rows="3"
          onChange={handleBackChange}
          value={cardBack}
        />
      </div>
    </div>
  );
}

export default CardForm