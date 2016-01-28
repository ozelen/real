import React from 'react';
import {Link, HistoryLocation} from 'react-router';

export default
class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Isomorphic Application</h1>
        <div className="menu">
          <Link to='/'>Home</Link> |
          <Link to='/about'>About</Link>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}