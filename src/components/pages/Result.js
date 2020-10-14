import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../contexts/AppContext';
import Chart from '../Chart';

/**
 * The resultpage that is shown after the test
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Result(props) {

    const {questions, answers} = React.useContext(AppContext);

    questions.map((question, index) => {

        //If no answers, go back to start
        if (answers[index] === undefined) {
            props.history.push('/');
        }

    });

    return (
        <div>

            <Chart data={getFakeData()}/>

            <h2>Result</h2>
            <div className="question-summary">

                {questions.map((question, index) => (

                    <div key={index}>
                        <b>{question.text.replace('?', '')}: </b>
                        {questions[index].options? questions[index].options[answers[index]]: answers[index]}
                    </div>

                ))}
            </div>

            <Link to="/">
                <button>Give it another shot!</button>
            </Link>

        </div>
    );

    /**
     * Get fake data for chart
     *
     * @returns {(string[]|(string|number)[])[]}
     */
    function getFakeData() {

        return [
            ['Type', 'Score'],
            ['Kindness', 80],
            ['Speed', 76],
            ['Happiness', 99],
            ['Hunger', 67]
        ];

    }
}
