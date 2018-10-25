import React, { Component} from 'react';
import ChatApp from '../ChatApp/ChatApp'
import Message from '../Messages/Message'


class Messages extends Component{
    render(){
        const messages = this.props.messages.map((message, i) => {
            return(
                <Message
                key={i}
                username={message.username}
                message={message.message}
                fromMe={message.fromMe}
                />
            )
        })
        return(
            <div className="messages" id="messageList" >
            {messages}
            </div>
        )
    }
}

export default Messages