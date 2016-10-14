var non_delete_queries_holder=false;
$(document).ready(function(){
    ie_version();    
    tabs();
    active_row_item();
    nav_flyout();
    scenarios_navigation();
    load_state_main_page();
    click_queries();
});

$(window).resize(function() {	
	nav_flyout();
});


function click_queries() {
    $(document).on('click','.main .training-section .inner-content .queries-holder p',function () {
        if(!$('.main .training-section .inner-content .queries-holder[style=\'display: block;\'] p').eq($(this).index()-1).hasClass('m-active')) {
            sessionStorage.removeItem('tab_code_i');
        }
        $('.main .training-section .inner-content .queries-holder p.m-active').removeClass('m-active');
        $(this).addClass('m-active');
        sessionStorage.setItem('queries_holder_i',$(this).index());

        // return false;
    })
}
function load_state_main_page() {
    if($('#is_main_page').length) {
        var row_i = sessionStorage.getItem('row_i');
        if (row_i) {
            non_delete_queries_holder=true;
            var tab_i = sessionStorage.getItem('tab_i');
            $('.row-' + row_i).click();
            non_delete_queries_holder=false;
            if (tab_i) {
                $('.training-section .tab.tab-' + tab_i).click();
                var queries_holder=sessionStorage.getItem('queries_holder_i');
                if(queries_holder){
                    $('.main .training-section .inner-content .queries-holder[style=\'display: block;\'] p').eq(queries_holder-1).addClass('m-active');
                }
            }
        }
    }
    if($('#is_code_page').length){
        var tab_i = sessionStorage.getItem('tab_code_i');
        if(tab_i) {
            $('.training-section .tab.tab-' + tab_i).click();
        }
    }
}

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
            var i=$(this).index();
            if($('.training-section .inner-content .inner-row').eq(i).hasClass('m-current')){
                return false;
            }
            $(this).parent().find('.inner-row').removeClass('m-current');
            $(this).addClass('m-current');
            if(!non_delete_queries_holder) {
                sessionStorage.removeItem('queries_holder_i');
            }
            save_page_status();
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
            if($(this).hasClass('tab-main')) {
                save_page_status();
            }
            if($(this).hasClass('tab-code')) {
                save_page_code_status();
            }
		}
	})	

	// code play
	playCode.on('click', function() {	
		$('.training-section .result-tab').trigger( "click" );
	})

}

/* tabs */
function scenarios_navigation() {   

    var scenarios_row = $('.training-section .inner-row');
    var descr_holder = $('.training-section .descr-holder'); 
    var queries_holder = $('.training-section .queries-holder'); 

    descr_holder.hide();
    queries_holder.hide();
    descr_holder.eq(0).show();
    queries_holder.eq(0).show();

    /* tab onclick */ 
    scenarios_row.on('click', function() {           
        descr_holder.hide().eq($(this).index()).show(); 
        queries_holder.hide().eq($(this).index()).show();
        save_page_status();
    })  

}

function save_page_status() {
    if (typeof(Storage) === "undefined") {
        return false;
    }
    var row_i=$('.inner-row.m-current').data('row');
    sessionStorage.setItem('row_i',row_i);
    var tab_i=$('.tab.m-active').data('tab');
    sessionStorage.setItem('tab_i',tab_i);
    // $('.main .training-section .inner-content .queries-holder p').each(function (i, obj) {
    //     if($(obj).hasClass('m-active')){
    //         sessionStorage.setItem('queries_holder_i',i);
    //     }
    // })

}

function save_page_code_status() {
    if (typeof(Storage) === "undefined") {
        return false;
    }
    var tab_i=$('.tab.m-active').data('tab');
    sessionStorage.setItem('tab_code_i',tab_i);
}


// change code  theme
// function change_code_theme() {

// 	var toggleBtn = $('.training-section .toggle-btn');
// 	var codeHolder= $('.training-section pre.prettyprint');	

// 	toggleBtn.on('click', function() {		

// 		if (!$(this).hasClass('m-active')) {

// 			if (!$(this).hasClass('m-black')) {				
// 				codeHolder.addClass('light');	
// 				$('.play img').attr('src','img/icon/play-icon-white.png');						
// 			} else {
// 				codeHolder.removeClass('light');	
// 				$('.play img').attr('src','img/icon/play-icon.png');				
// 			}

// 			toggleBtn.removeClass('m-active');
// 			$(this).addClass('m-active');	
			
// 		} 
// 	})	

// }




