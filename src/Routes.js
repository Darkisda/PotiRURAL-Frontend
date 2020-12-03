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
import { Context } from './auth/AuthContext';

function PrivateRoute({ isPrivate, ...rest }) {
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
        <PrivateRoute path="/" exact component={MainWrapper} />
        <PrivateRoute path="/signin" exact component={SignIn} />
        <PrivateRoute path="/signup" exact component={SignUp} />
        <PrivateRoute path="/recipes" exact component={RecipesPage} />
        <PrivateRoute
          isPrivate
          path="/recipes/create"
          exact
          component={CreateRecipe}
        />
        <PrivateRoute path="/recipes/:id" exact component={Recipe} />
        <PrivateRoute path="/articles" exact component={ArticlesPage} />
        <PrivateRoute
          isPrivate
          path="/articles/create"
          exact
          component={CreateArticle}
        />
        <PrivateRoute path="/articles/:id" exact component={Article} />
        <PrivateRoute path="/market" exact component={Market} />
        <PrivateRoute
          isPrivate
          path="/market/create"
          exact
          component={CreateBarraca}
        />
        <PrivateRoute path="/market/:id" exact component={BarracaPage} />
        <PrivateRoute path="/events" exact component={EventsPage} />
      </Switch>
    </BrowserRouter>
  );
}
