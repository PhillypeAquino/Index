const postData = require('./PostsData');

exports.getPosts = function () {
      return postData.getPosts();
}