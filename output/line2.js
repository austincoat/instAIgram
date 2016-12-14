google.load('visualization', '1', {'packages':['corechart']});
$(document).ready(function() { $("#btn").click(function() {$("#chart_div").load("", function(){var data = google.visualization.arrayToDataTable([['Time', 'Ping'],['',134],['',14],['',14],['',20],['',15],['',130],['',14],['',34],['',188],['',18],['',169],['',27],['',222],['',25],['',27],['',559],['',23],['',26],['',116],['',23],['',149],['',23],['',281],['',24],['',111],]);var options = {

          title: 'Network Performance',

          curveType: 'function',

          legend: { position: 'bottom' }

        };


        
      

var chart = new google.visualization.LineChart(document.getElementById('chart_div'));chart.draw(data, options);});});});
    