import React  from 'react';

/**
 * A radio input set
 * 
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function RadioInput(props) {

    return (
        <div>

            {props.options.map((option, index) => (

                <label className="option" key={index}>
                    <input type="radio" value={index} onChange={props.setValue} checked={parseInt(props.value) === index}/>
                    {option}
                </label>

            ))}

        </div>
    );

}
