import React from "react";

//create your first component

const Contador = (props) => {
	return (
		<>
			<div id="Content">
				<div className="d-flex Contador">
					<div id="clockIcon" className="numero"><i class="fa-regular fa-clock"></i></div>
					<div className="numero">{props.numero6}</div>
					<div className="numero">{props.numero5}</div>
					<div className="numero">{props.numero4}</div>
					<div className="numero">{props.numero3}</div>
					<div className="numero">{props.numero2}</div>
					<div className="numero">{props.numero1}</div>
					<button id="stop">STOP</button>
					<button id="start">START</button>
					<button id="restart">RESTART</button>
				</div>
			</div>
		</>



	);
};



export default Contador;