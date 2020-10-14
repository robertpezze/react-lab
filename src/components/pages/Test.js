import React from 'react';
import AppContext from '../contexts/AppContext';
import Question from './questions/Question';
import { Link } from 'react-router-dom';

/**
 * The page that shows the questions and handle the flow
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Test(props) {

    let currentQuestionIndex = parseInt(props.match.params.question);

    const {questions, answers} = React.useContext(AppContext);

    let currentAnswer = answers[currentQuestionIndex];
    let isNext        = questions.length > currentQuestionIndex + 1;
    let isBack        = currentQuestionIndex - 1 >= 0;

    return (
        <div className="question">
            <h2>Question {currentQuestionIndex+1} out of {questions.length}</h2>
            <Question questionIndex={currentQuestionIndex}/>

            {isBack && <Link to={'/test/' + (currentQuestionIndex - 1)}><button>Back</button></Link>}
            {isNext && currentAnswer && <Link className="next" to={'/test/' + (currentQuestionIndex + 1)}><button>Next</button></Link>}
            {!isNext && currentAnswer && <Link className="back" to={'/result'}><button>Complete</button></Link>}
        </div>
    );

}
