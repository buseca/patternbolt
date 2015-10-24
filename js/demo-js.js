$(document).ready(function(){



	$(".item").click(function () {
		$('.overlay').addClass('go');
	});

	$(".back").click(function () {
		$('.overlay').removeClass('go');
	});





	$(".item").click(function () {
		$('.selecta').removeClass('showing-all');
		$('.item').addClass('reduce');
		$(this).removeClass('reduce');
		$(this).addClass('expand');
	});










	// cambio sfondo all'hover del tasto
		$('.git').hover(function(){
		  $('.demo').addClass('over');
		  }, function(){
		  $('.demo').removeClass('over');
		  }
		);


	// controller del pattern
	$(".tasto").click(function () {
		var newPattern = $(this).attr('id');
		var oldPattern = $('.tasto.active').attr('id');
		$('.tasto.active').removeClass('active');
		$(this).toggleClass("active");
		// $('.demo').removeClass('iniziale');
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
		$('#bg-size-pb').html('.ted:after { background-size: ' + pbSize + 'px ;}')
	});

	// controller del colore
	$("#color-pattern").change(function () {
		var pbColor = $(this).val();
		$('.demo').css('background-color',pbColor)
		$('#bg-color-pb').html('.ted { background-color: ' + pbColor + ' ;}')
	});


	// showcase
	$('.showcase .pb-pattern').hover(function(){
	  $(this).addClass('active');
	  }, function(){
	  $(this).removeClass('active');
	  }
	);

});