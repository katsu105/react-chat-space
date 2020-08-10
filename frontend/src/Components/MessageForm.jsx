import React from 'react'
import axios from 'axios'


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }


  onChangetext(e) {
    this.setState({message: e.target.value})
  }

  hundleSubmit = () => {
    this.props.createMessage(this.state.message)
    this.setState({message:''})
  }


  render() {
    return(
      <div className="form">
        <form className="form-contents" onSubmit={this.handleSubmit}>
          <input className="message-form" type="text" value={this.state.message} onChange={ e => this.onChangetext(e)} />
          <input className="message-send" type="submit" value="送信" onClick={this.hundleSubmit}/>
        </form>
      </div>
    )
  }
}

export default MessageForm