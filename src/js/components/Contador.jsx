import React from "react";

const Contador = (props) => {
  return (
    <>
      <div id="Content" className="container-fluid">
        <div className="d-flex flex-wrap justify-content-center Contador">
          <div id="clockIcon" className="numero"><i className="fa-regular fa-clock"></i></div>
          <div className="numero">{props.numero6}</div>
          <div className="numero">{props.numero5}</div>
          <div className="numero">{props.numero4}</div>
          <div className="numero">{props.numero3}</div>
          <div className="numero">{props.numero2}</div>
          <div className="numero">{props.numero1}</div>
          <button id="stop" onClick={props.onStop}>STOP</button>
          <button id="start" onClick={props.onStart}>START</button>
          <button id="restart" onClick={props.onRestart}>RESTART</button>
        </div>
      </div>
    </>
  );
};

export default Contador;
