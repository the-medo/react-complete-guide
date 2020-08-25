import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";
import AuthContext from "../context/auth-context"

class App extends Component {
    state = {
        persons: [
            { id: "Person1", name: "Max", age: 28},
            { id: "Person2", name: "Manuel", age: 29},
            { id: "Person3", name: "Stephanie", age: 26}
        ],
        otherState: "Some other state",
        showPersons: false,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        });


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

    loginHandler = () => {
        this.setState({authenticated: !this.state.authenticated});
    }

    render()
    {

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.changeNameHandler}
                        isAuthenticated={this.state.authenticated}
                    />
                </div>
            );
        }

        return (
                <WithClass classes={classes.App}>
                    <AuthContext.Provider value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}>
                        <Cockpit
                            persons={this.state.persons}
                            showPersons={this.state.showPersons}
                            clicked={this.toggleShowPersonsHandler}
                            login={this.loginHandler}
                        />
                        {persons}
                    </AuthContext.Provider>
                </WithClass>
        );
    }

}

export default App;
