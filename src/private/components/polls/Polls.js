import React, { useState, useEffect } from 'react'
import { updateVote, updateActive } from '../../../services/AzureServices';
import { Line } from "react-chartjs-2";

export const Polls = ({ poll }) => {
    let { nemanjin_label, nemanjin_date, nemanjin_active, restaurants, id, votes } = poll


    const [chartData, setChartData] = useState({});
    const [act, setAct] = useState(nemanjin_active);


    const handleVote = (id, votes) => {
        let povecanGlas = votes + 1;
        updateVote(id, povecanGlas).then(response => {
            window.location.reload()
        })
    }

    const handleEnd = () => {   
        updateActive(id, act).then(response => {
            console.log(response)
        })
    }

    let displayRestaurant = restaurants.map(({ name }) => name)
    let displayVotes = votes.map(({ votes }) => votes)


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const chart = () => {
        setChartData({
            labels: displayRestaurant,
            datasets: [
                {
                    label: "level of thiccness",
                    data: displayVotes,
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                    borderWidth: 4
                }
            ]
        });
    }
    useEffect(() => {
        setAct(false)
        chart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="form">
            <div>Id: {id}</div>
            <div>Poll name: {nemanjin_label}</div>
            <div>Date: {nemanjin_date}</div>
            <div>Status: {nemanjin_active ? <label style={{color: "rgb(61, 235, 52)"}}>Active</label> : <label style={{color: "red"}}>Inactive</label>}</div>
            <div className="poll_container">
                <div className="restorani">{restaurants.map(el => {
                    return (<div key={el.id}><label>Restaurant: {el.name}</label>
                    </div>)
                })}</div>
                <div className="glasovi">{votes.map(el => {
                    return (<div key={el.id}><label>Votes: {el.votes}</label>{" "}
                        <button onClick={() => handleVote(el.id, el.votes)} className="btn btn-secondary btn-sm" >Vote</button></div>)
                })}</div></div><br></br>
            <div>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: { text: nemanjin_label, display: true },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ],
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    }
                                }
                            ]
                        }
                    }}
                />
            </div>
            <button onClick={()=> handleEnd()} >End Poll</button>
        </div>
    )
}

