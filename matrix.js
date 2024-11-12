const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas(); // Initial resize on load

const letters = "01";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#4ab8f9"; // Matrix blue color
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, index) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, index * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[index] = 0;
    }
    drops[index]++;
  });
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
  resizeCanvas(); // Resize canvas when window is resized
  drops.length = Math.floor(canvas.width / fontSize); // Recalculate columns based on new width
  drops.fill(1); // Reset drop positions
});
