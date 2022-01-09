import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            data_admin: {}
        }
    }

    getDataAdmin = () => {
        let data = JSON.parse(localStorage.getItem("data_admin"))
        if(!data){
            window.location = "/login"
        } else {
            this.setState({
                data_admin: data
            })
        }
    }

    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("data_admin")
        window.location = "/login"
    }

    componentDidMount(){
        this.getDataAdmin()
    }
    render(){
        return(
            <>
                <div className="row text-center border-bottom py-4">
                    {this.props.kind === "admin" ? (
                        <>
                            <div className="col-12 col-lg-8">
                                <div className="col">
                                    <h2 className="fw-bolder">{this.state.data_admin.nama}</h2>
                                </div>
                                <div className="col">
                                    <span className="p-4 fw-bold" title="Username"><i className="fas fa-id-card"></i> {this.state.data_admin.username}</span>
                                    <span className="p-4 fw-bold" title="Role/Level"><i class="fas fa-user-tag"></i> {this.state.data_admin.role}</span>
                                    <span className="p-4 fw-bold" title="Outlet/Cabang"><i class="fas fa-store"></i> {this.state.data_admin.id_outlet}</span>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 my-auto mt-3">
                                <Link to="/laporan">
                                    <button className="btn btn-primary mr-3 fw-bold" type="button" ><i class="fas fa-sign-out-alt"></i> Laporan</button>
                                </Link>
                                <button className="btn btn-outline-primary fw-bold" type="button"
                                onClick={() => this.Logout()}>Logout</button>
                            </div>
                        </>
                    ):(
                        <div className="col-12">
                            <div className="col">
                                <h2 className="fw-bolder">Admin</h2>
                            </div>
                            <div className="col">
                                <span className="p-4 fw-bold" title="Username"><i className="fas fa-id-card"></i> Admin</span>
                                <span className="p-4 fw-bold" title="Role/Level"><i class="fas fa-user-tag"></i> Kasir</span>
                                <span className="p-4 fw-bold" title="Outlet/Cabang"><i class="fas fa-store"></i> Malang</span>
                            </div>
                        </div>
                    )}
                </div>
            </>
        )
    }
}