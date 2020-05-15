/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import Test from '../../../Test';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from "react-router-dom";
import { getAllRestaurant, postPollForRestaurant, postVote } from "../../../services/AzureServices";
import { Restaurant } from "./Restaurant";

export const NewPoll = () => {



    const [restaurant, setRestaurant] = useState([]);
    const [niz, setNiz] = useState([]);
    const [dodatni, setDodatni] = useState([]);
    const [selected, setSelected] = useState({});
    const [treci, setTreci] = useState([]);
    const [time, setTime] = useState([]);
    const [pollName, setPollName] = useState([]);
    const [returnRestorants, setReturnRestorans] = useState([])



    useEffect(() => {
        getAllRestaurant().then(res => {
            setRestaurant(res.data.data)
            setReturnRestorans(res.data.data)
        })
    }, [])

    const handleRestaurant = (e) => {
        setNiz(e)
    }
    const handleSearch = (e) => {
        let tmp = [...restaurant]
        tmp.splice(tmp.findIndex((el) => el.id === selected.id), 1)
        setRestaurant(tmp)
        setDodatni([...dodatni, niz])
    }

    const handleDelete = (id) => {
        setDodatni(dodatni.filter(el => el.id !== id))
        setRestaurant(returnRestorants)
    }

    const handleDeleteAll = () => {
        setDodatni([]);
        setRestaurant(returnRestorants)
    }

    const handleSubmit = (e) => {
        setTreci(pollName)
        setTime(new Date().toLocaleString())
    }


    let votesIds = []
    const pripremni = dodatni.map(el => el.id)
    const handleVote = () => {
        // eslint-disable-next-line array-callback-return
        pripremni.map(el => {
            postVote({ restaurantId: el, votes: 0 }).then((response) => votesIds.push(response.data.id))
        })
    }

    let newPoll = {
        nemanjin_label: pollName,
        nemanjin_date: time,
        nemanjin_active: true,
        restaurants: dodatni.map(e => e.id),
        votes: votesIds
    }

    const handlePoll = () => {
        postPollForRestaurant(newPoll).then(res => {
            console.log(res)
        })
    }


    return (
        <div>
            <div className="new-poll-form">
                <div>
                    <div className="col-xs-2">
                    <input className="form-control" onChange={e => setPollName(e.target.value)} placeholder="Poll name" ></input>
                    </div>
                    <button className="btn btn-secondary btn-sm" onClick={e => handleSubmit(e)}>Submit</button>
                    <div>
                        <div>{time}</div>
                    </div>
                    <div>
                        {treci}
                    </div>
                </div><br></br>
                <div className="restaurant-select">
                    <Autocomplete
                        onChange={(e, value) => { handleRestaurant(value); setSelected(value) }}
                        getOptionSelected={(option, values) => option._id === values._id}
                        id="combo-box-demo"
                        options={restaurant}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300, display: "inline-block" }}
                        renderInput={(params) => <TextField {...params} label="Search restaurant" variant="outlined" />}
                    />
                </div>
                <button className="btn btn-secondary btn-sm" onClick={e => handleSearch(e)}>Add</button>
                <div className="restaurant-list">
                    <h4>Added:</h4>
                    <div className="restaurant">
                        {dodatni.map(el => <Restaurant restoran={el.name} key={el.id} handleDelete={() => handleDelete(el.id)} />)}
                    </div>
                    <div>
                        <button className="btn btn-secondary btn-sm" onClick={e => handleDeleteAll(e)}>Remove All Restaurants</button>
                    </div>
                    <div>
                        <button className="btn btn-secondary btn-sm" onClick={e => handleVote(e)}>Create Vote</button>
                    </div>
                    <div>
                        <button className="btn btn-secondary btn-sm" onClick={e => handlePoll(e)}>Create Poll</button>
                    </div>
                </div>
                <div>
                    <Link to="results">
                        <button className="btn btn-secondary btn-sm" >Poll Results</button>
                    </Link>
                </div>
                <div>
                    <Test></Test>
                </div>
            </div>
        </div>
    );
};
