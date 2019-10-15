import React from 'react'

class Main extends React.Component{

  state = {
    allPolls: [],
    myPolls: []
  }

  componentDidMount(){
    
    const token  = localStorage.token

    fetch("http://localhost:3000/polls", {
      headers: {
        "Authorization": token
      }
    }).then(res => res.json())
    .then(data => this.setState({
      allPolls: data
    }))

    const loggedInUserId = localStorage.userId

    if (loggedInUserId){
      fetch(`http://localhost:3000/users/${loggedInUserId}`, {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(user => this.setState({
        myPolls: user.polls
      }))
    }
  }

  render(){
    return(<>
    <h1> this is the Main page</h1>
    <section>
      <h2> My Polls </h2>
      {console.log(this.props)}
      {console.log(this.state)}
      <ol>
        {this.state.myPolls.map(poll => <li key={poll.id}>{ poll.poll_name }</li>)}
      </ol>
    </section> 
    <section>
      <h2> All Polls </h2>
      <ul>
        {this.state.allPolls.map(poll => <li key={poll.id}>{ poll.poll_name }</li>)}
      </ul>
    </section> 
    </>)
  }

}

export default Main;