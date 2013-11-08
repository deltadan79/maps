// ==UserScript==
// @name        TerritoryHelper Print Template
// @namespace   thelper_print
// @description modify the html on the page before printing
// @include     http://www.territoryhelper.com/Print/Territory/865
// @version     1
// ==/UserScript==


	
window.onload = function() {
    var specialinstructions = prompt('Any Special Instructions?', '');
   
    document.getElementById('note').innerHTML = '<p style="float:left;text-align:left;padding:5px 25px;">'+specialinstructions+'</p>'+'<style> html, body {background-color:#ffffff;} #ctn {width:975px !important;} #map_canvas {height:600px;width:975px !important;} #print_info {height:88px !important;background:#3F8CFF !important;} #print_info #title {font-size:25px;color:#ffffff;} #info {display:none;} #note {width:500px !important;float:right;text-align:right;} </style><img style="" src="http://delta.terrimaps.com/qrcode_deltamaps.jpg" alt="delta.terrimaps.com"  />';
    
    window.setTimeout(function() {
    document.getElementById("print").click();
    }, 2500);
     
    };
 
 
