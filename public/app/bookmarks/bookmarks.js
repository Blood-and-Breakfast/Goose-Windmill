angular.module('hack.bookmarks', [])

.controller('BookmarksController', function ($scope, $window, Links, Followers, Bookmarks, Auth) {
  $scope.currentBookmarks = Bookmarks.bookmarks;
  $scope.loggedIn = Auth.isAuth();
  $scope.stories = Links.bookmarkStories;
  $scope.perPage = 30;
  $scope.index = $scope.perPage;
  $scope.currentlyFollowing = Followers.following;

  $scope.addUser = function(username) {
    Followers.addFollower(username);
  };

  $scope.isBookmark = function(story) {
    if (Bookmarks.bookmarks.indexOf(story.objectID) === -1) {
      return false;
    } else {
      return true;
    }
  };
  $scope.addBookmark = function(story) {
    Bookmarks.addBookmark(story);
  };
  $scope.removeBookmark = function(story) {
    Bookmarks.removeBookmark(story);
  };

  var init = function () {
    Links.getBookmarks();
  };
  init();
});