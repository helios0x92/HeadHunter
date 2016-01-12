exports.serveIndex = function(req, res, next) {
  res.render('index', { title: 'Request Header Parser Microservice' });
};

exports.whoami = function(req, res, next) {
    
    // geting ip from header
    var ip = req.headers["x-forwarded-for"];
    
    // language is the first string on the commas delimited response
    var language = req.headers['accept-language'].split(',')[0];
    
    // geting the index of the start and end of the first parenthesis, the software its always there.
    var fromIdx = req.headers['user-agent'].indexOf('(')+1;
    var toIdx = req.headers['user-agent'].indexOf(')');
    
    // substrating the software info from the parenthesis
    var software = req.headers['user-agent'].substring(fromIdx, toIdx);
    
    // sending response to user
    res.send({ipaddress: ip, language: language, software: software});
};