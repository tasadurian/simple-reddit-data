var request = require('request-promise');

getJSON = function(url) {
  var options = {
    url: url,
    json: true,
  };
  return rp.get(options)
    .catch(function(error) {
      return error;
    })
    .then(function(response) {
      return response;
    });
};

var Reddit = (function() {

  function Reddit() {}

  Reddit.prototype.get = function(subreddit) {
    if (!subreddit) {
      return getJSON('https://www.reddit.com/.json');
    } else {
      return getJSON('https://www.reddit.com/r/' + subreddit + '/.json');
    }
  };

  return Reddit;
})();

module.exports = Reddit;
