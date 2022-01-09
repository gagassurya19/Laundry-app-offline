import React from "react";
import axios from "axios";
import { base_url } from "../config";

export default class Statistic extends React.Component{
    constructor(){
            super()
            this.state = {
                token: "",
                found: "",
                data_transaksi: [],
                data_outlet: [],
                data_member: [],
                data_paket: [],
            }
            // dapetin token dari localstorage
            if (localStorage.getItem("token")) {
                this.state.token = localStorage.getItem("token")
            } else {
                // token ga ada, redirect ke halaman login
                window.location = "/login"
            }
        }
        
        getDataTransaksi = () => {
            let url = base_url + "/transaksi"
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
                    let data = JSON.parse(JSON.stringify(response.data.data_transaksi))
                    this.setState({
                        data_transaksi: data
                    })
                }
            })
            .catch(error => console.log(error))
        }
        getDataOutlet = () => {
            let url = base_url + "/outlet"
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
                    let data = JSON.parse(JSON.stringify(response.data.data_outlet))
                    this.setState({
                        data_outlet: data
                    })
                }
            })
            .catch(error => console.log(error))
        }
        getDataMember = () => {
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
                        data_member: data
                    })
                }
            })
            .catch(error => console.log(error))
        }
        getDataPaket = () => {
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
                        data_paket: data
                    })
                }
            })
            .catch(error => console.log(error))
        }
        componentDidMount(){
            this.getDataOutlet()
            this.getDataMember()
            this.getDataPaket()
            this.getDataTransaksi()
        }
    render(){
        // fungsi untuk menampilkan card secara dinamis
        function Card(props){
            return(
                <div className={`card bg-${props.bg} text-white text-center p-3 make-it-glass`}>
                    <blockquote class="blockquote mb-0">
                        <i class={`fas ${props.icon}`}></i>
                        <h4 className="fw-bold">{props.title}</h4>    
                        <h3 className="fw-bold">{props.count}</h3>
                    </blockquote>
                </div>
            )
        }
        return(
            <>
                <div className="row my-4 p-2 make-it-glass">
                    <div className="col-6 col-lg py-2">
                        <Card bg="primary" icon="fa-shopping-cart" title="Transaksi" count={this.state.data_transaksi.length}/>
                    </div>
                    <div className="col-6 col-lg py-2">
                        <Card bg="primary" icon="fa-store" title="Outlet" count={this.state.data_outlet.length}/>
                    </div>
                    <div className="col-6 col-lg py-2">
                        <Card bg="primary" icon="fa-users" title="Member" count={this.state.data_member.length}/>
                    </div>
                    <div className="col-6 col-lg py-2">
                        <Card bg="primary" icon="fa-cubes" title="Paket" count={this.state.data_paket.length}/>
                    </div>
                </div>
            </>
        )
    }
}