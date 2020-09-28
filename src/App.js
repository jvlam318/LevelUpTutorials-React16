import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className="App-logo" > LUMDB </h1>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
