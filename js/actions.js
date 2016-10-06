$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container button');
	var form = $('form');

	$(".showNext").prop("disabled", true).css('opacity', '.5');
	$(".pagination-container button").prop("disabled", true).css('opacity', '.5');//set all buttons to disabled on page load

	var pageLoad = function() {
		if (start === true) {
			$("#industry").show();
			$('.start').addClass('blue').prop('disabled', false).css('opacity', '1');
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

		form.children().not(filterId).hide(-500);

	});



	$("input:radio").change(function (e) { 
		$(this).parent('label').siblings('.showNext').prop('disabled', false).css('opacity', '1');
		
		var numberFilter = $(this).parent('label').parent().data('number');
		var inputClass = $(this)[0].className;
		var allButtons = $(this).parents().find('.pagination-container').children('button').eq(numberFilter - 1);

		allButtons.each(function(index, element) {
			$(this).next().prop('disabled', false).css('opacity', '1');

		});
	});
	$("input:checkbox").click(function (e) { 
		var opacity;
		var buttonState = $('input:checkbox:checked').length;//returns boolean. If there is a length it is true


		if (buttonState) {
			opacity = '1';			
		}
		else {opacity = '.5'}
			
			$(this).parent('label').siblings('.showNext').prop('disabled', !$('input:checkbox:checked').length).css('opacity', opacity);

		var numberFilter = $(this).parent('label').parent().data('number');
		var allButtons = $(this).parents().find('.pagination-container').children('button').eq(numberFilter - 1);
		
		allButtons.each(function(index, element) {
			$(this).next().prop('disabled', !$('input:checkbox:checked')).css('opacity', opacity);

		});

	});

	$('.showPrevious').click(function(e) {
		var previousQuestion = $(this).parent('.input-seperator').prev().fadeIn(500);
		
		form.children().not(previousQuestion).fadeOut(-500);
		questionNumber.removeClass('blue');
		$('.pagination-container button[data-filter=' + previousQuestion[0].id + ']').addClass('blue');
	});

	$('.showNext').click(function(e) {
		var nextQuestion = $(this).parent('.input-seperator').next().fadeIn(500);
		console.log(nextQuestion);
		
		form.children().not(nextQuestion).fadeOut(-500);
		questionNumber.removeClass('blue');
		$('.pagination-container button[data-filter=' + nextQuestion[0].id + ']').addClass('blue');

	});

});
