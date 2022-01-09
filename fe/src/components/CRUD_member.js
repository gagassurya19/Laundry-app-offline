import React from "react";
import axios from "axios";
import { base_url } from "../config";
import $ from "jquery";

export default class Member extends React.Component{
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
            alamat: "",
            jenis_kelamin: "",
            tlp: ""
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
        let url = base_url + "/member"

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
                let data = JSON.parse(JSON.stringify(response.data.data_member))
                this.setState({
                    data: data
                })
            }
        })
        .catch(error => console.log(error))
    }

    Add = () => {
        $("#modal_member").modal("show")
        this.setState({
            action: "add",
            modalLabel: "Tambah Data",
            id: "",
            nama: "",
            alamat: "",
            jenis_kelamin: "",
            tlp: ""
        })
    }

    Edit = (selectedItem) => {
        $("#modal_member").modal("show")
        this.setState({
            action: "edit",
            modalLabel: "Edit Data",
            id: selectedItem.id,
            nama: selectedItem.nama,
            alamat: selectedItem.alamat,
            jenis_kelamin: selectedItem.jenis_kelamin,
            tlp: selectedItem.tlp
        })
    }

    Delete = (selectedItem) => {
        if (window.confirm("Yakin nih dihapus?")) {
            let url = base_url + "/member/" + selectedItem.id

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
        $("#modal_member").modal("hide")

        let data = {
            id: this.state.id,
            nama: this.state.nama,
            alamat: this.state.alamat,
            jenis_kelamin: this.state.jenis_kelamin,
            tlp: this.state.tlp
        }
        console.log(data)
        const url = base_url + "/member"

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
                        <h3 className="fw-bold">Panel Member</h3>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2 fw-bold" type="button" onClick={() => {this.Add()}}><i class="fas fa-plus"></i> Member</button>
                    </div>
                </div>
                <div className="table-responsive mt-2">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nama Member</th>
                                <th scope="col">Jenis Kelamin</th>
                                <th scope="col">No Telp</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.data.map(item => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.nama}</td>
                                    <td>{item.jenis_kelamin}</td>
                                    <td>{item.tlp}</td>
                                    <td>{item.alamat}</td>
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
                <div class="modal fade" id="modal_member" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">{this.state.modalLabel} Member</h5>
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
                                    
                                    Alamat
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Alamat" 
                                        value={this.state.alamat}
                                        onChange={ev => this.setState({alamat: ev.target.value})}
                                        required/>
                                    </div>

                                    Jenis Kelamin
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Jenis Kelamin" 
                                        value={this.state.jenis_kelamin}
                                        onChange={ev => this.setState({jenis_kelamin: ev.target.value})}
                                        required/>
                                    </div>

                                    Telepon
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Telepon" 
                                        value={this.state.tlp}
                                        onChange={ev => this.setState({tlp: ev.target.value})}
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