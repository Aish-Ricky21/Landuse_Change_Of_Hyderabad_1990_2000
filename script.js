const data = [
  { "CLASS NAME": "AGRICULTURAL DRY LAND", "LOSS": 143.964, "GAIN": 49.2471, "CHANGE": -2.838750573, "UNCHANGED": 33.3657 },
  { "CLASS NAME": "HIGH DENCITY URBAN", "LOSS": 143.6256, "GAIN": 182.8368, "CHANGE": 0.37820101, "UNCHANGED": 103.6782 },
  { "CLASS NAME": "LOW DENCITY URBAN", "LOSS": 163.3032, "GAIN": 195.0831, "CHANGE": 0.415809988, "UNCHANGED": 76.4289 },
  { "CLASS NAME": "SHRUB", "LOSS": 82.8792, "GAIN": 85.1499, "CHANGE": 0.11173605, "UNCHANGED": 20.322 },
  { "CLASS NAME": "VEGETATION", "LOSS": 60.084, "GAIN": 85.1499, "CHANGE": 1.024084424, "UNCHANGED": 24.4764 },
  { "CLASS NAME": "WATER BODIES", "LOSS": 11.0313, "GAIN": 10.467, "CHANGE": -0.067695962, "UNCHANGED": 8.3358 }
];

// Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGE.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial pie chart
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  