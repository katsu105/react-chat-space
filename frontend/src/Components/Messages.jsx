import React from 'react'

class Messages extends React.Component {
  render() {
    return(
      <div className="messages">
        <span>{this.props.messagesData.map((data) => {
          return(
            <div className="message">
              {data.message}
            </div>
          )
          })}
        </span>
      </div>
    )
  }
}
export default Messages