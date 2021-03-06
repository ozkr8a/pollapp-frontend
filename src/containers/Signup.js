import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { config } from '../Constants'

class Signup extends React.Component {

  state ={
    username: "",
    email: "",
    password: "",
    errors: []
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (this.signupSubmit(this.state)) {
  //     this.props.history.push('profile')
  //     window.alert("You have Signed Up!")
  //   } else {
  //     window.alert("There was an issue creating your account")
  //   }
  // }

  signupSubmit = e => {
    e.preventDefault()
    const url = config.url.API_URL

    fetch(`${url}users`, {
    // fetch("http://localhost:3000/users", {
    // fetch("https://dis-or-dat-poll-app.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password, 
        email: this.state.email
      })
    }).then(res => res.json())
      .then(data => {
        if (data.errors) {
          this.setState({
            errors: data.errors
          })
        } else {
          this.props.history.push("/main")
          this.props.loginUser(data.token, data.user_id)
        }
      })
  }



render(){
  return(
  <div className="maincontainer signupformdiv">
  <h1> Signup Form </h1>
  <Form onSubmit={this.signupSubmit}>
    <Form.Field>
      <label>Username</label>
      <input name='username' placeholder='Username' onChange={this.onChange}
            value={ this.state.username}/>
    </Form.Field>
    <Form.Field>
      <label>E-mail</label>
      <input name='email' placeholder='E-mail' onChange={this.onChange}
            value={ this.state.email}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input name='password' placeholder='Password' type='password' onChange={this.onChange}
            value={ this.state.password}/>
    </Form.Field>
    <Button type='submit' positive>Submit</Button>
  </Form>
    {
      this.state.errors
      ?
      this.state.errors.map(error => {
        return <div class="ui negative message">
          <i class="close icon"></i>
          <div class="header">
            Oops! Something went wrong...
          </div>
          <span>{ error }</span>
        </div>
      })
      :
      null
    }
  </div>
  )
}
}
export default withRouter(Signup)



  
    
  