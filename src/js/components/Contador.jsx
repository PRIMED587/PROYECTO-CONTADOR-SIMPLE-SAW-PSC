import React from "react";

const Contador = (props) => {
  return (
    <>
      <div className="sawContainer">
        <div id="Content" className="container-fluid">
          <div className="d-flex flex-column align-items-center Contador">
            <div className="d-flex flex-row justify-content-center numeros-container">
              <div id="clockIcon" className="numero">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="numero">{props.numero6}</div>
              <div className="numero">{props.numero5}</div>
              <div className="numero">{props.numero4}</div>
              <div className="numero">{props.numero3}</div>
              <div className="numero">{props.numero2}</div>
              <div className="numero">{props.numero1}</div>
            </div>

            <div className="botones mt-3 d-flex flex-wrap justify-content-center">
              <button id="stop" onClick={props.onStop}>STOP</button>
              <button id="start" onClick={props.onStart}>START</button>
              <button id="restart" onClick={props.onRestart}>RESTART</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contador;
