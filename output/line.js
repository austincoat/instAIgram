google.load('visualization', '1', {'packages':['corechart']});

$(document).ready(function() {    
$("#btn").click(function() {
$("#chart_div").load("", function(){


var data = google.visualization.arrayToDataTable([['Time', 'Device 1'],['',72],['',21],['',36],['',177],['',20],['',14],['',21],['',13],['',22],['',15],['',22],['',15],['',21],['',15],['',20],['',15],['',19],['',14],['',22],['',14],['',20],['',13],['',16],['',20],['',13],]);

var options = {

          title: 'Network Performance',

          curveType: 'function',

          legend: { position: 'bottom' }

        };


var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(data, options);
});
});
});


