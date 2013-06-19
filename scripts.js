$(document).ready(function($) {


	$("form").submit(function)(event){
		// alert("form submitted");
		event.preventDefault();
		var Noun =$ ("#Mary had a little lamb").val();
		var Verb =$ ("#whose fleece was ").val();
		var phone number =$ ("#phone number").val();
		var email address =$ ("#email address").val();
		var arrival date  =$ ("#arrival date").val();
		var length of stay  =$ ("#length of stay").val();

		$("#Noun val").text("Mary: "+ little lamb );
		$("#last name val").text("Last name: "+ last name);
		$("#phone number val").text("Phone number: "+ phone number );
		$("#email address val").text("Email address: "+ email address );
		$("#arrival date val").text("Arrival date: "+ arrival date );
		$("#length of stay val").text("Length of stay: "+ length of stay );
		


		$(this).hide();
		
	};
});


j