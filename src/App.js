import React, { Component } from 'react';
import ChatApp from './Component/ChatApp/ChatApp'





class App extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            username:''
        }
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    usernameChangeHandler = (event) =>{
        this.setState({
            username:event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({submitted:true, username: this.state.username})
    }

    render(){
          if(this.state.submitted){
            return(
              <ChatApp username={this.state.username} />
            )
          }
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Come Instachat</h1>
                <div>
                    <input 
                    type="text"
                    onChange={this.usernameChangeHandler}
                    placeholder="Enter Username"
                    required
                    />

                    <input type="submit" value="Submit" />
                </div>



            </form>
        )
    }
}

export default App;
