(function() {
    var log = new(require('log'))('debug');
    var config = require('../config');
    const TULING = require('tuling')

    const QQ_GROUP_ACCOUNT = config.qq_group_id
    const tuling = new TULING({
        key: config.tuling_key
    })

    module.exports = function(content, send, robot, message) {
        // log.debug(message)
        if (message.type == 'group_message' && message.from_group.account == QQ_GROUP_ACCOUNT) {
            if (content.startsWith('/')) {
                on_message(content, send, robot, message)
            }
        } else if (message.type == 'message') {
            on_message(content, send, robot, message)
        }
    }

    function on_message(content, send, robot, message) {
        if (content.match(/nyan$/i)) {
            return send('喵~');
        } else {
            tuling.send({
                userid: message.from_uin,
                info: content.replace('/', '')
            }).then(function(result) {
                console.log(result);
                send(result.text + (result.url ? '\n' + result.url : ''))
            })
        }
    }
}).call(this);