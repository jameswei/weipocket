exports.redirect = function(req,rep,url){
    rep.writeHead(302, {
        'Location': url
    });
    rep.end();
}
