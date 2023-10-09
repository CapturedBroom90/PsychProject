let speed = 0;
let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let wheelSpeed = rootStyles.getPropertyValue("--wheel-speed");

function changeSpeed() {
  speed = document.getElementById("speed-slider").value;
  if (speed == 10) {
    root.style.setProperty("--wheel-speed", "0.1s");
  } else if (speed == 9) {
    root.style.setProperty("--wheel-speed", "0.2s");
  } else if (speed == 8) {
    root.style.setProperty("--wheel-speed", "0.4s");
  } else if (speed == 7) {
    root.style.setProperty("--wheel-speed", "0.6s");
  } else if (speed == 6) {
    root.style.setProperty("--wheel-speed", "0.7s");
  } else if (speed == 5) {
    root.style.setProperty("--wheel-speed", "0.8s");
  } else if (speed == 4) {
    root.style.setProperty("--wheel-speed", "0.9s");
  } else if (speed == 3) {
    root.style.setProperty("--wheel-speed", "1s");
  } else if (speed == 2) {
    root.style.setProperty("--wheel-speed", "1.4s");
  } else if (speed == 1) {
    root.style.setProperty("--wheel-speed", "2s");
  }

  console.log(speed);
}
