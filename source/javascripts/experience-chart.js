$(document).ready(function(){
  var data = {
    labels: ["", "Unity with C#", "Java", "Web Development", "Ruby", "Swift"],

    datasets: [{
      data: [0, 35, 30, 20, 5, 10],
      /*backgroundColor: [
        'rgba(0, 0, 0, 0)', //filler
        'rgba(0, 0, 0, 1)', //Unity, C#
        'rgba(175, 0, 90, 1)',  //Java
        'rgba(0, 150, 2, 1)', //Web Dev
        'rgba(209, 0, 0, 1)', //Ruby
        'rgba(255, 165, 0, 1)'  //Swift
      ],
      borderColor: [
        'rgba(0, 0, 0, 0)', //filler
        'rgba(0, 0, 0, 1)',
        'rgba(175, 0, 90, 1)',
        'rgba(0, 150, 2, 1)',
        'rgba(209, 0, 0, 1)',
        'rgba(255, 165, 0, 1)'
      ],*/

      backgroundColor: [
        'rgba(0, 0, 0, 0)', //filler
        'rgba(20, 20, 20, 1)', //Unity, C#
        'rgba(70, 70, 70, 1)',  //Java
        'rgba(132, 132, 132, 1)', //Web Dev
        'rgba(163, 163, 163, 1)', //Ruby
        'rgba(193, 193, 193, 1)'  //Swift
      ],
      borderColor: [
        'rgba(0, 0, 0, 0)', //filler
        'rgba(234, 234, 234, 1)',
        'rgba(234, 234, 234, 1)',
        'rgba(234, 234, 234, 1)',
        'rgba(234, 234, 234, 1)',
        'rgba(234, 234, 234, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {

    deferred: {           // enabled by default
        xOffset: 150,     // defer until 150px of the canvas width are inside the viewport
        yOffset: '40%',   // defer until 50% of the canvas height are inside the viewport
        delay: 500        // delay of 500 ms after the canvas is considered inside the viewport
    },

    animation: {
      duration: 1750
    },

    legend: {
      display: false
    },

    //Creates the unique legend
    legendCallback: function(chart) {
      var text = [];
      text.push('<ul class="' + chart.id + '-legend>');
      for (var i=0; i<chart.data.datasets[0].data.length; i++) {
        text.push('<li>');
          text.push('<div id="listRectangle' + i + '">');
          text.push('</div>');

          //Dynamically sets the boxes' background color based on the element in the pie's background color
          jss.set ('#listRectangle' + i, {
            'width': '40px',
            'height': '15px',
            'display': 'inline-block',
            'margin-right': '10px',
            'background': chart.data.datasets[0].backgroundColor[i]
          });

          text.push('<span>');

          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i]);
          }
          text.push('</span>')

        text.push('</li>');
      }
      text.push('</ul>');
      return text.join("");
    },

    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function(tooltipItems, data) {
          return  data.labels[tooltipItems.index] + ': ' + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] + '%';
        }
      }
    }

  }

  //Constructs the chart
  var ctx = document.getElementById('experienceChart');
  var experienceChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
  });

  //Generates the legend
  $("#pie-legend").html(experienceChart.generateLegend());



});
