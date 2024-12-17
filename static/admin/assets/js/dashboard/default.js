// OS Chart
document.addEventListener('DOMContentLoaded', function () {

  var osNames = [];
  var osValues = [];

  osDataPercentages.forEach(function (item) {
      osNames.push(item.name);  // Use the name from the data
      osValues.push(item.percentage);
  });


  var staticColors = [
      '#5d65cf', '#bf3758', '#34a853', '#4285f4', '#fb8c00',
      '#9e9e9e', '#1976D2', '#009688', '#FFC107', '#E91E63',
      '#FF5722', '#673AB7', '#8BC34A', '#03A9F4', '#FFEB3B',
      '#607D8B', '#9C27B0', '#795548', '#CDDC39', '#FF9800',
      '#4CAF50', '#2196F3', '#00BCD4', '#FFEB3B'
  ];

  var osColors = staticColors.slice(0, osNames.length);

  var osChartElement = document.getElementById('osVisitorChart');
  if (!osChartElement) {
      console.error("Chart element not found. Make sure the element ID is correct.");
      return;
  }

  var osCtx = osChartElement.getContext('2d');
  if (!osCtx) {
      console.error("Unable to get chart context. Make sure the element ID is correct.");
      return;
  }

  var osChart = new Chart(osCtx, {
      type: 'doughnut',
      data: {
          labels: osNames,
          datasets: [{
              data: osValues,
              backgroundColor: osColors,
              hoverBackgroundColor: osColors,
              hoverOffset: 8
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  callbacks: {
                      label: function (context) {
                          var label = context.label || '';
                          var value = context.raw || 0;
                          return label + '\n' + value + '%';
                      }
                  }
              }
          }
      }
  });
});


// Browser Chart
document.addEventListener('DOMContentLoaded', function () {

  var browserNames = [];
  var browserValues = [];

  browserDataPercentages.forEach(function (item) {
      browserNames.push(item.name);
      browserValues.push(item.percentage);
  });

  var staticColors = [
      '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
      '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
      '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
      '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5',
      '#1f78b4', '#ff7f0f', '#33a02c', '#d62a29', '#9468bd',
      '#8d574b', '#e277c3', '#7e7e7e', '#bdbe22', '#18becf',
      '#afc7e8', '#ffbc79', '#99df8b', '#ff9997', '#c6b1d5',
      '#c59c95', '#f6b6d3', '#c8c8c8', '#dcdb8e', '#9fdae6',
  ];

  var browserColors = staticColors.slice(0, browserNames.length);

  var browserChartElement = document.getElementById('browserVisitorChart');
  if (!browserChartElement) {
      console.error("Chart element not found. Make sure the element ID is correct.");
      return;
  }

  var browserCtx = browserChartElement.getContext('2d');
  if (!browserCtx) {
      console.error("Unable to get chart context. Make sure the element ID is correct.");
      return;
  }

  var browserChart = new Chart(browserCtx, {
      type: 'doughnut',
      data: {
          labels: browserNames,
          datasets: [{
              data: browserValues,
              backgroundColor: browserColors,
              hoverBackgroundColor: browserColors,
              hoverOffset: 8
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              },
              tooltip: {
                  callbacks: {
                      label: function (context) {
                          var label = context.label || '';
                          var value = context.raw || 0;
                          return label + '\n' + value + '%';
                      }
                  }
              }
          }
      }
  });
});


// Revenue Chart
var ctx = document.getElementById('revenueVsExpenseChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Revenue', 'Expense'],
        datasets: [{
            data: [totalRevenue, totalExpense],
            backgroundColor: [
                TivoAdminConfig.primary, // Background color for revenue
                'rgba(255, 99, 132, 0.8)' // Background color for expense
            ],
            borderColor: '#dfdfdfbf', // Border color
            borderWidth: 2, // Border width
            hoverBackgroundColor: [
                '#5d65cf', // Hover background color for revenue
                '#bf3758' // Hover background color for expense
            ],
            hoverOffset: 8 // Increase the offset on hover for a unique effect
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        var label = context.label || '';
                        var value = context.raw || 0;
                        var formattedValue = currencySymbol + value.toLocaleString();
                        return label + ': ' + formattedValue;
                    }
                }
            }
        }
    }
});

