import React from 'react';


export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)

  }
  
  render() {
    console.log(this.props)

    return (
      <div>
        {(this.props.formType === "signup") ? <h2>signup</h2> : <h2>login</h2>}
        <form>
          <label >USERNAME
            <input type="text" value={this.state.username} onChange={this.handleChange("username")}/>
          </label>

          <label >PASSWORD
            <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
          </label>

          <input type="submit" value={(this.props.formType === "signup") ? "signup" : "login"} onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}