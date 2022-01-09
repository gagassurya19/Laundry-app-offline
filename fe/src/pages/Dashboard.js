import React from "react";

import Header from '../components/Header'
import Statistic from '../components/Statistic'
import Member from "../components/CRUD_member"
import Outlet from "../components/CRUD_outlet"
import Paket from "../components/CRUD_paket"
import Transaksi from "../components/CRUD_transaksi"
import User from "../components/CRUD_user"
import GenerateLaporan from "../components/GenerateLaporan";
// import Generate_laporan from '../components/Generate_laporan'

export default class Dashboard extends React.Component{
    render(){
        return(
            <>
                <div className="container pt-5">
                    <Header kind="admin"/>
                    <Statistic/>
                    {/* START-TABS */}
                    <div class="row">
                        <div className="col-12 col-md-2">
                            <div class="nav nav-pills mb-3 px-2">
                                <a class="nav-link active" id="v-pills-transaksi-tab" data-toggle="pill" href="#v-pills-transaksi" role="tab" aria-controls="v-pills-transaksi" aria-selected="true">Transaksi</a>
                                <a class="nav-link" id="v-pills-member-tab" data-toggle="pill" href="#v-pills-member" role="tab" aria-controls="v-pills-member" aria-selected="false">Member</a>
                                <a class="nav-link" id="v-pills-outlet-tab" data-toggle="pill" href="#v-pills-outlet" role="tab" aria-controls="v-pills-outlet" aria-selected="false">Outlet</a>
                                <a class="nav-link" id="v-pills-paket-tab" data-toggle="pill" href="#v-pills-paket" role="tab" aria-controls="v-pills-paket" aria-selected="false">Paket</a>
                                <a class="nav-link" id="v-pills-admin-tab" data-toggle="pill" href="#v-pills-admin" role="tab" aria-controls="v-pills-admin" aria-selected="false">Admin</a>
                                <a class="nav-link" id="v-pills-laporan-tab" data-toggle="pill" href="#v-pills-laporan" role="tab" aria-controls="v-pills-laporan" aria-selected="false">Laporan</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-10">
                            <div class="tab-content " id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-transaksi" role="tabpanel" aria-labelledby="v-pills-transaksi-tab">
                                    <Transaksi/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-member" role="tabpanel" aria-labelledby="v-pills-member-tab">
                                    <Member kasir=""/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-outlet" role="tabpanel" aria-labelledby="v-pills-outlet-tab">
                                    <Outlet/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-paket" role="tabpanel" aria-labelledby="v-pills-paket-tab">
                                    <Paket/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-admin" role="tabpanel" aria-labelledby="v-pills-admin-tab">
                                    <User/>
                                </div>
                                <div class="tab-pane fade" id="v-pills-laporan" role="tabpanel" aria-labelledby="v-pills-laporan-tab">
                                    <GenerateLaporan/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END-TABS */}
                </div>
            </>
        )
    }
}