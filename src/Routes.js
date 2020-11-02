import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Perfil from './pages/Perfil';
import RecipesPage from './pages/RecipesPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/recipes" component={RecipesPage} />
      </Switch>
    </BrowserRouter>
  );
}
