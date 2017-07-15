$(document).ready(function(){
  var data = {
    labels: ["", "Unity", "C#", "Java", "HTML, CSS, Bootstrap", "Ruby", "Swift"],

    datasets: [{
      data: [0, 30, 20, 25, 15, 5, 5],
      backgroundColor: [
        'rgba(0, 0, 0, 0)', //filler
        'rgba(0, 0, 0, 1)', //Unity
        'rgba(0, 80, 209, 1)',  //C#
        'rgba(175, 0, 90, 1)',  //Java
        'rgba(0, 150, 2, 1)', //HTML, CSS, Bootstrap
        'rgba(209, 0, 0, 1)', //Ruby
        'rgba(255, 165, 0, 1)'  //Swift
      ],
      borderColor: [
        'rgba(0, 0, 0, 0)', //filler
        'rgba(0, 0, 0, 1)',
        'rgba(0, 80, 209, 1)',
        'rgba(175, 0, 90, 1)',
        'rgba(0, 150, 2, 1)',
        'rgba(209, 0, 0, 1)',
        'rgba(255, 165, 0, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
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

          //text.push('<span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
          text.push('<span>');

          if (chart.data.labels[i]) {
            text.push(chart.data.labels[i]);
          }
          text.push('</span>')

        text.push('</li>');
      }
      text.push('</ul>');
      return text.join("");
    }/*,

    tooltips: {
      custom: function(tooltip) {
        //tooltip.x = 0;
        //tooltip.y = 0;
      },
      mode: 'single',
      callbacks: {
        label: function(tooltipItems, data) {
          var sum = data.datasets[0].data.reduce(add, 0);
          function add(a, b) {
            return a + b;
          }

          return parseInt((data.datasets[0].data[tooltipItems.index] / sum * 100), 10) + '%';
        }
      }
    }
    */

  }

  //Constructs the chart
  var ctx = document.getElementById('interestsChart');
  var interestsChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
  });

  //Generates the legend
  $("#pie-legend").html(interestsChart.generateLegend());

});
