/* 
Author: Denis Kabistan
Website: http://www.parasolinteractive.com
*/
$(document).ready(function(){

	function fadeNav(){
    	$("div#logoImg").fadeIn('slow');
    }
    setTimeout(fadeNav,1000);
    $("pre.htmlCode").snippet("html");
    $("pre.styles").snippet("css",{style:"whitengrey",showNum:false});
    $("pre.js").snippet("javascript",{style:"random",transparent:true,showNum:false});
/*
    $(function(){
      var input = $('').val();
      alert(input);
    });
*/
  // Text Input Clears
  /*$(function(){
    var input = $('input[type="text"]').val();
    input.focus(function(){
      $(this).val("Hello");
    }).blur(function(){
      $(this).val(input);
    });
  });*/
});    

// DATA-COLUMNS by Rolando Murillo (@rnmp)
// and Giorgio Leveroni (@ppold)

var grids = document.querySelectorAll('[data-columns]');
Array.prototype.forEach.call(grids, function(grid) {
    var columns     = grid.dataset.columns,
        columnClass = '_col',
        itemClass   = '_item',
        elements    = [];
    
    for (var i = columns - 1; i >= 0; --i) {
        elements.push(grid.querySelectorAll('.'+itemClass+':nth-child('+columns+'n-'+i+')'));
    }
    
    elements.forEach(function(columnElements) {
        var column = document.createElement('div');
        column.classList.add(columnClass);
        
        Array.prototype.forEach.call(columnElements, function(element) {
            column.appendChild(element);
        });
        
        grid.appendChild(column);
    });
});