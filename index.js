var express = require("express")
var get_ip = require("ipware")().get_ip
var useragent = require("useragent")

var port = process.env.PORT || 8080;

var app = express()

app.get("*", function(req, res){
    console.log(req.headers);
    var agent = useragent.parse(req.headers['user-agent']);
    var obj = {"ipadress": get_ip(req)["clientIp"] , "language": req.headers["accept-language"].substring(0,5), "software": agent.os.toString()};
    res.end(JSON.stringify(obj));
})

app.listen(port)
