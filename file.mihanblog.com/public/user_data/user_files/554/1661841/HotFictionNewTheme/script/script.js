jQuery(document).ready(function($) {
	jQuery("#show-menu-lb").click(function() {
		jQuery(this).siblings('ul').slideToggle(300);
	});
	jQuery("nav ul li a").click(function() {
		jQuery(this).siblings('ul').slideToggle(200);
		if (window.matchMedia("(max-width: 800px)").matches) {
		jQuery(this).parent().siblings('li').children('ul').slideUp(300);

	}else{jQuery(this).parent().siblings('li').children('ul').slideUp(0);}
		});
	jQuery("font").removeAttr("size");
	jQuery("font").removeAttr("face");
	jQuery("b").parent().css({background: 'red',color: 'white'});
});
  
