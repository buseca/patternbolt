$(document).ready(function(){

	// controller del pattern
	$(".tasto").click(function () {
		var newPattern = $(this).attr('id');
		var oldPattern = $('.tasto.active').attr('id');
		$('.tasto.active').removeClass('active');
		$(this).toggleClass("active");
		$('.demo').removeClass('iniziale');
		$('.demo').removeClass('cross-light-thin');
		$('.demo').removeClass(oldPattern);
		$('.demo').addClass(newPattern);
		$('#classe-pb span').html( newPattern );
	});

	// controller della dimensione
	$("#size-pattern").change(function () {
		var pbSize = $(this).val();
		$('.demo').removeClass( function (index, css) { return (css.match(/\bpb-size-\S+/g) || []).join(' '); });
		$('.demo').addClass('pb-size-' + pbSize);
		$('#bg-size-pb').html('background-size: ' + pbSize + 'px ;')
	});

});