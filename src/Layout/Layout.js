import React from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import Home from "./home/Home";
import StudyPage from "./study/StudyPage";
import CreatePage from "./create/CreatePage";
import DeckPage from "./deck/DeckPage";
import EditPage from "./edit/EditPage";
import AddCardPage from "./addCard/AddCardPage";
import EditCardPage from "./editCard/EditCardPage";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreatePage />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCardPage />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCardPage />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditPage />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>

          <Route path="/decks/:deckId">
            <DeckPage />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
        
      </div>
    </>
  );
}

export default Layout;
