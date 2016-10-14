$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container button');
	var form = $('form');
	var checkboxChecked = 0;
	var detached;

	$(".showNext, .showFirst").prop("disabled", true).css('opacity', '.5');
	$(".pagination-container button").prop("disabled", true).css('opacity', '.5');//set all buttons to disabled on page load

	var pageLoad = function() {
		if (start === true) {
			$("#industry").show();
			$('.start').addClass('highlight').prop('disabled', false).css('opacity', '1');
		}
	}
	pageLoad();

	
	$('.showFirst').click(function(e) {
		console.log(e);
		var industry = $('input[name=industry]:checked', 'form').val(); 
		var industryId = '#' + industry;
		console.log(industryId);
		var filters = $(industryId).attr("id", industry).children('.input-seperator');
		var filtersData = filters.data('number');
		var showFilter = filters.eq(filtersData -1).fadeIn(200);

		detached = form.children().not(industryId).remove();

	});
	$('.showNext').click(function(e) {
		var numberFilter = $(this).parent().data('number');
		
		
		questionNumber.removeClass('highlight');
		questionNumber.eq(numberFilter).each(function(index, element) {
			$(this).next().prop('disabled', false).css('opacity', '1').addClass('highlight');

		});
		$(this).parent().next().fadeIn(500);
		$(this).parent().fadeOut(-500);


	});

	$('.showPrev').click(function(e) {
		var numberFilter = $(this).parent().data('number');
		console.log(numberFilter)
		if ((numberFilter - 1) === 0) {
			location.reload();

		} else {
			questionNumber.removeClass('highlight');
			questionNumber.eq(numberFilter).each(function(index, element) {
				$(this).prev().addClass('highlight');

			});
			$(this).parent().prev().fadeIn(500);
			$(this).parent().fadeOut(-500);
		}
		

	});

	$("input:radio").change(function (e) { 
		$(this).parent('label').siblings('.showNext').prop('disabled', false).css('opacity', '1');
	});
	$("#revenue-recommendation input:checkbox").click(function (e) { 
		console.log(1)
		var opacity;
		var buttonState = $('#revenue-recommendation input:checkbox:checked').length;

		if (buttonState > 0) {
			opacity = '1';			
		}
		else {
			opacity = '.5'; 
		}

		$(this).parent('label').siblings('.showNext').prop('disabled', !$('input:checkbox:checked').length).css('opacity', opacity);
	});

	$("#plugin-recommendation input:checkbox").click(function (e) { 
		console.log(1)
		var opacity;
		var buttonState = $('#plugin-recommendation input:checkbox:checked').length;

		if (buttonState > 0) {
			opacity = '1';			
		}
		else {
			opacity = '.5'; 
		}

		$(this).parent('label').siblings('.showNext').prop('disabled', !$('input:checkbox:checked').length).css('opacity', opacity);
	});







	var formProgress = function() {
		var validInputNum = 0;
		$("form input[required").each(function(index, element) {
			console.log(this.validity.valid);
			if (this.validity.valid) {
				validInputNum++;
			}



		});
		var checkboxLength = $(".checked").length // work around since required on checkboxes have a lot of issues
		var formLength = $("form input[required").length;
		var progress = Math.round((validInputNum + checkboxChecked) /(formLength + checkboxLength) * 100);
		
		var test = $('.progress-bar').css('width', progress + '%');
	}

	$('form').on('submit', function(e) {

		e.preventDefault();

		console.log($(this).serializeArray());
	})

});
