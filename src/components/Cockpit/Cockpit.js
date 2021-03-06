import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classes from "./Cockpit.css";
import logo from "../../logo.svg";
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        toggleButtonRef.current.click();
    }, []);

    const btnClasses = [];
    const assignedClasses = [];

    if (props.showPersons) {
        btnClasses.push(classes.Red);
    }

    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red );
    }
    if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <header className={classes.AppHeader}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
                <p className={assignedClasses.join(' ')}>Welcome to React</p>
            </header>
            <button
                ref={toggleButtonRef}
                className={btnClasses.join(' ')}
                onClick={() => props.clicked()}
            >Toggle persons
            </button>
            <button onClick={authContext.login} className={authContext.authenticated ? '' : classes.Red}>
                        {authContext.authenticated ? 'Log out' : 'Log in'}
            </button>
        </div>
    );
}

Cockpit.propTypes = {
    persons: PropTypes.array,
    showPersons: PropTypes.bool
}

export default Cockpit;
