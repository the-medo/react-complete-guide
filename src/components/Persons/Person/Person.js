import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.testInput.focus();
        this.inputElementRef.current.focus();
    }

    render()
    {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}, age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    //ref={(thisInput) => {this.testInput = thisInput}}
                    ref={this.inputElementRef}
                />
            </div>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;