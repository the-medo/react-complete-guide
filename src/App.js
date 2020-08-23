import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            { id: "Person1", name: "Max", age: 28},
            { id: "Person2", name: "Manuel", age: 29},
            { id: "Person3", name: "Stephanie", age: 26}
        ],
        otherState: "Some other state",
        showPersons: false
    };

    changeNameHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
           return p.id === id
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons})


    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    toggleShowPersonsHandler = ( event ) => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }



    render()
    {
        const style = {
            backgroundColor: 'red',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) =>   {
                                return (
                                    <Person
                                        click={() => this.deletePersonHandler(index)}
                                        index={index}
                                        name={person.name}
                                        age={person.age}
                                        key={person.id}
                                        changed={( event ) => this.changeNameHandler(event, person.id)}
                                    />)
                        })}
                </div>);

            style.backgroundColor = 'green';
        }

        return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
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
