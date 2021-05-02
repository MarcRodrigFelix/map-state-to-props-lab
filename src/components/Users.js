import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here


class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( (user, index) => <li key={index}>  Name: { user.username } || Hometown: { user.hometown } </li> )}
        </ul>
        {this.props.users.length} User(s)
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
