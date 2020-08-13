import React, { Component } from 'react'
import MessageList from '../messages/MessageList'
import Notifications from './Notifications'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {

     //console.log(this.props);
    const { messages,auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MessageList messages={messages}  />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      messages: state.firestore.ordered.messages,
      auth: state.firebase.auth
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'messages' }
    ])
  )(Dashboard)
