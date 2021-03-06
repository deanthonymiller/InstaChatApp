import React, { Component } from 'react';
import Messages from '../Messages/Messages'
import ChatInput from '../ChatInput/ChatInput'





class ChatApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }





    render(){
        return(
            <div>
                <h1>React InstaChat</h1>
                <Messages messages={this.state.messages} />
                <ChatInput onSend={this.sendHandler} />
            </div>
        )
    }
}

export default ChatApp;