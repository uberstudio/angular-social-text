angular-social-text
================

Social text-selection tool (a-la medium.com) for AngularJS.
We created this tool for a customer of ours.

Allows for a small popup to open after text-selection occurs, offering a quick way of sharing selected text into the social networks.

Usage:
------

 * Download and include angular-social-text.js (optionally also include the provided CSS and copy the image provided to your image folder)

```jade
        script(type="text/javascript", src="path/to/angular-social-text.js")
```

 * Add 'ngSocialText' to your app's dependencies

```javascript
        angular.module('myApp', ['ngSocialText']);
```

 * In your main template, something like this:

```jade
        div.social-selection(ng-show="$root.socialSelectionOn")
           div.social-selection-tooltip
             a(ng-click="shareTextFB()")
               div.social-selection-tooltip-fb
             a(ng-click="shareTextTwitter()")
               div.social-selection-tooltip-tw
	     a(ng-click="customMailFunction()")
               div.social-selection-tooltip-mail
           div.social-selection-arrow
```

 * In your controller:

```javascript
        $scope.shareTextTwitter = function() {
            window.open('http://twitter.com/share?text='+$rootScope.textToShare,'socialtext', 'width=635,height=346,scrollbars=no,status=no,toolbar=no,menubar=no,location=no');
        }
        $scope.shareTextFB = function() {
            window.open('http://www.facebook.com/sharer.php?s=100&p[url]='+encodeURIComponent(http://your-page-url.com)+'&p[summary]='+encodeURIComponent($rootScope.textToShare)+'&p[title]=YourSiteName','socialtext', 'width=635,height=346,scrollbars=no,status=no,toolbar=no,menubar=no,location=no');
        }
	$scope.customMailFunction = function() {
	    ...
	}
```

 * Use the directive as an attribute to make any element's text shareable!

```jade
        div(social-text)
```