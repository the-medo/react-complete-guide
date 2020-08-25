import React, { useEffect } from 'react';
import classes from "./Cockpit.css";
import logo from "../../logo.svg";

const Cockpit = (props) => {

    useEffect(() => {
        console.log("[Cockpit.js] useEffect");
        //setTimeout(() => {alert('text');}, 1000);
    });

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
                className={btnClasses.join(' ')}
                onClick={() => props.clicked()}
            >Toggle persons
            </button>
        </div>
    );
}

export default Cockpit;
