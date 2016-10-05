$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container button');
	var form = $('form');

	var pageLoad = function() {
		if (start === true) {
			$("#industry").show();
			$('.start').addClass('blue');
		}
	}
	pageLoad();

	questionNumber.on( 'click', function() {
		start = false;

		questionNumber.not(this).removeClass('blue');
		$(this).addClass('blue');
		
		var filterValue = $(this).data('filter');
		var filterId = '#' + filterValue;
		var currentFilter = $(filterId).attr("id", filterValue).fadeIn(200);
		var currentFilterId = "#" + currentFilter[0].id;

		form.children().not(currentFilterId).hide(-500);

	});
	var buttonState = function() {

	}
	$(".showNext").prop("disabled", true).css('opacity', '.5');

	$("input:radio").change(function (e) { 
		$(this).parent('label').siblings('.showNext').prop('disabled', false).css('opacity', '1');

	});
	$("input:checkbox").click(function (e) { 
		var opacity;
		var buttonState = $('input:checkbox:checked').length;

		if (buttonState) {
			opacity = '1';			
		}
		else {opacity = '.5'}
			$(this).parent('label').siblings('.showNext').prop('disabled', !$('input:checkbox:checked').length).css('opacity', opacity);

	});

	$('.showPrevious').click(function(e) {
		var previousQuestion = e.currentTarget.parentElement.previousElementSibling.id;
		var previousQuestionId = "#" + e.currentTarget.parentElement.previousElementSibling.id;
		
		$(previousQuestionId).attr("id", previousQuestion).fadeIn(200);
		form.children().not(previousQuestionId).hide(-500);

		questionNumber.removeClass('blue');
		$('.pagination-container button[data-filter=' + previousQuestion + ']').addClass('blue');
	});

	$('.showNext').click(function(e) {
		var nextQuestion = e.currentTarget.parentElement.nextElementSibling.id;
		var nextQuestionId = "#" + e.currentTarget.parentElement.nextElementSibling.id;
		
		$(nextQuestionId).attr("id", nextQuestion).fadeIn(200);
		form.children().not(nextQuestionId).hide(-500);

		questionNumber.removeClass('blue');
		$('.pagination-container button[data-filter=' + nextQuestion + ']').addClass('blue');

	});

});


