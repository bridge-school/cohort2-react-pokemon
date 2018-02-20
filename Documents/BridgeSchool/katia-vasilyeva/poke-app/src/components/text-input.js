import React from 'react';

const TextInput = ({updateTextField, label}) => {
    return <div>
        <label htmlFor="text-input">{label}</label>
        <input className="text-input" onChange = {(e)=>updateTextField(e)}/>
        </div>
}

export default TextInput;