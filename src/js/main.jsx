import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Contador from './components/Contador';


let uno = 0
let dos = 0
let tres = 0
let cuatro = 0
let cinco = 0
let seis = 0

setInterval(() => {
  if (uno == 10) {
    dos++;
    uno = 0
  } else if (dos == 9) {
    tres++;
    dos = 0
  }
  else if (tres == 9) {
    cuatro++;
    tres = 0
  }
  else if (cuatro == 9) {
    cinco++;
    cuatro = 0
  }
  else if (cinco == 9) {
    seis++;
    cinco = 0
  }
  else if (seis == 9 && cinco == 9 && cuatro == 9 && tres == 9 && dos == 9 && uno == 9) {
    uno = 9; dos = 9; tres = 9; cuatro = 9; cinco = 9; seis = 9;

  }

 
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Contador
        numero6={seis}
        numero5={cinco}
        numero4={cuatro}
        numero3={tres}
        numero2={dos}
        numero1={uno}
        // stopCount={stopCount}
        // startCount={startCount}
        // restartCount={restartCount}

      />
    </React.StrictMode>,
  )
  uno++
}, 1000); 
