import React from 'react';

const TextInput = ({updateTextField}) => {
    return <input onChange = {(e)=>updateTextField(e)}/>
}

export default TextInput;