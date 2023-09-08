const ctx = document.getElementById('myChart');
const ctv = document.getElementById('myGraph');

// Generate labels for the past 7 months
const today = new Date();
const labels = Array.from({ length: 7 }, (_, index) => {
  const month = new Date(today.getFullYear(), today.getMonth() - index, 1);
  return month.toLocaleString('default', { month: 'short' });
});
// chart
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
  }
});

//graph
new Chart(ctv, {
    type: 'line',
    data: {
        labels: labels.reverse(),
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]}
  });
