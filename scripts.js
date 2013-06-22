
$(document).ready(function(){
  $("form").submit(function(event){
	event.preventDefault();

  	var adverb = $("#adv").val()
	var adjective = $("#adj").val()
	var noun = $("#noun").val()
	var verb = $("#verb").val()
	var pronoun = $("pronoun").val()
	
	$("form").hide()
	$("h1").text("How to find Mary's lamb");
	$("#story").text("Mary had a little lamb "+pronoun+". whose fleece was white as snow "+adverb+". and every where Mary went  "+adjective+". it was sure to go "+verb+". it followed Mary ");
    
  });
});