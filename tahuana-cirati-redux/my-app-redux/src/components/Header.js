import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (<div className="App-header">{this.props.header}</div>)
    }
}

const mapStateToProps = state => ({
    header: state.header
})
      
export default connect(mapStateToProps)(Header);
  