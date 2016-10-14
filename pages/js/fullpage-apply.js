$(document).ready(function() {
    fullpage_apply();
    smooth_scroll();
});


$(window).resize(function() {	
	fullpage_apply();
	smooth_scroll();
});



function smooth_scroll() {
	$(".section a.fullpage-nav").each(function() {
		$(this).off('click').click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html,body").animate({scrollTop: destination}, 800);
		return false;
	});
	})
}


var fullpageIsActive = false;

function fullpage_apply() {
	 var fullpageMustBeActive = $('.mobile-nav').is(':hidden');
    
    if (fullpageMustBeActive == fullpageIsActive)
        return;
    
    if (fullpageMustBeActive) {
        $('#fullpage').fullpage({
    	        //Navigation
        		verticalCentered: true,
				autoScrolling: false,
				scrollingSpeed: 700,
				css3:false,
				afterLoad: function(anchorLink, index){

					//section 3
					if(index == 3){

						$('#section3').find('img.arrow').delay(100).queue(function(){

						    $(this).rotate({
						    	duration: 2000,
						    	angle: 0,
						    	animateTo:180  
						  });

						});
						$('#section3').find('.demo-image .image-1').animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
						$('#section3').find('.demo-image .image-2').delay(100).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
						$('#section3').find('.demo-image .image-3').delay(200).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
						$('#section3').find('.demo-image .image-4').delay(300).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
					}


				}
    });

    } else {
        $.fn.fullpage.destroy('all');
        console.log(13)
    }
    
    fullpageIsActive = fullpageMustBeActive;
}
