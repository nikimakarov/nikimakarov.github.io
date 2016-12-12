$(window).scroll(function(){
	
	var postsTop;
	var winHeight;
	
	$(document).ready(function(){
		postsTop= $('.blog-posts').offset().top - 250;
		winHeight = $(window).height();
	});

	function posts(x){
		var goal = postsTop - winHeight / 3;
		var offset;
		
		if (x < goal){
			offset = Math.min(0.005*Math.pow(x - goal, 2), winHeight);
		}else{
			offset = 0;
		}
			
		$('.post-1').css({'transform': 'translate('+ -offset +'px, ' + offset * 0.2 + 'px)'});
		
		$('.post-3').css({'transform': 'translate(' + offset +'px, ' + offset * 0.2 + 'px)'});
	}
	
	var wScroll = $(this).scrollTop();
	
	$('.name').css({
		'transform' : 'translate(0px,' + wScroll/1.8 + '%) '
	});

	$('.desc').css({
		'transform' : 'translate(0px,' + wScroll/1.3 + '%) '
	});
	
	if((wScroll > $('article').offset().top - 53) && (wScroll < $('.last-section').offset().top - 950)){
      $('.sidebar').css({'opacity' : '1'});
   }
	else{
		$('.sidebar').css({'opacity' : '0'});
	}
	
   if(wScroll > $(window).height()*1.5){
      $('footer').css({'visibility' : 'visible'});
   }

   if(wScroll < $(window).height()*1.5){
      $('footer').css({'visibility' : 'hidden'});
   }
      
	if(wScroll > $('.pics').offset().top - ($(window).height() / 1.2)) {
		
		$('.pics figure').each(function(i){
			
		  setTimeout(function(){
				$('.pics figure').eq(i).addClass('is-showing');
						}, 150 * (i+1));
		  });
	}
	
	if(wScroll > $('.large-window').offset().top - $(window).height()){
		
		$('.large-window').css({'background-position': 'center ' + (wScroll - $('.large-window').offset().top) + 'px'});
		
		var opacity = (wScroll - $('.large-window').offset().top + 430) / (wScroll / 5);
		
		$('.window-tint').css({'opacity': opacity});
	}
	
	if ($(window).width()> 690){
		posts(wScroll);
	}

});
/*
$(".meter > span").each(function() {
  $(this)
    .data("origWidth", $(this).width())
    .width(0)
    .animate({
      width: $(this).data("origWidth") // or + "%" if fluid
    }, 1200);
});*/