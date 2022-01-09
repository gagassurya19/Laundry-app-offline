import React from "react";
import Header from "../components/Header"

export default class GenerateLaporan extends React.Component{
    constructor(){
        super()
        this.state = {
            isOkay : true
        }
    }
    render(){
        return(
            <>
                {this.state.isOkay ? (
                    <>
                        <div class="d-flex align-items-center min-vh-100">
                            <div class="container justify-content-center col-12 col-lg-3">
                                <h1 className="text-center mb-4 fw-bold">LaundryKu</h1>
                                <form>
                                    <input class="form-control" type="text" placeholder="Kode Invoice" required/>
                                    <div className="col-12 mx-auto">
                                        <button className="btn btn-primary mt-4 form-control fw-bolder" type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </>
                ):(
                    <>
                        <div className="container">
                            <Header/>
                        </div>
                    </>
                )}
            </>
        )
    }
}