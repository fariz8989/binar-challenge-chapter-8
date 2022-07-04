import React from "react";
import styles from "./login.css"
class Form extends React.Component{
    state ={
        username:"",
        email:"",
        experience:""
        ,level:""
        
    }
    submitValue(username,email){
        this.setState({
            username:username,
            email:email
        })
    }
    render(){
        var username = username
        var email=email
        return(
            <div className="grid-display">
            <div className="input-section">
                <h1>Create</h1>
            <div className="input">
            <label for="username">Username</label>
                    <br></br>
                    <input onChange={(value)=> username = value.target.value}type="text"name="username"placeholder="Enter Username"></input>
                    <br></br>
                    <label for="email">Email</label>
                    <br></br>
                    <input onChange={(value)=> email = value.target.value}type="text" name="email" placeholder="Enter Email"></input>
                    <div className="button"><button onClick={()=>this.submitValue(username,email)}>Submit</button></div>
                </div>
                </div>
                <div className="input-section">
                <h1>Edit</h1>
            <div className="input">
            <label for="username">Username</label>
                    <br></br>
                    <input onChange={(value)=> username = value.target.value}type="text"name="username"placeholder="Enter Username"></input>
                    <br></br>
                    <label for="email">Email</label>
                    <br></br>
                    <input onChange={(value)=> email = value.target.value}type="text" name="email" placeholder="Enter Email"></input>
                    <div className="button"><button onClick={()=>this.submitValue(username,email)}>Submit</button></div>
                </div>
                </div>
                {
                     ((this.state.username !== "")&&(this.state.email!==""))?
                     (<><h2>{"Username: "+this.state.username}</h2>
                     <h2>{"Email: "+this.state.email}</h2></>) : null
                }
            </div>
        )
    }
}
export default Form;