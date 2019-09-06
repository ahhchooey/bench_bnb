import React from 'react';


export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    this.setState({username: "", password: ""});
  }
  
  render() {
    return (
      <div>
        {(this.props.formType === "signup") ? <h2>Create an Account</h2> : <h2>Login</h2>}
        <form>
          <label >Username:
            <input type="text" value={this.state.username} 
              onChange={this.handleChange("username")}/>
          </label>

          <label >Password:
            <input type="password" value={this.state.password} 
              onChange={this.handleChange("password")} />
          </label>

          <input type="submit" value={(this.props.formType === "signup") ? "Sign Up" : "Login"} 
            onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
