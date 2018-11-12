import React, { Component } from 'react';
import myHOC from './myHOC';
class StarWarsHOC extends Component {
    render() {
        const { character, homeworld } = this.props;
        console.log(this.props);
        return (
            <div>
                <h1>{character.name}</h1>
                <h2>Height: {character.height}</h2>
                <h2>Mass: {character.mass}</h2>
                <h2>Hair Color: {character.hair_color}</h2>
                <h2>Skin Color: {character.skin_color}</h2>
                <h2>HomeWorld: {homeworld.name}</h2>
            </div>
        );
    }
}

export default myHOC(StarWarsHOC, 'https://swapi.co/api/people');