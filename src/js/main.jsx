import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Swal from 'sweetalert2';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import Contador from './components/Contador';

let uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 0;
let intervalo = null;

const render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Contador
        numero6={seis}
        numero5={cinco}
        numero4={cuatro}
        numero3={tres}
        numero2={dos}
        numero1={uno}
        onStop={stopCount}
        onStart={startCount}
        onRestart={restartCount}
      />
    </React.StrictMode>
  );
};

const contar = () => {
  if (uno === 10) { uno = 0; dos++; }
  if (dos === 10) { dos = 0; tres++; }
  if (tres === 10) { tres = 0; cuatro++; }
  if (cuatro === 10) { cuatro = 0; cinco++; }
  if (cinco === 10) { cinco = 0; seis++; }

  render();
  uno++;
};

const startCount = () => {
  if (!intervalo) {
    if (
      uno === 0 && dos === 0 && tres === 0 &&
      cuatro === 0 && cinco === 0 && seis === 0
    ) {
      // 🔊 Cargar y reproducir sonido al hacer clic en el botón
      const jigsawLaughAudio = new Audio(jigsawLaugh);
      jigsawLaughAudio.volume = 0.6;

      // Mostrar alerta temática
      Swal.fire({
        title: '¿Quieres jugar un juego?',
        text: 'El contador ha comenzado... toma tus decisiones sabiamente.',
        imageUrl: 'https://i.pinimg.com/originals/12/6d/5d/126d5d97e303e8a314a6b83f6d2186fc.gif',
        imageWidth: 300,
        imageHeight: 200,
        background: '#000000',
        color: '#ff0000',
        iconColor: '#ff0000',
        confirmButtonColor: '#8B0000',
        confirmButtonText: 'Comenzar',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        didOpen: () => {
          // Esperar a que la alerta esté completamente cargada antes de reproducir sonido
          jigsawLaugh.play().catch(() => {
            console.warn("El navegador bloqueó la reproducción automática del sonido.");
          });
        }
      });
    }

    // Iniciar el intervalo del contador
    intervalo = setInterval(contar, 1000);
  }
};



const stopCount = () => {
  clearInterval(intervalo);
  intervalo = null;
};

const restartCount = () => {
  uno = dos = tres = cuatro = cinco = seis = 0;
  stopCount();
  render();
};

render();
