jQuery(document).ready(function($) {

	//to make our grid pretty
	$('.posts').masonry({
		itemSelector:'.post'
	});

	//for the gallery
	$("#slides").slidesjs({
		navigation : {
			effect : "fade"
		}

	});
});





















