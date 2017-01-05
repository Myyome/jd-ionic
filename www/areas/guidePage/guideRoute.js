/**
* category.route Module
*
* Description
*/
angular.module('guide.route', ['guide.controller'])
.config(function($stateProvider) {
	$stateProvider
	.state('guide', {
      url: '/guide',
      templateUrl: 'areas/guidePage/guide.html',
      controller: 'guideController'
   })
})