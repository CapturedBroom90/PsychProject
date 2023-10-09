let speed = 0;
let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let wheelSpeed = rootStyles.getPropertyValue("--wheel-speed");

function changeSpeed() {
  speed = document.getElementById("speed-slider").value;
  root.style.setProperty("--wheel-speed", speed / 10 + "s");
  console.log(speed);
}
