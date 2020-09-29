let items = document.getElementById("items");
items.style.maxHeight = "0px";
function menutoggle(){
	if(items.style.maxHeight == "0px")
	{
		items.style.maxHeight = "200px";
	}else{
		items.style.maxHeight = "0px";
	};
};




jQuery(document).ready(function($){

	$(function(){
		$('nav li a').animate({
			'fontSize': '18px',
		},5000);
	});

$(window).scroll(function(event){
	if($(this).scrollTop()>200){
		$('#up').fadeIn(500)
	}else{
		$('#up').fadeOut(1000)
	}
})
$('#up').click(function(event){
	$('html, body').animate({
		scrollTop: 0
	},1000);
});

})