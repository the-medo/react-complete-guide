import React, {Component} from 'react';

import classes from './Person.css';

class Person extends Component {
    render()
    {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}, age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed}/>
            </div>
        );
    }
}

export default Person;