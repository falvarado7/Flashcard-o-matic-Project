# Flashcard-o-matic-Project
Flashcard-o-matic is an application intended for both teachers to use to create decks of flashcards for the subjects they 
teach, as well as for students to use to study the decks their teachers have created.

## Technology
### Built with:
- JavaScript, React, HTML, CSS, Bootstrap, Open Iconic, and Google Fonts.

## Installation
1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm run start` to concurrently start the project's frontend and backend.

4. ## Screenshots
### Home Page:
![home](/screenshots/flashcard-home.png)
The home screen has the following features:
- A `Create Deck` button that will take the user to the `/decks/new` page when clicked on.
- Existing decks are shown with the deck name, the number of cards in that deck, and a `View`, `Study`, and `Delete` button.
- Clicking the `View` button will take the user to the Deck screen, `/decks/:deckId`, where more information about that particular deck is stored.
- Clicking the `Study` button will take the user to the Study screen, `decks/:deckId/study`, where the user can begin to study the cards in that deck.
- Clicking the `Delete` button will prompt a warning message to appear, and give the user the option to delete the deck or cancel this action.

