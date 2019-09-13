
// ISOTOPE FILTER
jQuery(document).ready(function($){

	if ( $('.iso-box-wrapper').length > 0 ) { 

	var $container  = $('.iso-box-wrapper'), 
	$imgs = $('.iso-box img');

	$container.imagesLoaded(function () {

		$container.isotope({
		filter: '.fend',
		layoutMode: 'fitRows',
		itemSelector: '.iso-box'
		});

		$imgs.load(function(){
			$container.isotope('reLayout');
		})

	});

    //filter items on button click

    $('.filter-wrapper li a').click(function(){

		var $this = $(this), filterValue = $this.attr('data-filter');

		$container.isotope({ 
        filter: filterValue,
        animationOptions: { 
			duration: 750, 
            easing: 'linear', 
            queue: false, 
        }                
      });             

      // don't proceed if already selected 

      if ( $this.hasClass('selected') ) { 
        return false; 
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

        return false;
      }); 

  }

});


// PRELOADER JS
$(window).load(function(){
    $('.preloader').fadeOut(1000);    
});


// jQuery to collapse the navbar on scroll //
$(function(){
	if ($(".navbar").offset().top > 50) 
        $(".navbar-fixed-top").addClass("top-nav-collapse");
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

	
  // PORTFOLIO AJAX POPUP
  $('.ajax-popup').magnificPopup({
		type: 'ajax',
		overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});


// EMAIL
	$( "form" ).on( "submit", function(e) {
		console.log('form submit');
		e.preventDefault();
		gtag_report_conversion();
		$.ajax({
			url: 'https://docs.google.com/forms/d/e/1FAIpQLSdGO5VXHG8cvWuQ0MIfoalsOgCIk5ql-440oBLuEvmhdwmTCQ/formResponse',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			statusCode: {
				0: function() {
					$("#mailStatus").html("<div style='color: #00ff80'><strong>Message sent!</div>");
				},
				200: function() {
					$("#mailStatus").html("<div style='color: #00ff80'><strong>Message sent!</div>");
				}
			}
		});
	});
	
});

