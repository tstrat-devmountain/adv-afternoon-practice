import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';

import StarWarsContainer from './components/C-P/StarWarsContainer';
import StarWarsHOC from './components/HOC/StarWarsHOC';
import StarWarsRender from './components/Render/StarWarsRender';
import StarWarsFetcher from './components/Render/StarWarsFetcher';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/cp' component={StarWarsContainer} />
          <Route path='/hoc' component={StarWarsHOC} />
          <Route path='/render/:id' render={(props)=> {
            return (
              <StarWarsFetcher 
                url={`https://swapi.co/api/people/${props.match.params.id}`}
                render={(char, planet) =>{
                  return <StarWarsRender character={char} homeworld={planet}/>
                }} 
              />
            )
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;
