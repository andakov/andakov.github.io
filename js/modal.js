// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() { 

	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
    	$('header .container').css('filter','blur(5px)');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	$('header .container').css('filter','none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
			$('header .container').css('filter','none');
  
		
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		$('header .container').css('filter','blur(5px)');
		if($('.firstwindow').hasClass('disabled')) {
			return false;
		} else {
			
			$(".firstwindow").fadeIn();
		}
	}, 1000);
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.firstwindow').fadeOut();
	$('header .container').css('filter','none');
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.first-window');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.firstwindow').fadeOut();
			$('header .container').css('filter','none');
	}
});

