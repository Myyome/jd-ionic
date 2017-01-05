/**
* home.route Module
*
* Description
*/
angular.module('goodist.route', ['goodist.controller'])
.config(function($stateProvider) {
	$stateProvider
	.state('goodist', {
    url: '/goodist/:typeNumber',
    templateUrl: 'areas/goodlist/goodist.html',
    controller: 'goodistController'
  })
})