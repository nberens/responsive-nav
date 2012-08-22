/* Author:

*/
jQuery(document).ready(function($){
	

	jQuery('header').append('<div id="menu-icon">&equiv;</div>');

	$('#menu-icon').click(function(){
		$('nav').slideToggle();
	});

});




