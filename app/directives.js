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
	}]);

angular.module( "ui.router.state" ).decorator(
    "uiViewDirective",
    function uiViewDirective( $delegate ) {
        var directive = $delegate[1];

	    var compile = directive.compile;

	    directive.compile = function(tElement, tAttrs){
	    	var link = compile.apply(this, arguments);
		    tElement.append('<div>Added in the decorator</div>');
		    
		    return function(scope, elem, attrs) {
		    	scope.$on('$viewContentLoading', function(evt){
		        	elem.block({ 
					    message: '<i class="icon-spinner10 spinner"></i>',
					    timeout: 500,
					    overlayCSS: {
					        backgroundColor: '#fff',
					        opacity: 0.7,
					        cursor: 'wait'
					    },
					    css: {
					        border: 0,
					        padding: 0,
					        backgroundColor: 'transparent'
					    }
					});
		        })

		    	// 其他 resolve 事件

		        scope.$on('$viewContentLoaded', function(evt){
		        	// $.unblockUI();
		        })

		        link.apply(this, arguments);
		    };
	    }

        return $delegate;
    }
);