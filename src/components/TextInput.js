import React from 'react';

/**
 * A texinput
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function TextInput(props) {

    return (
        <input type="text" value={props.value ?? ''} placeholder="Write your answer."
               onChange={props.setValue}/>
    );

}
