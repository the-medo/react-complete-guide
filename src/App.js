import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
            { name: "Max", age: 28},
            { name: "Manuel", age: 29},
            { name: "Stephanie", age: 26}
        ]
    });

    const [ otherState, setOtherState ] = useState({otherState: "Some other state"});

    const switchNameHandler = ( newName ) => {
        setPersonsState({
            persons: [
                { name: newName, age: 28},
                { name: "Manuel", age: 29},
                { name: "Stephanie", age: 26}
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                { name: "Max", age: 28},
                { name: event.target.value, age: 29},
                { name: "Stephanie", age: 26}
            ]
        });
    }

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button
                    style={style}
                    onClick={() => switchNameHandler('Test!')}
                >Switch name</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age} changed={nameChangedHandler}> Test</Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
            </div>
        );

}

export default app;
