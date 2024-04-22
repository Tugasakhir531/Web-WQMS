const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

const labels = ["merah", "kuning", "hijau", "biru", "abu"];
// suhu
const dataSuhu = {
  labels: labels,
  datasets: [
    {
      label: "Suhu ",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const configSuhu = {
  type: "line",
  data: dataSuhu,
};

// ph
const dataPh = {
  labels: labels,
  datasets: [
    {
      label: "Ph ",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const configPh = {
  type: "line",
  data: dataPh,
};

// Tds
const dataTds = {
  labels: labels,
  datasets: [
    {
      label: "TDS ",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const configTds = {
  type: "line",
  data: dataTds,
};

// Ntu

const dataNtu = {
  labels: labels,
  datasets: [
    {
      label: "Kekeruhan",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const configNtu = {
  type: "line",
  data: dataNtu,
};

const myChartSuhu = new Chart(
  document.getElementById("myChartSuhu"),
  configSuhu
);
const myChartPh = new Chart(document.getElementById("myChartPh"), configPh);
const myChartTds = new Chart(document.getElementById("myChartTds"), configTds);
const myChartNtu = new Chart(document.getElementById("myChartNtu"), configNtu);
