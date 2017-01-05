/**
* homeController Module
*
* Description
*/
angular.module('goodist.controller', ['goodist.goodistservice'])
.controller('goodistController', ['$ionicLoading',
  '$stateParams',
  '$scope',
  'goodistservice',
  function($ionicLoading,$stateParams,$scope,goodistservice){
   console.log($stateParams);
   $scope.obj_goodsListData=[];
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 10,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };
  $scope.$on('$ionicView.beforeEnter', function (e) {
        init();
  });
  $scope.$on('$ionicView.enter', function (e) {
        swiperInit();
  });
   function swiperInit() {
     var mySwiper = new Swiper('.swiper-container',{
          slidesPerView : 5,//'auto'
          //slidesPerView : 3.7,
      })
   }
   //初始化数据
    function init() {
      var promise=goodistservice.getData();
      promise.then(
        //成功状态
        function (data) {
        $scope.obj_goodsListData=data
      }, 
      //失败状态
      function (res) {
        
      })
      .finally(function() {
        
       });
    }
    //下拉刷新方法
    $scope.refreshGoodsList=function () {
      var promise=goodistservice.refreshGoodsList();
      promise.then(
        //成功状态
        function (data) {
        $scope.obj_goodsListData=data
      }, 
      //失败状态
      function (res) {
        
      })
      .finally(function() {
         // 停止广播ion-refresher
         $scope.$broadcast('scroll.refreshComplete');
       });
    };
    //加载更多
    $scope.loadMore=function () {
      console.log(11);
      $ionicLoading.show({
        template: '加载数据中...'
    })
      var promise=goodistservice.loadMore();
      promise.then(
        //成功状态
        function (data) {
        Array.prototype.push.apply($scope.obj_goodsListData,data);
        setTimeout(function (argument) {
           $ionicLoading.hide();
        },1000)
      }, 
      //失败状态
      function (res) {
        
      })
      .finally(function() {
         // 停止广播ion-refresher
         $scope.$broadcast('scroll.infiniteScrollComplete');
       });
    };
    
    $scope.goBack=function () {
      window.history.back(-1);
    }
}])