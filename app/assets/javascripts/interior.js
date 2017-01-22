var $j = jQuery.noConflict();
$j(document).ready(function(){
blueimp.Gallery(
		document.getElementById('links').getElementsByTagName('a'),
		{
			container: '#blueimp-gallery-carousel',
			carousel: true,
                        stretchImages: true ,
                        startSlideshow: true,
                        transitionSpeed: 200
		}
	);
})
