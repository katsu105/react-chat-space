import React from 'react'
import axios from 'axios'
import update from 'react-addons-update'
import Messages from './Messages'
import Header from './Header'
import MessageForm from './MessageForm'

import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";


class ChatContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: '',
      messages: []
    }
  }

  componentDidMount() {
    var group_id = 1
    axios.get(`http://localhost:3001/api/groups/${group_id}/messages`, {group_id: group_id})
      .then((results) => {
        // console.log(results)
        this.setState({messages: results.data})
      })
      .catch((data) =>{
        // console.log(data)
      })
    }

    createMessage = (message) => {
      var group_id = 1
      axios.post(`http://localhost:3001/api/groups/${group_id}/messages`,{message: message} )
      .then((response) => {
        const newData = update(this.state.messages, {$push:[response.data]})
        this.setState({messages: newData})
      })
      .catch((data) =>{
        console.log(data)
      })
    }


    render() {
      return (
        <div className='chat-container'>
          {/* <Header /> */}
          <Messages messagesData={this.state.messages} />
          <MessageForm createMessage={this.createMessage}/>
        </div>
      );
    }
}

export default ChatContainer