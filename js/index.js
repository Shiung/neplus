$(document).ready(function(){
	$('.slick-item').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 3000,
		dots: true,
		nextArrow: '<button type="button" class="slick-next" id="test">Next<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" class="style-scope yt-icon"></path></g></svg></button>',
		prevArrow: '<button type="button" class="slick-prev">Previous<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" class="style-scope yt-icon"></path></g></svg></button>',
		// centerMode: true,
	});

	$("button.btn").click(function(){
		if( $(this).attr("id").search("recruit") != -1 ){//招募
			$("#aboutUs").removeClass("active");
			$(this).addClass("active");
			$("#s5").show();
			$("#s2").hide();
			$("#s4").hide();
			$("#s2").css("opacity",0);
			$("#s4").css("opacity",0);
			$("#s5").animate({opacity:1},500);

			//scrollTop
			var s5Top =  $("#s5").position().top;
			$("html, body").animate({
	            scrollTop: s5Top
	        }, "slow");

		}else{//關於我們
			$("#recruit").removeClass("active");
			$(this).addClass("active");
			$("#s2").show();
			$("#s4").show();
			$("#s5").hide();
			$("#s5").css("opacity",0);
			$("#s2").animate({opacity:1},500);
			$("#s4").animate({opacity:1},500);

			//scrollTop
			var s2Top =  $("#s2").position().top;
			$("html, body").animate({
	            scrollTop: s2Top
	        }, "slow");
		}
	});

});
