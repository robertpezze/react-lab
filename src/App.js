import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Test from './components/pages/Test';
import Result from './components/pages/Result';
import AppContext from './components/contexts/AppContext';

export default function App() {

    const questions = [
        {
            text:   'What is your name?',
            answer: 'Hej',
        },
        {
            text:    'What is your favorite color?',
            answer:  '',
            options: [
                'Blue',
                'Red',
                'Green',
                'Yellow'
            ]
        },
        {
            text:    'What animal is the most good looking?',
            answer:  '',
            options: [
                'Elephant',
                'Monkey',
                'Ostrich'
            ]
        },
        {
            text:    'What tv-show is best?',
            answer:  '',
            options: [
                'Heroes',
                'Friends',
                'Bron'
            ]
        },
    ];

    const [answers, setAnswers] = useState(Array(questions.length));

    return (
        <Router>
            <AppContext.Provider value={{questions, answers, setAnswers}}>

                <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/test/:question" exact component={Test}/>
                    <Route path="/result" exact component={Result}/>
                </Switch>

            </AppContext.Provider>
        </Router>
    );

}
