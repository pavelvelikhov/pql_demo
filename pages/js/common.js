$(document).ready(function(){
    ie_version();    
    tabs();
    active_row_item();
    change_code_theme();    
    splitColumns();
    nav_flyout();
});

$(window).resize(function() {	
	splitColumns();
	nav_flyout();
});


// IE Version
function ie_version() {
     navigator.userAgent.toLowerCase().match(/(ie\s|trident.*rv:)([\d]+)/gi) ? document.getElementsByTagName('html')[0].className += ' ' + navigator.userAgent.toLowerCase().match(/(ie\s|trident.*rv:)([\d]+)/i)[0].replace(/trident/i, 'ie').replace(/\b(?!(?:ie))\b.*rv:/i, '').replace(/\s/, '') : null;
}


/* nav flyout */ 
function nav_flyout() {

	var flyout_menu = $('.header .main-nav ul');
	var flyout_menu_mobile_button = $('.header .main-nav .mobile-nav');
    
	// toggle menu when clicking on it's main mobile button
	flyout_menu_mobile_button.off('click').on('click', function() {
		flyout_menu.toggle();
		return false;
	});
    
    if (flyout_menu_mobile_button.is(':visible')) { // mobile mode:
        
        flyout_menu.hide();
        
        // when clicking on menu items, hide menu 
        flyout_menu.children().find('a').off('click').on('click', function() {
            if (!flyout_menu.is(':visible')) {
                flyout_menu.show();
            } else {
                flyout_menu.hide();
            }
        });
        
        // when clicking outside menu, hide it if it was opened 
        $(document).off('click').click(function(e) {
            if (!$(e.target).closest(flyout_menu).filter(flyout_menu).is(':visible')) {			
                flyout_menu.hide();			
            }
        });
        
    } else { // big screen mode
    
         flyout_menu.show();	
        
         // when clicking on menu items, don't hide menu (remove old handlers)
         flyout_menu.children().find('a').off('click'); 
         

         // when clicking outside menu, don't hide menu (remove old handlers)
         $(document).off('click');         
    }
}


// active row
function active_row_item() {

    $('.training-section .inner-content').each(function(){

        $(this).find('.inner-row').on('click', function() {
            $(this).parent().find('.inner-row').removeClass('m-current');
            $(this).addClass('m-current');
        });
      
    });

}


/* tabs */
function tabs() {	

	var tab = $('.training-section .tab');
	var tab_body = $('.training-section .tab-body');	
	var playCode = $('.training-section .play');	

	tab.eq(0).addClass('m-active');
	tab_body.hide();
	tab_body.eq(0).show();

	/* tab onclick */ 
	tab.on('click', function() {		
		if (!$(this).hasClass('m-active')) {
			tab.removeClass('m-active');
			$(this).addClass('m-active');		
			tab_body.hide().eq($(this).index()).show();
		}
	})	

	// code play
	playCode.on('click', function() {	
		tab.eq(1).trigger( "click" );
	})

}


// change code  theme
function change_code_theme() {

	var toggleBtn = $('.training-section .toggle-btn');
	var codeHolder= $('.training-section pre.prettyprint');	

	toggleBtn.on('click', function() {		

		if (!$(this).hasClass('m-active')) {

			if (!$(this).hasClass('m-black')) {				
				codeHolder.addClass('light');	
				$('.play img').attr('src','img/icon/play-icon-white.png');						
			} else {
				codeHolder.removeClass('light');	
				$('.play img').attr('src','img/icon/play-icon.png');				
			}

			toggleBtn.removeClass('m-active');
			$(this).addClass('m-active');	
			
		} 
	})	

}

var splitPluginIsActive = false;


// split columns
function splitColumns() {
    
    var splitPluginMustBeActive = $('#less800PxIndicator').is(':hidden');
    
    if (splitPluginMustBeActive == splitPluginIsActive)
        return;
    
    if (splitPluginMustBeActive) {
        Split(['#one', '#two', '#three'], {    
        	minSize: [200, 200, 200]	
            });


    } else {
        $('.gutter').remove();
        $('#one,#two,#three').removeAttr('style');        
    }
    
    splitPluginIsActive = splitPluginMustBeActive;

}




