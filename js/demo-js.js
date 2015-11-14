$(document).ready(function(){

var showUp = function(){
	$(".showing-all .item").click(function () {
		$('.selecta').removeClass('showing-all');
		$('.item').addClass('reduce');
		$(this).removeClass('reduce');
		$(this).addClass('expanded medium');
		$('.controllers').addClass('showit');

		$('.content').addClass('hidden');
	});

	$(".expanded").click(function () {
		$('.selecta').addClass('showing-all');
		$('.item').removeClass('reduce');
		$(this).removeClass('expanded');
		$('.controllers').removeClass('showit');

		$('.content').removeClass('hidden');
	});

}

$(".zoomin").click(function () {
	$('.xxlarge').addClass('xxxlarge');
	$('.xxlarge').removeClass('xxlarge');

	$('.xlarge').addClass('xxlarge');
	$('.xlarge').removeClass('xlarge');

	$('.large').addClass('xlarge');
	$('.large').removeClass('large');

	$('.medium').addClass('large');
	$('.medium').removeClass('medium');

	$('.small').addClass('medium');
	$('.small').removeClass('small');

	$('.xsmall').addClass('small');
	$('.xsmall').removeClass('xsmall');
});

$(".zoomout").click(function () {
	$('.small').addClass('xsmall');
	$('.small').removeClass('small');

	$('.medium').addClass('small');
	$('.medium').removeClass('medium');

	$('.large').addClass('medium');
	$('.large').removeClass('large');

	$('.xlarge').addClass('large');
	$('.xlarge').removeClass('xlarge');

	$('.xxlarge').addClass('xlarge');
	$('.xxlarge').removeClass('xxlarge');

	$('.xxxlarge').addClass('xxlarge');
	$('.xxxlarge').removeClass('xxxlarge');

});


setInterval(function() {
	showUp();
}, 500);



});