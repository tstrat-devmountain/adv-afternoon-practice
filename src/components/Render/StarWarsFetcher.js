import React, { Component } from 'react';
import axios from 'axios';
export default class StarWarsFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: null,
            homeworld: null
        }
    }

    fetchData() {
        axios.get(this.props.url).then(res => {
            const char = res.data;
            axios.get(char.homeworld).then(planet => {
                
                this.setState({
                    character: char,
                    homeworld: planet.data
                });
                
            })
        })
    }

    render() {
		return <div>
			{ 
				this.state.character ? 
					this.props.render(this.state.character, this.state.homeworld)
				: this.fetchData()
			}
		</div>;
	}
}