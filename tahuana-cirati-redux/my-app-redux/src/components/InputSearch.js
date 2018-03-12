import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateInputSearchAction from '../actions/input-search-actions';


class InputSearch extends Component {
    onUpdateSearch(event) {
        this.props.onUpdateSearch(event.target.value)
    }

    render() {
        return (
            <input className="Input" type='text' name='name' placeholder='Search your Pokemon by name or ID...' onChange={(event) => this.onUpdateSearch(event)} />
        )
    }
}

const mapStateToProps = state => ({ })

const mapDispatchToProps = {
    onUpdateSearch: updateInputSearchAction
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(InputSearch);

