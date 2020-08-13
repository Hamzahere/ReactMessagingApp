import React from 'react'
import moment from 'moment'

const MessageSummary = ({message}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
  <span className="card-title ">{message.title}</span>
        <p>Posted by {message.authorFirstName} {message.authorLastName} </p>
        <p className="grey-text">{moment(message.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default MessageSummary