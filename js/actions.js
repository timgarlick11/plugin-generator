$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container button');
	var form = $('form');
	var checkboxChecked = 0;

	$(".showNext, .showFirst").prop("disabled", true).css('opacity', '.5');
	$(".pagination-container button").prop("disabled", true).css('opacity', '.5');//set all buttons to disabled on page load

	var pageLoad = function() {
		if (start === true) {
			$("#industry").show();
			$('.start').addClass('highlight').prop('disabled', false).css('opacity', '1');
		}
	}
	pageLoad();


	// questionNumber.on( 'click', function() {
	// 	start = false;

	// 	questionNumber.not(this).removeClass('blue');
	// 	$(this).addClass('blue');
		
	// 	var filterValue = $(this).data('filter');
	// 	var filterId = '#' + filterValue;
	// 	var currentFilter = $(filterId).attr("id", filterValue).fadeIn(200);

	// 	form.children().not(filterId).hide(-500);

	// });
	$('.showFirst').click(function(e) {
		console.log(e);
		var industry = $('input[name=industry]:checked', 'form').val(); 
		var industryId = '#' + industry;
		console.log(industryId);
		var filters = $(industryId).attr("id", industry).children('.input-seperator');
		var filtersData = filters.data('number');
		var showFilter = filters.eq(filtersData).fadeIn(200);

		console.log(form.children().not(industryId).detach())

	});
	$('.showNext').click(function(e) {

		$(this).parent().next().fadeIn(500);
		$(this).parent().fadeOut(-500);



	});

	$('.showPrev').click(function(e) {
		
		$(this).parent().prev().fadeIn(500);
		$(this).parent().fadeOut(-500);

	});




	$("input:radio").change(function (e) { 
		$(this).parent('label').siblings('.showNext').prop('disabled', false).css('opacity', '1');
		
		var numberFilter = $(this).parent('label').parent().data('number');
		var inputClass = $(this)[0].className;
		var allButtons = $(this).parents().find('.pagination-container').children('button').eq(numberFilter - 1);
		console.log(allButtons);

		allButtons.each(function(index, element) {
			$(this).next().prop('disabled', false).css('opacity', '1');

		});
	});
	$("input:checkbox").click(function (e) { 
		var opacity;
		var buttonState = $('input:checkbox:checked').length;
		console.log(buttonState)


		if (buttonState > 0) {
			opacity = '1';
			checkboxChecked++;			
		}
		else {
			opacity = '.5'; 
			checkboxChecked--;
		}

		$(this).parent('label').siblings('.showNext').prop('disabled', !$('input:checkbox:checked').length).css('opacity', opacity);

		// var numberFilter = $(this).parent('label').parent().data('number');
		// var allButtons = $(this).parents().find('.pagination-container').children('button').eq(numberFilter - 1);
		
		// allButtons.each(function(index, element) {
		// 	$(this).next().prop('disabled', !$('input:checkbox:checked').length).css('opacity', opacity);

		// });

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
		alert('pee');
		e.preventDefault();

		console.log($(this).serializeArray());
	})

});
