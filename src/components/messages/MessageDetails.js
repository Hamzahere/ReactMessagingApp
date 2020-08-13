import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'



const MessageDetails = (props) => {
  const { message,auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (message) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{message.title}</span>
            <p>{message.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {message.authorFirstName} {message.authorLastName}</div>
            <div>{moment(message.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const messages = state.firestore.data.messages;
  const message = messages ? messages[id] : null
  return {
    message: message,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'messages'
  }])
)(MessageDetails)