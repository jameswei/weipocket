var config = {}
config.weibo = {}
config.weibo.app_key = process.env.WEIBO_APPKEY;
config.weibo.app_secret =  process.env.WEIBO_APPSECRET;
config.weibo.redirect_uri = "http://weipocket.com/weibo/bind/callback";
module.exports = config;
