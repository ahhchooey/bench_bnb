import React from 'react';
import {Link} from 'react-router-dom';


export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render () {
    const {currentUser} = this.props
    if (currentUser) {
      return (
        <div>
          <h2>Welcome {currentUser.username}</h2>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/signup'}>
            <button>Sign Up</button>
          </Link>

          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        </div>
      )
    }
  }
}
