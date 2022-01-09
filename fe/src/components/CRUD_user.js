import React from "react";
import axios from "axios";
import $ from "jquery";
import { base_url } from "../config";

export default class User extends React.Component{
    constructor(){
        super()
        this.state = {
            token: "",
            found: "",
            data: [],
            modalLabel: "",
            action: "",

            id: "",
            nama: "",
            username: "",
            password: "",
            id_outlet: "",
            role: ""
        }
        // dapetin token dari localstorage
        if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("token")
        } else {
            // token ga ada, redirect ke halaman login
            window.location = "/login"
        }
    }

    getData = () => {
        let url = base_url + "/user"

        axios.get(url,{
            headers:{ 
                Authorization: "Bearer " + this.state.token
            }
        })
        .then(response => {
            this.setState({
                found: response.data.found
            })
            if(this.state.found){
                let data = JSON.parse(JSON.stringify(response.data.data_user))
                this.setState({
                    data: data
                })
            }
        })
        .catch(error => console.log(error))
    }

    Add = () => {
        $("#modal_user").modal("show")
        this.setState({
            action: "add",
            modalLabel: "Tambah Data",
            id: "",
            nama: "",
            username: "",
            password: "",
            id_outlet: "",
            role: ""
        })
    }

    Edit = (selectedItem) => {
        $("#modal_user").modal("show")
        this.setState({
            action: "edit",
            modalLabel: "Edit Data",
            id: selectedItem.id,
            nama: selectedItem.nama,
            username: selectedItem.username,
            password: selectedItem.password,
            id_outlet: selectedItem.id_outlet,
            role: selectedItem.role
        })
    }

    Delete = (selectedItem) => {
        if (window.confirm("Yakin nih dihapus?")) {
            let url = base_url + "/user/" + selectedItem.id

            axios.delete(url,{
                headers:{ 
                    Authorization: "Bearer " + this.state.token
                }
            })
            .then(response => {
                window.alert(response.data.message)
                this.getData()
            })
            .catch(error => console.log(error))
        }
    }

    Save = event => {
        event.preventDefault()
        $("#modal_user").modal("hide")

        let data = {
            id: this.state.id,
            nama: this.state.nama,
            username: this.state.username,
            password: this.state.password,
            id_outlet: this.state.id_outlet,
            role: this.state.role
        }
        const url = base_url + "/user"

        if(this.state.action === "add"){
            axios.post(url, data, { headers:{ 
                Authorization: "Bearer " + this.state.token
            }})
            .then(response => {
                this.getData()
            })
            .catch(error => console.log(error))
        } else if(this.state.action === "edit") {
            axios.put(url, data, { headers:{ 
                Authorization: "Bearer " + this.state.token
            }})
            .then(response => {
                this.getData()
            })
            .catch(error => console.log(error))
        }
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <>
                <div class="d-flex justify-content-between">
                    <div>
                    <h3 className="fw-bold">Panel User</h3>
                    </div>
                    <div>
                    <button className="btn btn-primary mx-2 fw-bold" type="button"
                    onClick={() => this.Add()}><i class="fas fa-plus"></i> User</button>
                    </div>
                </div>
                <div className="table-responsive mt-2">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Username</th>
                            <th scope="col">Outlet</th>
                            <th scope="col">Role</th>
                            <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(item => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.nama}</td>
                                    <td>{item.username}</td>
                                    <td>{item.id_outlet}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary mx-2 fw-bold" type="button"
                                        onClick={() => this.Edit(item)}><i class="fas fa-edit"></i></button>
                                        <button className="btn btn-sm btn-outline-primary fw-bold" type="button"
                                        onClick={() => this.Delete(item)}><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* modal */}
                <div class="modal fade" id="modal_user" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">{this.state.modalLabel} User</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={ev => this.Save(ev)}>
                                <div class="modal-body">
                                    
                                    Nama
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Nama" 
                                        value={this.state.nama}
                                        onChange={ev => this.setState({nama: ev.target.value})}
                                        required/>
                                    </div>
                                    
                                    Username
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Username" 
                                        value={this.state.username}
                                        onChange={ev => this.setState({username: ev.target.value})}
                                        required/>
                                    </div>

                                    Password
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Password" 
                                        value={this.state.password}
                                        onChange={ev => this.setState({password: ev.target.value})}
                                        required/>
                                    </div>

                                    Outlet
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Outlet" 
                                        value={this.state.id_outlet}
                                        onChange={ev => this.setState({id_outlet: ev.target.value})}
                                        required/>
                                    </div>

                                    Role
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Role" 
                                        value={this.state.role}
                                        onChange={ev => this.setState({role: ev.target.value})}
                                        required/>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}