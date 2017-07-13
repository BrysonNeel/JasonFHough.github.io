$(window).on("load",function() {
  var ctx = document.getElementById("interestsChart");
  var interestsChart = new Chart(ctx, {
    type: 'pie',
    data: {

      labels: ["Unity", "C#", "Java", "HTML, CSS, Bootstrap", "Ruby", "Swift"],

      datasets:
      [
        {
          data: [30, 20, 20, 15, 5, 5],
          backgroundColor: [
            'rgba(0, 0, 0, 1)', //Unity
            'rgba(0, 80, 209, 1)',  //C#
            'rgba(175, 0, 90, 1)',  //Java
            'rgba(0, 150, 2, 1)', //HTML, CSS, Bootstrap
            'rgba(209, 0, 0, 1)', //Ruby
            'rgba(255, 165, 0, 1)'  //Swift
          ],
          borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 80, 209, 1)',
            'rgba(175, 0, 90, 1)',
            'rgba(0, 150, 2, 1)',
            'rgba(209, 0, 0, 1)',
            'rgba(255, 165, 0, 1)'
          ],
          borderWidth: 1
        }
      ],

      options: {
        responsive: true
      }
    }
  });

});
