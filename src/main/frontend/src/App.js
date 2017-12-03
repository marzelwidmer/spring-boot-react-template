import React, { Component } from 'react';

import 'whatwg-fetch';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    handleChange = (event) => {
        this.setState({request: event.target.value})
    };
    handleSubmit = (event) => {
        event.preventDefault();
        var request = this.state.request.trim();
        if (!request){
            return;
        }

        fetch (`/api/demo?hello`)
            .then(response => {
                return response.text();
            })
            .then(body => {
                alert(body);
            })
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Do you hear an echo ?</h1>
                </header>

                <div>
                    <from className="App-intro" onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange}/>
                        <input type="submit" value="Echo"/>
                    </from>
                </div>

            </div>

        );
    }
}

export default App;
