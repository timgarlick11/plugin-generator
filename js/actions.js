$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container li');

	var pageLoad = function() {
		if (start === true) {
			$("#industry").show();
			$(".start").css('background', '#004F8C').css('color', '#ffffff');
		}
	}
	pageLoad();

	questionNumber.on( 'click', function() {
		// var filterValue = $( this ).attr('data-filter');
		start = false;

		questionNumber.not(this).css('background', '#ffffff').css('color', '#004F8C');
		$(this).css('background', '#004F8C').css('color', '#ffffff');
		var filterValue = $(this).data('filter');
		var filterId = '#' + filterValue;
		console.log(filterId);
		var test1 = $(filterId).attr("id", filterValue).fadeIn(300);
		console.log(test1);

		// $('#' + filterValue).fadeIn(1000);

	});

	var filter = function(filterValue) {
		questionNumber.not(this)

	}

})