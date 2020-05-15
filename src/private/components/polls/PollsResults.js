import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPoll } from "../../../services/AzureServices";
import { Polls } from "./Polls";

export const PollsResults = () => {

    const [anketa, setAnketa] = useState([]);
    const [filter, setFilter] = useState([]);



    useEffect(() => {
        getAllPoll().then(res =>{
            setFilter(res.data.data)
            console.log(res.data.data)
        })
    },[])

    
    useEffect(() => {
    const niz = []
    // eslint-disable-next-line array-callback-return
    filter.map(element => {
        if("nemanjin_label" in element){
            niz.push(element)}

    })
    setAnketa(niz)
    },[filter])
    

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        foodmood
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders" >Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings" >Settings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" >Log out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div>
                  {anketa.map(el => <Polls poll={el} key={el.id}></Polls>)}
                </div>
            </div><br></br>
            <Link to="home">
                <button className="btn btn-secondary btn-sm" >CREATE NEW POLL</button>
            </Link>
        </>
    );
};