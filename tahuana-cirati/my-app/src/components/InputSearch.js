//import React, { Component } from 'react';
import React from 'react';

// class InputSearch extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <input className="Input" type='text' name='name' placeholder='Search your Pokemon...' onChange={(event) => this.props.updateSearch(event)}/>
//             </div>
//         )
//     }
// }

const InputSearch = ( {updateSearch} ) => (
    
        <input className="Input" type='text' name='name' placeholder='Search your Pokemon...' onChange={(event) => updateSearch(event)}/>
    
)

export default InputSearch;

