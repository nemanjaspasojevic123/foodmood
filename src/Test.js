import React, { useState } from 'react';
import { getAllData } from './services/AzureServices';

function Test() {

  const [query, setQuery] = useState('')

  const handleClick = () => {
    getAllData(query).then(res =>{
      console.log(res.data)
    })
  }
  return (
    <div className="App">
       <div className="col-xs-2">
      <input className="form-control" type="text" onChange={e => setQuery(e.target.value)} placeholder="Pomocni input"></input>
      </div>
      <button className="btn" onClick={e => handleClick(e)}>Submit</button>
    </div>
  );
}

export default Test;