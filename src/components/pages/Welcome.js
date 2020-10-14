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
            <h1>Vem är du?</h1>
            <p>Obs! Detta är ett icke vetenskapligt test och baseras därför varken på vetenskap eller fakta.</p>

            <Link to="/test/0">
                <button value="Test">Starta Testet</button>
            </Link>
        </div>
    );

}
