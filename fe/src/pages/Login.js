import React from "react";
import axios from 'axios';
import { base_url } from "../config";

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            role: "admin",
            message: "",
            isLogged: false
        }
    }

    Login = event => {

        event.preventDefault()

        let sendData = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }

        const url = base_url + "/auth"

        axios.post(url, sendData)
        .then(response => {
            this.setState({
                isLogged: response.data.isLogged
            })
            if(this.state.isLogged){
                let admin = response.data.data
                let token = response.data.token
                localStorage.setItem("data_admin", JSON.stringify(admin))
                localStorage.setItem("token", token)
                window.location = '/'
            } else {
                this.setState({
                    message: response.data.message
                })
                alert(this.state.message)
            }
        })
        .catch(error => alert(error))
    }
    
    render(){
        return(
            <>
            <div className="container">
                <form onSubmit={ev => this.Login(ev)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"
                        value={ this.state.username } onChange={ ev => this.setState({ username: ev.target.value }) }/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                        value={ this.state.password } onChange={ ev => this.setState({ password: ev.target.value }) }/>
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <select className="form-control"
                        value={ this.state.role } onChange={ ev => this.setState({ role: ev.target.value }) }>
                            <option value="admin">Admin</option>
                            <option value="kasir">Kasir</option>
                            <option value="owner">Owner</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            </>
        )
    }
}