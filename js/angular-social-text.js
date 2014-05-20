'use strict';

/* Directives */

angular.module('ngSocialText', []).
    directive('socialText',function($compile, $rootScope)
              {
                  return {
                      restrict: 'A',
                      link: function(scope , element , attrs) {
                          element.bind('mouseup', function(e){
                              var selection;
			      
                              if (window.getSelection) {
                                  selection = window.getSelection();
                              } else if (document.selection) {
                                  selection = document.selection.createRange();
                              }
			      
                              if (selection.toString() !== '') {
                                  var s = selection.toString();
				  
                                  $rootScope.textToShare = encodeURIComponent(s);
                                  $(".social-selection").css({
                                      'top': (e.pageY + 24) + 'px',
                                      'left': (e.pageX - 45) + 'px'
                                  });
                                  $rootScope.socialSelectionOn = true;
                              }
                              else {
                                  $rootScope.socialSelectionOn = false;
                              }
			  });
                      }
		  };
              });
