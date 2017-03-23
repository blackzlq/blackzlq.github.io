	<html>
<title> Data Visualization Homework 1 Liqin Zhang 001746849</title>
  <head>
	  
	
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">

      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
		var years=[1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1996,1998,2000,2002,2004,2006,2008,2010,2012,2014];
		var never_marriage_arr= [11117,10025,9354,8549,7840,7093,6058,5319,4629,4038,3734,3376,2867,2667,2521,2328,2063,1778,1578,1439,1352,1351,1323,1264,1190,1124];
		var married_arr=[1352,1827,2424,3010,3665,4099,3916,4317,4666,5041,5352,5450,4745,4840,4917,4916,4861,4866,4666,4527,4456,4374,4325,4183,3945,3799
		];
		var separated_arr=[130,157,230,276,334,400,375,381,423,498,523,561,483,512,524,514,494,459,483,403,384,403,423,392,384,342
		];
		var divorce_arr=[84,121,171,269,365,455,527,614,740,853,960,1001,880,955,1002,1078,1158,1231,1234,1278,1378,1417,1550,1570,1609,1598
		];
		var widowed_arr=[1,9,16,15,15,21,17,24,27,31,36,47,43,42,47,53,60,65,69,72,89,108,136,153,171,208
		];
		
		
		var x = document.getElementById("myRange").value;
		document.getElementById("slider_var").textContent=years[x];
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['never marriage', never_marriage_arr[x]],
          ['married', married_arr[x]],
		  ['separated', separated_arr[x]],
		  ['divorce', divorce_arr[x]],
		  ['widowed', widowed_arr[x]]
          
        ]);
		
		var str="Marital Status "+String(years[x]);
        // Set chart options
        var options = {'title':str,
                       'width':400,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
		//Combo Chart
		
		
		
		
      }
	  
    </script>
	<script type="text/javascript">
        $(document).ready(function(){
            $('.single-slider').jRange({
                from: -2.0,
                to: 2.0,
                step: 0.5,
                scale: [-2.0,-1.0,0.0,1.0,2.0],
                format: '%s',
                width: 300,
                showLabels: true,
                snap: true
            });
            
        });
		</script>
  </head>

  <body>
	  <div id="chart_div" align="center"></div>
	  <div class="slider" align="center">
            <input type="range" id="myRange" max="25" value="0" onchange="drawChart()">
			<p id="slider_var">1979</p> 
      </div>
  </body>
  </html>
