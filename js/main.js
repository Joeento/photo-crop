$(function() {
	var stage = $("#stage");
	var image = $("#image");
	var distanceX;
	var distanceY;

	$("#image").on('dragstart', function(event) { event.preventDefault(); });

	$("#image").mousedown(function(md) {
		$(".selector").remove();
		stage.append("<div class='selector'></div>");
		$(".selector").css("left",md.pageX);
		$(".selector").css("top",md.pageY);

		$("#image,.selector").mousemove(function(mm) {
			var posX = $(this).offset().left;
			var posY = $(this).offset().top;
			var sizeX = event.pageX - posX;
			var sizeY = event.pageY - posY;
			var startX = event.pageX;
			var startY = event.pageY;

			if ((mm.pageX-startX)>=0 && (mm.pageY-startY)>=0) {
				distanceX = mm.pageX-parseInt($(".selector").css("left"));
				distanceY = mm.pageY-parseInt($(".selector").css("top"));
				$(".selector").css("width",distanceX+"px");
				$(".selector").css("height",distanceY+"px");
			} else if (mm.pageX-startX<0 && (mm.pageY-startY)>=0) {
				//alert(parseInt($(".selector").css("width")));
				distanceY = mm.pageY-parseInt($(".selector").css("top"));
				$(".selector").css("left",mm.pageX+"px");
				$(".selector").css("width",(startX-mm.pageX)+"px");
				$(".selector").css("height",distanceY+"px");
			} else if (mm.pageY-startY<0 && (mm.pageX-startX)>=0) {
				//alert(parseInt($(".selector").css("width")));
				distanceX = mm.pageX-parseInt($(".selector").css("left"));
				$(".selector").css("top",mm.pageY+"px");
				$(".selector").css("width",distanceX+"px");
				$(".selector").css("height",(startY-mm.pageY)+"px");
			} else {
				$(".selector").css("left",mm.pageX+"px");
				$(".selector").css("top",mm.pageY+"px");
				$(".selector").css("width",(startX-mm.pageX)+"px");
				$(".selector").css("height",(startY-mm.pageY)+"px");

			}
			//console.log(sizeX+", "+sizeY);
		});
	})


	$(document).mouseup(function(mu){
		$("#image,.selector").unbind("mousemove");
	});
});