import React from "react";
import axios from "axios";
import $ from "jquery";
import { base_url } from "../config";

export default class Paket extends React.Component{
    constructor(){
        super()
        this.state = {
            token: "",
            found: "",
            data: [],
            modalLabel: "",
            action: "",

            id: "",
            id_outlet: "",
            jenis: "",
            nama_paket: "",
            harga: ""
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
        let url = base_url + "/paket"

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
                let data = JSON.parse(JSON.stringify(response.data.data_paket))
                this.setState({
                    data: data
                })
            }
        })
        .catch(error => console.log(error))
    }

    Add = () => {
        $("#modal_paket").modal("show")
        this.setState({
            action: "add",
            modalLabel: "Tambah Data",
            id: "",
            id_outlet: "",
            jenis: "",
            nama_paket: "",
            harga: ""
        })
    }

    Edit = (selectedItem) => {
        $("#modal_paket").modal("show")
        this.setState({
            action: "edit",
            modalLabel: "Edit Data",
            id: selectedItem.id,
            id_outlet: selectedItem.id_outlet,
            jenis: selectedItem.jenis,
            nama_paket: selectedItem.nama_paket,
            harga: selectedItem.harga
        })
    }

    Delete = (selectedItem) => {
        if (window.confirm("Yakin nih dihapus?")) {
            let url = base_url + "/paket/" + selectedItem.id

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
        $("#modal_paket").modal("hide")

        let data = {
            id: this.state.id,
            id_outlet: this.state.id_outlet,
            jenis: this.state.jenis,
            nama_paket: this.state.nama_paket,
            harga: this.state.harga
        }
        const url = base_url + "/paket"

        if(this.state.action == "add"){
            axios.post(url, data, { headers:{ 
                Authorization: "Bearer " + this.state.token
            }})
            .then(response => {
                this.getData()
            })
            .catch(error => console.log(error))
        } else if(this.state.action == "edit") {
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
                        <h3 className="fw-bold">Panel Paket</h3>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2 fw-bold" type="button"
                        onClick={() => this.Add()}><i class="fas fa-plus"></i> Paket</button>
                    </div>
                </div>
                <div className="table-responsive mt-2">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nama Paket</th>
                                <th scope="col">Jenis</th>
                                <th scope="col">Outlet</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(item => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.nama_paket}</td>
                                    <td>{item.jenis}</td>
                                    <td>{item.id_outlet}</td>
                                    <td>{item.harga}</td>
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
                <div class="modal fade" id="modal_paket" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalLabel">{this.state.modalLabel} Paket</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={ev => this.Save(ev)}>
                                <div class="modal-body">
                                    
                                    Outlet
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Outlet" 
                                        value={this.state.id_outlet}
                                        onChange={ev => this.setState({id_outlet: ev.target.value})}
                                        required/>
                                    </div>
                                    
                                    Nama Paket
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Nama Paket" 
                                        value={this.state.nama_paket}
                                        onChange={ev => this.setState({nama_paket: ev.target.value})}
                                        required/>
                                    </div>

                                    Jenis
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Jenis" 
                                        value={this.state.jenis}
                                        onChange={ev => this.setState({jenis: ev.target.value})}
                                        required/>
                                    </div>

                                    Harga
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Harga" 
                                        value={this.state.harga}
                                        onChange={ev => this.setState({harga: ev.target.value})}
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