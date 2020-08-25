import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    index={index}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                    isAuth={this.props.isAuthenticated}
                />);
        });
    }
}

Persons.propTypes = {
    persons: PropTypes.array,
    clicked: PropTypes.func,
    changed: PropTypes.func
}

export default Persons;