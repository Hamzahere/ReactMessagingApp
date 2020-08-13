import React from 'react'
import MessageSummary from './MessageSummary'
import { Link } from 'react-router-dom'

const MessageList = ({messages}) => {
  return (
    <div className="Message-list section">
      { messages && messages.map(message => {
        return (
          <Link to={'/message/' + message.id} key={message.id}>
            <MessageSummary message={message} />
          </Link>
        )
      })}  
    </div>
  )
}

export default MessageList