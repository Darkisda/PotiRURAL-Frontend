import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import RecipesPage from './pages/RecipesPage';
import Recipe from './pages/Recipe';
import CreateRecipe from './pages/CreateRecipe';
import ArticlesPage from './pages/ArticlesPage';
import Article from './pages/Article';
import CreateArticle from './pages/CreateArticle';
import Market from './pages/Market';
import CreateBarraca from './pages/CreateBarraca';
import BarracaPage from './pages/BarracaPage';

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
        <Route path="/articles" exact component={ArticlesPage} />
        <Route path="/articles/create" exact component={CreateArticle} />
        <Route path="/articles/:id" exact component={Article} />
        <Route path="/market" exact component={Market} />
        <Route path="/market/create" exact component={CreateBarraca} />
        <Route path="/market/:id" exact component={BarracaPage} />
      </Switch>
    </BrowserRouter>
  );
}
