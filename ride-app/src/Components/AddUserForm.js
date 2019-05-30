import React from 'react';
import { connect } from 'react-redux'

import { addUser } from '../Actions';

class AddUserForm extends React.Component{
    constructor(){
        super();
        this.state = {
         name: "",
         email:"",
         username:"",
         password:"",
        }
    }

    handleInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.name === "" || this.state.username === "" || this.state.email === "" || this.state.password === "") return; 
        this.props.addUser(this.state)
        this.setState({ name:"", email:"", username:"", password:""})
        window.location.pathname = "/user"
    }

    cancelForm = e => {
        e.preventDefault();
        window.location.pathname = "/user"
    }

    render(){
        return (
            <div className="user-form">
                <button className="cancel-btn" onClick={this.cancelForm}>X</button>
                    <form onSubmit={this.handleSubmit}>
                    <h2>Add a new User</h2>
                    <input
                    placeholder="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                     />
                    <input
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInput}
                    />
                    <input 
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInput}
                    />
                    <input 
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                    />
                    <button className="add-user-btn">+</button>
                    </form>
            </div>
        )
    }

    export default connect(null, { addUser })(AddUserForm);