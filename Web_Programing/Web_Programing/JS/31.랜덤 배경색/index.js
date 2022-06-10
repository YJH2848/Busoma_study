const backgroundBtn = document.getElementById("background");
const chars = "0123456789ABCDEF";

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const back = Math.floor(Math.random() * chars.length);
    color += chars.substring(back, back + 1);
  }
  backgroundBtn.innerHTML = `<h1>${color}</h1>`;
  
  document.getElementById("container").style.backgroundColor = color;
}

