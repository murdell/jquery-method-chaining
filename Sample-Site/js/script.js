$(document).ready(function() {

 	$("#stream1_btn").on("click", function() {
 		$(".stream1-card").removeClass('highlight_stream');
		$(".stream2-card").removeClass('highlight_stream');
		$(".stream3-card").removeClass('highlight_stream');
	  	$(".stream1-card").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1-card").removeClass('highlight_stream');
		$(".stream2-card").removeClass('highlight_stream');
		$(".stream3-card").removeClass('highlight_stream');
	  	$(".stream2-card").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1-card").removeClass('highlight_stream');
		$(".stream2-card").removeClass('highlight_stream');
		$(".stream3-card").removeClass('highlight_stream');
	  	$(".stream3-card").addClass('highlight_stream');
	});


	$(".bottom_button").mouseenter(function(){
		$(".bottom_button").removeClass("makeRed").addClass("makeBorder"); }
	);
 
	$(".bottom_button").mouseleave(function(){
		$(".bottom_button").addClass("makeRed").removeClass("makeBorder"); }
	);
 
/*  
	$(".bottom_button").click(function(){
		$("p").hide(2000).show(); }
	);
*/

 
	$("p").click(function(){
		$(this).children("a").addClass('highlight_link'); 
	});
	
	
	$("img").click(function(){
		$(this).next().children('p').slideToggle();
	})	;

	$(".card").click(function(){
		$(this).toggleClass("highlight_card");
	})	;
 
	$("#select_btn").click(function() {
		$(".card").removeClass("highlight_card");
	}) ;

	$("#all_btn").click(function() {
		$(".card").addClass("highlight_card");
	}) ;

$(".nav-stream").on("click", function() {
    // A selector to match all cards in all streams
    var allStreams = ".card";
    // A selector to match just this stream's cards
    // for this, we use the class with the name of the stream,
    // which is the same as this nav link's id and then the "-card" suffix.
    var thisStream = "." + this.id;

    // First remove the highlight from all of the cards
    $(allStreams).removeClass("highlight_card");
    // Then apply the highlight to just this stream's cards
    $(thisStream).addClass("highlight_card");
});


 
}); 



