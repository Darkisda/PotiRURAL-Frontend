import React, { useContext } from 'react';
import { Spinner, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainWrapper from './pages/MainWrapper';
import RecipesPage from './pages/RecipesPage';
import Recipe from './pages/Recipe';
import ArticlesPage from './pages/ArticlesPage';
import Article from './pages/Article';
import Market from './pages/Market';
import CreateBarraca from './pages/CreateBarraca';
import CreateArticle from './pages/CreateArticle';
import CreateRecipe from './pages/CreateRecipe';
import BarracaPage from './pages/BarracaPage';
import EventsPage from './pages/EventsPage';
import Event from './pages/Event';
import { Context } from './auth/AuthContext';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticate, loaded } = useContext(Context);

  if (!loaded) {
    return (
      <Row className="custom-row">
        <div className="loading">
          <Spinner animation="border" />
          <h1>Loading...</h1>
        </div>
      </Row>
    );
  }

  if (isPrivate && !authenticate) {
    alert('Você precisa está cadastrado para poder criar algo.');
    return <Redirect to="/signup" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={MainWrapper} />
        <CustomRoute path="/signin" exact component={SignIn} />
        <CustomRoute path="/signup" exact component={SignUp} />
        <CustomRoute path="/recipes" exact component={RecipesPage} />
        <CustomRoute
          isPrivate
          path="/recipes/create"
          exact
          component={CreateRecipe}
        />
        <CustomRoute path="/recipes/:id" exact component={Recipe} />
        <CustomRoute path="/articles" exact component={ArticlesPage} />
        <CustomRoute
          isPrivate
          path="/articles/create"
          exact
          component={CreateArticle}
        />
        <CustomRoute path="/articles/:id" exact component={Article} />
        <CustomRoute path="/market" exact component={Market} />
        <CustomRoute
          isPrivate
          path="/market/create"
          exact
          component={CreateBarraca}
        />
        <CustomRoute path="/market/:id" exact component={BarracaPage} />
        <CustomRoute path="/events/:id" exact component={Event} />
        <CustomRoute path="/events" exact component={EventsPage} />
      </Switch>
    </BrowserRouter>
  );
}
