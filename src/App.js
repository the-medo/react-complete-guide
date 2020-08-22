import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28},
            { name: "Manuel", age: 29},
            { name: "Stephanie", age: 26}
        ],
        otherState: "Some other state",
        showPersons: false
    };

    switchNameHandler = ( newName ) => {
        this.setState({
            persons: [
                { name: newName, age: 28},
                { name: "Manuel", age: 29},
                { name: "Stephanie", age: 26}
            ]
        });
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: "Max", age: 28},
                { name: event.target.value, age: 29},
                { name: "Stephanie", age: 26}
            ]
        });
    };

    toggleShowPersonsHandler = ( event ) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }



    render()
    {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                            changed={this.nameChangedHandler}> Test</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div>);
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Test!')}
                >Switch name
                </button>
                <button
                    style={style}
                    onClick={() => this.toggleShowPersonsHandler()}
                >Toggle persons
                </button>
                {persons}
            </div>
        );
    }

}

export default App;
