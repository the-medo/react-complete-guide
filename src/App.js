import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
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

        let persons = null;
        const btnClasses = [];

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

            btnClasses.push(classes.Red);
        }

        return (
                <div className={classes.App}>
                    <header className={classes.AppHeader}>
                        <img src={logo} className={classes.AppLogo} alt="logo"/>
                        <h1 className={classes.AppTitle}>Welcome to React</h1>
                    </header>
                    <button
                        className={btnClasses.join(' ')}
                        onClick={() => this.toggleShowPersonsHandler()}
                    >Toggle persons
                    </button>
                    {persons}
                </div>
        );
    }

}

export default App;
