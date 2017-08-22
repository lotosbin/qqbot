(function() {
  module.exports = function(content, send, robot, message) {
    const request = require('request');
      request.post(robot.config.webhook.url, {json: message}, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          // console.log(body)
        } else {
          console.error(error)
        }
      })
  };

}).call(this);