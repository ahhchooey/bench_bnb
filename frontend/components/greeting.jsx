import React from 'react';
import {Link} from 'react-router-dom';

export default class Greeting extends React.Component {

  content() {
    console.log(this.props)
    const {currentUser} = this.props
    if (currentUser) {
      return (
        
        <div>
          <h2>
            WELCOME {currentUser}
          </h2>
          <Link>
            <button>
              LOGOUT
          </button>
          </Link>
    
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/signup'}>
            <button>
              SIGNUP
            </button>
          </Link>

         <Link to={"/login"}>
           <button>
              LOGIN
           </button>
         </Link>
        </div>
      )
    }
  }

  render () {
    return (
      this.content()
   )
  }
}