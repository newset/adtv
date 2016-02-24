angular.module('adtv')
	.directive('uiSubNav', ['$state', '$filter', function ($state, $filter) {
		function match(state){
			return $state.includes(state);
		}

		function $uiSubNav($scope, $state, $element, $attrs){
			$scope.$on('$stateChangeSuccess', update);
			var state = $element.attr('ui-sub-nav'),
				childSelector = $element.attr('sub') || 'ul';

  			function anyMatch(state, params) { return $state.includes(state); }

			function update(){
				if(anyMatch(state) && !$element.children(childSelector).is(':visible')){
					$element.addClass('active').children(childSelector).slideDown(250);
				}

				if (!anyMatch(state) && $element.children(childSelector).is(':visible')){
					$element.removeClass('active').children(childSelector).slideUp(250);
				}
			}

			$element.children('a').addClass('has-ul').children(childSelector).hide();
			update();

			$element.on('click', function(e){
		        e.stopPropagation();
		        if ($(e.target).hasClass('has-ul')) {
					$element.toggleClass('active').children(childSelector).slideToggle(250);
		        }
			});
		}

		$uiSubNav.$inject = ['$scope', '$state', '$element'];

		return {
			restrict: 'A',
			controller: $uiSubNav
		};
	}])