// Profit Chart
var ctx = document.getElementById('profitStatusChart').getContext('2d');
var profit = totalRevenue - totalExpense;

var maxProfit = Math.max(totalRevenue, totalExpense);
maxProfit = Math.ceil(maxProfit / 2) * 2;

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Revenue', 'Expense'],
    datasets: [
      {
        label: 'Profit',
        data: [totalRevenue, totalExpense],
        backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background
        borderColor: profit >= 0 ? '#00C853' : '#FF1744', // Green if profit is positive, red if negative
        borderWidth: 2,
        pointBackgroundColor: profit >= 0 ? '#00C853' : '#FF1744', // Point color matching the line color
        pointRadius: 4,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        fill: false,
        stepped: true, // Use stepped line chart
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
              var label = context.label || '';
              var value = context.raw || 0;
              var formattedValue = currencySymbol + value.toLocaleString();
              return label + ': ' + formattedValue;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Define the maximum value and steps of your Y axis here
          max: maxProfit,
          min: 0,
          stepSize: maxProfit > 2 ? maxProfit / 2 : 1,
          callback: function (value, index, values) {
            return currencySymbol + value.toLocaleString();
          },
        },
      },
    },
  },
});


// Invoice Status Chart
var ctx = document.getElementById('invoiceStatusChart').getContext('2d');

var maxInvoice = Math.max(paidInvoice, unpaidInvoice);
maxInvoice = Math.ceil(maxInvoice / 2) * 2;

var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Invoices'],
        datasets: [{
            label: 'Paid',
            data: [paidInvoice],
            backgroundColor: 'rgba(60, 179, 113, 0.5)', // Medium sea green color for paid
            borderColor: 'rgba(60, 179, 113, 1)', // Solid medium sea green color for border
            borderWidth: 2 // Border width
        },
        {
            label: 'Unpaid',
            data: [unpaidInvoice],
            backgroundColor: 'rgba(255, 127, 80, 0.5)', // Coral color for unpaid
            borderColor: 'rgba(255, 127, 80, 1)', // Solid coral color for border
            borderWidth: 2 // Border width
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    // Define the maximum value and steps of your Y axis here
                    max: maxInvoice,
                    min: 0,
                    stepSize: maxInvoice > 2 ? maxInvoice / 2 : 1
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                onClick: function(e, legendItem) {
                    var index = legendItem.datasetIndex;
                    var ci = this.chart;
                    var alreadyHidden = (ci.getDatasetMeta(index).hidden === null) ? false : ci.getDatasetMeta(index).hidden;

                    ci.data.datasets.forEach(function(e, i) {
                        var meta = ci.getDatasetMeta(i);

                        if (i !== index) {
                            if (!alreadyHidden) {
                                meta.hidden = meta.hidden === null ? !meta.hidden : null;
                            } else if (meta.hidden === null) {
                                meta.hidden = true;
                            }
                        } else if (i === index) {
                            meta.hidden = null;
                        }
                    });

                    ci.update();
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        var label = context.dataset.label || '';
                        var value = context.parsed.y || 0;
                        return label + ': ' + value.toLocaleString();
                    }
                }
            }
        }
    }
});

// Task Chart
var ctx = document.getElementById('taskStatusChart').getContext('2d');
ctx.canvas.width = 200; // Set the desired width
ctx.canvas.height = 200; // Set the desired height
var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['To Do', 'In Progress', 'Done'],
    datasets: [
      {
        data: [toDoCount, inProgressCount, doneCount],
        backgroundColor: [
          '#FF3B30', // Background color for 'To Do'
          '#FFCC00', // Background color for 'In Progress'
          '#007AFF' // Background color for 'Done'
        ],
        borderColor: '#dfdfdfbf', // Border color
        borderWidth: 2, // Border width
        hoverBackgroundColor: [
          '#BF372D', // Hover background color for 'To Do'
          '#FFB900', // Hover background color for 'In Progress'
          '#005AE0' // Hover background color for 'Done'
        ],
        hoverOffset: 8 // Increase the offset on hover for a unique effect
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.label || '';
            var value = context.raw || 0;
            return label + ': ' + value.toLocaleString();
          }
        }
      }
    }
  }
});


