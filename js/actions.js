$(function ($) {

	var test = null;


	$( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		// console.log( $( this ).serialize() );
		console.log(formData);

		// test = $( this ).serializeArray();
		// console.log(test);
		// if(test) {
		// 	console.log("worked");
		// 	formLoop(test);
		// }
	});



	var formData = {};

	formData.industry = $('input ').val();
	formData.company_size = $('input .company-size').val();
	formData.users = $('input .users').val();
	// formData.system = $('input').data('system');
	// formData.timframe = $('input').data('timeframe');
	// formData.discount_code = $('input[type=["text"]).val();

})