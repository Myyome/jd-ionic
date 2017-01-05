/**
* homeController Module
*
* Description
*/
angular.module('home.controller', ['home.homeservice'])
.controller('homeController', ['$scope',function($scope){
	getHeaderSlideData();

	 $scope.$on('$ionicView.afterEnter', function(e) {
      	swiperInit();
    });
	// 头部滚动条数据
    function getHeaderSlideData(){
      $scope.headerSlideData=[
        {
          alt:"双十一预热主场会",
          src:"img/home/home-headerSlide-1.jpg"
        },
        {
          alt:"11月11天家电低价不停歇",
          src:"img/home/home-headerSlide-2.jpg"
        },
        {
          alt:"家具盛典 好货提前抢",
          src:"img/home/home-headerSlide-3.jpg"
        },
        {
          alt:"IT抢券节",
          src:"img/home/home-headerSlide-4.jpg"
        },
        {
          alt:"潮流数码 双11爽购攻略",
          src:"img/home/home-headerSlide-5.jpg"
        }
      ];
    }

    //swiper初始化
    function swiperInit() {
    	 var mySwiper = new Swiper ('.swiper-container', {
	    	loop: true,
	   	 	pagination : '.swiper-pagination',
	   	 	//autoplay:5000,
	   	 	width:window.innerWidth,
	   	 	observer:true,
	   	 	observeParents:true
   		 })

    }
    }])