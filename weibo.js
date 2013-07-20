var core = require('./core')
var config = require('./config')
var requst = require("request")

function bind(req, res) {
    core.redirect(req,res,"https://api.weibo.com/oauth2/authorize?client_id="+config.weibo.app_key+"&redirect_uri="+config.weibo.redirect_uri+"&response_type=code")
}

function bindCallback(req,res){
    var code = req.query.code;
    var option = {
       hostname: "api.weibo.com",
       path: "/oauth2/access_token",

    };
    request.post('https://api.weibo.com/oauth2/access_token').form(
        {
            code:code,
            client_id:config.weibo.app_key,
            client_secret:config.weibo.app_secret,
            grant_type:"authorization_code",
            recirect_uri:config.weibo.redirect_uri
        },
        function(e,r,body){
        }
    );
}

module.exports.bind = bind
module.exports.bindCallback = bindCallback
