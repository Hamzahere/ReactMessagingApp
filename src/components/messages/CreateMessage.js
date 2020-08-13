import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMessage } from '../../store/actions/messageActions'
import { Redirect } from 'react-router-dom'

class CreateMessage extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createMessage(this.state);
    this.props.history.push('/')

  }
  render() {
    const { auth } = this.props;
     if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Message!</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Message Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Message Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Send</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (message) => dispatch(createMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMessage)

