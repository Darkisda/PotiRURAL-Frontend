import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import RecipesPage from './pages/RecipesPage';
import Recipe from './pages/Recipe';
import CreateRecipe from './pages/CreateRecipe';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/main" component={Main} />
        <Route path="/recipes" exact component={RecipesPage} />
        <Route path="/recipes/create" exact component={CreateRecipe} />
        <Route path="/recipes/:id" exact component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}
