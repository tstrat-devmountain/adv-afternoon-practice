import React, { Component } from 'react';
import axios from 'axios';
import StarWarsDisplay from './StarWarsDisplay';

export default class StarWarsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            character: null,
            planet: null
        }
    }

    componentDidMount() {
        let id = 5;
        axios.get(`https://swapi.co/api/people/${id}`).then(res => {
            const char = res.data;
            axios.get(char.homeworld).then(planet => {
                this.setState({ character: char, planet: planet.data });
            })
        })
    }
    render() {
        const { character, planet } = this.state;
        if (character && planet) 
        return (
            <StarWarsDisplay character={this.state.character} homeworld={this.state.planet} />
        );
        else {
            return <></>
        }
    }
}