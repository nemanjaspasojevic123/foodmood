import React from 'react';

export const Restaurant = ({restoran, handleDelete}) => {

    return(
        <div className="restaurant">
            <div><label className="poll_res">{restoran}</label>{" "}<button className="btn" onClick={handleDelete}>Remove</button></div>
            <hr></hr>
        </div>
    )
}