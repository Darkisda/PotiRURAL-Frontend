import React, { useContext } from 'react';
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
import { Context } from './auth/AuthContext';

function PrivateRoute({ isPrivate, ...rest }) {
  const { authenticate } = useContext(Context);

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
        <Route path="/" exact component={MainWrapper} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/recipes" exact component={RecipesPage} />
        <PrivateRoute
          isPrivate
          path="/recipes/create"
          exact
          component={CreateRecipe}
        />
        <Route path="/recipes/:id" exact component={Recipe} />
        <Route path="/articles" exact component={ArticlesPage} />
        <PrivateRoute
          isPrivate
          path="/articles/create"
          exact
          component={CreateArticle}
        />
        <Route path="/articles/:id" exact component={Article} />
        <Route path="/market" exact component={Market} />
        <PrivateRoute
          isPrivate
          path="/market/create"
          exact
          component={CreateBarraca}
        />
        <Route path="/market/:id" exact component={BarracaPage} />
      </Switch>
    </BrowserRouter>
  );
}
