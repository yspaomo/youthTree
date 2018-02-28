$(function() {
	// 杞挱鍥惧紑濮� 
	var left = $('.focus_l'); //鑾峰彇宸︾偣鍑�
	var right = $('.focus_r'); //鑾峰彇鍙崇偣鍑�
	var aSmall = $('.focus_s ul li');
	var aLi = $('.focus_m ul li');
	var iNow = 0;
	// 宸︾偣鍑�  
	left.click(function() {
		iNow--;
		// 鍒ゆ柇鍥炴祦
		if(iNow < 0) {
			iNow = 3;
		}
		aLi.eq(iNow).siblings().stop().animate({
			opacity: 0

		}, 800);
		aLi.eq(iNow).stop().animate({
			opacity: 1

		}, 800);

		aSmall.eq(iNow).addClass('active').siblings().removeClass('active');
	});
	// 鍙崇偣鍑诲垏鎹�
	right.click(function() {
		iNow++;
		if(iNow > 3) {
			iNow = 0;
		}
		aLi.eq(iNow).siblings().stop().animate({
			opacity: 0

		}, 800);
		aLi.eq(iNow).stop().animate({
			opacity: 1

		}, 800);
		
		aSmall.eq(iNow).addClass('active').siblings().removeClass('active');

	});

//	//鎵嬪姩鍒囨崲
	aSmall.click(function() {
		var n = $(this).index();
		//        var iNow = $(this).index();
		//        alert(iNow);
		iNow = n;
		aLi.eq(iNow).siblings().stop().animate({
			opacity: 0

		}, 800);
		aLi.eq(iNow).stop().animate({
			opacity: 1

		}, 800);
		aSmall.eq(iNow).addClass('active').siblings().removeClass('active');

	});
	// 灏佽鍑芥暟浣�
	function move1() {
		aLi.eq(iNow).siblings().stop().animate({
			opacity: 0

		}, 800);
		aLi.eq(iNow).stop().animate({
			opacity: 1
		}, 800);

		aSmall.eq(iNow).addClass('active').siblings().removeClass('active');
	}

	// 瀹氫釜瀹氭椂鍣ㄧ殑鍒濆鍊�

	function run2() {
		iNow++;
		if(iNow > 3) {
			iNow = 0;
		}
		move1();
	}

	// 瀹氭椂鍣�
	var timer = setInterval(run2, 4000);

	//褰撻紶鏍囧垝鍏ワ紝鍋滄杞挱鍥惧垏鎹�
	$(".focus_m").mouseover(function() {
		clearInterval(timer);
	})
	$(".focus_m").mouseout(function(){
		timer = setInterval(run2, 4000);
	})
	$(".focus_l").mouseover(function() {
		clearInterval(timer);
	})
	$(".focus_r").mouseover(function() {
		clearInterval(timer);
	})
	$(".focus_s").mouseover(function() {
		clearInterval(timer);
	})
})