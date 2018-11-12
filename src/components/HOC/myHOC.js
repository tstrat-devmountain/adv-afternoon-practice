import React from 'react';
import axios from 'axios';

function myHOC(Component, url) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                character: null,
                homeworld: null,
                id: 1
            }
            this.fetchData = this.fetchData.bind(this);
        }

        fetchData() {
            axios.get(`${url}/${this.state.id}`).then(res => {
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
            return (
                <>
                { this.state.character ?
                    <Component {...this.props } character={this.state.character} homeworld={this.state.homeworld} />
                    : this.fetchData()
                }
                <input type='number' value={this.state.id} onChange={e => this.setState({id: e.target.value})} />
                <button onClick={this.fetchData}/>
                </>
            );
        }
    }
}

export default myHOC;