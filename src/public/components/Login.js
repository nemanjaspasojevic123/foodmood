import React from "react";

export const Login = ({ history }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/home')
  }

  return (
    <>
      <div className="form">
        <div>
          <input type="email" placeholder="Enter username"></input>
        </div>
        <div>
          <input type="password" placeholder="Enter Password"></input>
        </div>
        <div>
          <button type="submit" onClick={e => { handleSubmit(e) }} className="btn btn-secondary btn-sm">
            Submit
              </button>
        </div>
      </div>
    </>
  );
};
