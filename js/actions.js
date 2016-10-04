$(function ($) {

	var start = true;
	var questionNumber = $('.pagination-container li');
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

	$('.showPrevious').click(function(e) {
		var previousQuestion = e.currentTarget.parentElement.previousElementSibling.id
		var previousQuestionId = "#" + e.currentTarget.parentElement.previousElementSibling.id;
		$(previousQuestionId).attr("id", previousQuestion).fadeIn(200);
		form.children().not(previousQuestionId).hide(-500);
	})

});



// +var r = 0;
//  +var g = 96;
//  +var b = 112;
//  +
//  +$(document).ready(function ()
//  +{
//  +
//  +    
//  +    var pages = [1, 2, 3,4,5,6,7,8];
//  +
//  +    for (var i = pages.length - 1; i >= 0 ; i--)
//  +    {
//  +
//  +        var builder = buildPage(i, pages);
//  +        if (i == 0)
//  +        {
//  +            builder.addClass("selectedSmall");
//  +        }
//  +
//  +    }
//  +});
//  +
//  +function showNext(div)
//  +{
//  +    $(".accordion").removeClass("selectedSmall", 300);
//  +   
//  +
//  +    
//  +        var a = div.prev().hasClass("selectedSmall", 300);
//  +
//  +        if (!a) // if the current target doesnt have the class add it. if it does do nothing;
//  +        {
//  +            div.prev().addClass("selectedSmall", 300);
//  +           
//  +           
//  +
//  +
//  +        }
//  +
//  +}
//  +function showPrev(div)
//  +{
//  +    $(".accordion").removeClass("selectedSmall", 300);
//  +   
//  +    
//  +
//  +    var a = div.next().hasClass("selectedSmall", 300);
//  +
//  +    if (!a) // if the current target doesnt have the class add it. if it does do nothing;
//  +    {
//  +        div.next().addClass("selectedSmall", 300);
//  +       
//  +        
//  +
//  +
//  +    }
//  +
//  +}
//  +
//  +function buildPage(i, pages)
//  +{
//  +    
//  +    var rbg = "rgb(" + r + ", " + g + ", " + b + ")";
//  +
//  +    var accordionStep = $("<div>").appendTo($(".accordionContainer")).addClass("accordion").html(pages[i]).css("background", rbg).prop("id", "page" + i);
//  +
//  +    // $("<div>").appendTo($(accordionStep)).addClass("fa fa-times-circle-o fa-2x").css({ "left": "49%" });
//  +    if (i < (pages.length -1)) $("<div>").appendTo($(accordionStep)).addClass("fa fa-arrow-circle-o-right fa-3x").click(function (e)
//  +    {
//  +        $(".accordion").removeClass("fa")
//  +        showNext(accordionStep);
//  +    });
//  +    if (i !== 0) $("<div>").appendTo($(accordionStep)).addClass("fa fa-arrow-circle-o-left fa-3x").click(function (e)
//  +    {
//  +
//  +        showPrev(accordionStep);
//  +    });
//  +
//  +    b = b + (pages.length + 12);
//  +    g = g + (pages.length + 43);
//  +    r = r + (pages.length + 65);
//  +    return accordionStep;
//  +} 