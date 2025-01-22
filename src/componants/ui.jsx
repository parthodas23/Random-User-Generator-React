import React from "react";
const GetUi = (props)=> {
  return (
    <div className="container">
      <div className="picture">
        <img src={props.url} alt="" />
      </div>
      <h3>{props.title} {props.first} {props.last}</h3>
      <h4>{props.state} , {props.country}</h4>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default GetUi;
