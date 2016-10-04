$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container li');
	var form = $(form);

	var pageLoad = function() {
		if (start === true) {
			$("#industry").show();
			$(".start").css('background', '#004F8C').css('color', '#ffffff');
		}
	}
	pageLoad();

	questionNumber.on( 'click', function() {
		start = false;

		questionNumber.not(this).css('background', '#ffffff').css('color', '#004F8C');
		$(this).css('background', '#004F8C').css('color', '#ffffff');
		
		var filterValue = $(this).data('filter');
		var filterId = '#' + filterValue;
		var currentFilter = $(filterId).attr("id", filterValue).fadeIn(200);
		
		form.children().not("#" + currentFilter[0].id).hide(-500);

	});

});