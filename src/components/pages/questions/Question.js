import React  from 'react';
import AppContext from '../../contexts/AppContext';
import TextInput from '../../TextInput';
import RadioInput from '../../RadioInput';

/**
 * Atemplate for one question that must be provided as prop
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Question(props) {

    const {questions, answers, setAnswers} = React.useContext(AppContext);
    const {questionIndex}                  = props;
    let question                           = questions[questionIndex];

    return (

        <div>

            <h2>{question.text}</h2>
            {!question.options &&
            <TextInput options={question.options} value={answers[questionIndex]} setValue={submitAnswer}/>}
            {question.options &&
            <RadioInput options={question.options} value={answers[questionIndex]} setValue={submitAnswer}/>}


        </div>

    );

    /**
     * Store the answer for the question
     *
     * @param e
     */
    function submitAnswer(e) {

        let updatedAnswers            = [...answers];
        updatedAnswers[questionIndex] = e.target.value;

        setAnswers(updatedAnswers);

    }

}
