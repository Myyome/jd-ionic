/**
* homeController Module
*
* Description
*/
angular.module('guide.controller', ['guide.guideservice'])
.controller('guideController', ['$scope','$state',function($scope,$state){
	$scope.go=function () {
		$state.go('tab.home');
	}

	 $scope.$on('$ionicView.afterEnter', function(e) {
      	swiperInit();
    });
	function swiperInit(argument) {
		var mySwiper = new Swiper ('.swiper-container', {
	    loop: false,
	    autoplay: 1000,//自动滑动
	    width:window.innerWidth, //全屏
	    autoplayDisableOnInteraction : false,//如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
	    //当滑块改变时
	    onSlideChangeEnd:function (swiper) {    
	    	if(mySwiper.activeIndex==3){
	    		mySwiper.stopAutoplay();
	    	}
	    	
	    	},
	    //当触摸滑块时
	    onTouchStart: function(swiper,event){
     		mySwiper.stopAutoplay();
    		},
    	//当触摸滑块结束时
		onTouchEnd: function(swiper,event){
			console.log(11)
 			mySwiper.startAutoplay();
 			console.log(22)
		}
 		 }) 
	}
	//开始体检按钮
	var oBegin=document.querySelectorAll('.begin')
	var beginWith=oBegin[0].offsetWidth;
	var viewportWith=window.innerWidth;
	oBegin[0].style.left=viewportWith/2-beginWith/2+'px';
	
	
}])