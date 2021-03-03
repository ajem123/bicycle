$(document).ready(function () {
	//내비세이션
	$('.menu_btn').click(function () {
		$('.navi').stop().animate({
			right: 0
		}, 500)
	});
	//닫기버튼
	$('.close').click(function () {
		$('.navi').stop().animate({
			right: '-100vw'
		}, 500)
	});

	//내비세이션
	//모든 서브메뉴 안보임
	$('.sub').hide();
	//두번째 메뉴의 서브메뉴만 보임
	$('nav ul li:first-child .sub').show();
	//첫번쨰 메뉴에 active설정
	$('nav ul li:first > a').addClass('active');
	//주메뉴 클릭하면 각 메뉴에 해당하는 서브메뉴 나타남.
	$('nav ul li a').click(function () {
		$('nav ul li a').removeClass('active');
		$(this).addClass('active');
		$('.sub').hide();
		$(this).next().show();
	});
	
	//swiper slide(메인)
    var swiper = new Swiper('.swiper-container', {
      autoplay:{
		  delay:4000,
	  },
		loop:true,
		pagination: {
        el: '.swiper-pagination',
		  clickable:true
      }
    });
	
	//메뉴
	$('.t1').addClass('active');
	$('.tab_content div').hide();
	$('.con1').show();
	$('.t1').click(function(e){
		e.preventDefault();
		$('.t1').addClass('active');
		$('.t2').removeClass('active');
		$('.t3').removeClass('active');
		$('.con1').show();
		$('.con2').hide();
		$('.con3').hide();
	});
	$('.t2').click(function(e){
		e.preventDefault();
		$('.t2').addClass('active');
		$('.t1').removeClass('active');
		$('.t3').removeClass('active');
		$('.con2').show();
		$('.con1').hide();
		$('.con3').hide();
	});
	$('.t3').click(function(e){
		e.preventDefault();
		$('.t3').addClass('active');
		$('.t2').removeClass('active');
		$('.t1').removeClass('active');
		$('.con3').show();
		$('.con2').hide();
		$('.con1').hide();
	});
});
