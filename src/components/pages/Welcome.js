import React from 'react';
import {Link } from 'react-router-dom';
import logo from './../../thinking-man.jpg';
/**
 * Main welcome page
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Welcome() {

    return (
        <div className="welcome">
            <img src={logo} alt="Thinking..."/>
            <h1>Who are you?</h1>
            <p>Obs! This test is not in any way based on science. It will give you dummy-results.</p>

            <Link to="/test/0">
                <button value="Test">Start The Test</button>
            </Link>
        </div>
    );

}
