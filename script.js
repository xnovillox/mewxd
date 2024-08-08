// Variables para el canvas, contexto y recursos
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('audio');
let showImage1 = true;

// Carga las imágenes
const img1 = new Image();
const img2 = new Image();
img1.src = 'imagen1.jpg'; // Asegúrate de que estos archivos estén en el directorio correcto
img2.src = 'imagen2.jpg';

// Ajusta el tamaño del canvas
canvas.width = 800;
canvas.height = 600;

// Dibuja la imagen en el canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Borra el canvas

  if (showImage1) {
    ctx.drawImage(img1, 0, 0, canvas.width, canvas.height); // Dibuja la primera imagen
    if (!audio.paused) {
      audio.pause(); // Detiene el sonido si está reproduciéndose
    }
  } else {
    ctx.drawImage(img2, 0, 0, canvas.width, canvas.height); // Dibuja la segunda imagen
    audio.currentTime = 0; // Reinicia el tiempo del audio
    audio.play(); // Reproduce el sonido
  }
}

// Alterna entre las dos imágenes al hacer clic
canvas.addEventListener('click', () => {
  showImage1 = !showImage1;
  draw();
});

// Inicializa el dibujo
draw();
