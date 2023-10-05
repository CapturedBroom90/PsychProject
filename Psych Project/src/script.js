const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const finalValue = document.getElementById('final-value');
let spinSpeed = 3;
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 180, maxDegree: 180, value: 2 },
  { minDegree: 360, maxDegree: 360, value: 1 },
];
//Size of each piece
const data = [1];
//background color for each piece
var pieColors = [
  '#8b35bc',
  '#b163da',
  '#8b35bc',
  '#b163da',
  '#8b35bc',
  '#b163da',
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: 'pie',
  data: {
    //Labels(values which are to be displayed on chart)

    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: '#ffffff',
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = angleValue => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = document.getElementById("slider").value;
console.log(document.getElementById("slider").value)
document.getElementsByName("slider")[0].addEventListener('change', doThing);

function doThing()
{
    resultValue = document.getElementById("slider").value;
}
spinBtn.disabled = true;
//Empty final value

//Generate random degrees to stop at
let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
//Interval for rotation animation
let rotationInterval = window.setInterval(() => {
  

  myChart.options.rotation = myChart.options.rotation + resultValue;
  //Update chart with new value;
  myChart.update();
  //If rotation>360 reset it back to 0
  if (myChart.options.rotation >= 360) {
    count += 1;
    //resultValue -= 5;
    myChart.options.rotation = 0;
  } else if (count > 10000 && myChart.options.rotation == randomDegree) {
    valueGenerator(randomDegree);
    clearInterval(rotationInterval);
    count = 0;
    resultValue = 1;
  }
}, spinSpeed);