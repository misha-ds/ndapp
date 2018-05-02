const ini = require('./ini.js').load();
var express = require('express');
var http = require('http');
var https = require('https');
var app = express();
var cors = require('cors')
app.use(cors())
var httpsOptions={
    key: require('./key.js').serverKey,
    cert: require('./key.js').serverCert,
    ca: require('./key.js').caCert,
    requestCert: true,
    rejectUnauthorized: true
}
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var guard = require('express-jwt-permissions')()
var proxy = require('http-proxy-middleware');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = ini.API_SERVER.PORT;
var router = express.Router(); 
router.use(function(req, res, next) {
    next(); 
});
app.use(jwt({
    secret: require('./key.js').serverKey,
//    credentialsRequired: false,
}).unless({
    path: ['/api/version', '/api/token']
}));
router.route('/check').get(function(req,res){
	res.send(req.user);	
});




app.get('/status', guard.check('status'), function(req, res) { 
res.send('ok');
})
router.route('/status').get(guard.check('status'), function(req, res) { res.send('ok'); })
router.route('/version').get(function(req,res){
    res.send('version:'+ (ini.VERSION?ini.VERSION:'beta'));
    res.end();
});
router.route('/token').post(function(req, res) {
    options = {
        fecha: Date.now(),
        ip: false,
        hid: false,
	user: 'none',
	pwd: 'some',
        dbid:0,
	"permissions": [   "status",   "user:read",   "user:write" ],
        hostname: false,
	"scope": "user:read user:write",
        sign: ini.UUID ? ini.UUID : '-'
    }
    cols = Object.keys(options)
    for (var i = 0; i < cols.length; i++) {
        if (req.body && req.body[cols[i]]) options[cols[i]] = req.body[cols[i]];
    }
    options.exp = Math.floor(Date.now() / 1000) + (60 * 60) * 24 * 365
    if (!options.user) {
        return res.status(500).send('faltan datos')
    }
    delete(options.pwd);
    var r = {};
            options.dbid=r.codigocliente;
            var jwt = require('jsonwebtoken');
            var token = jwt.sign(options, require('./key.js').serverKey, {
            });
            res.json({
                TOKEN: token
            });
})

router.get('/', function(req, res) {
    res.json({
        message: 'hooray! welcome to our api!'
    });
})
app.use('/api', router);


app.use('/', proxy({target: 'http://127.0.0.1:3000', changeOrigin: true}));

app.use(function (err, req, res, next) {
  switch(err.code){
  	case 'credentials_required':
  	case 'permission_denied':
    		return res.status(403).send('Forbidden');
		break;
	default:
  		res.status(500).send(err);
  }
});


https.createServer(httpsOptions,app).listen(8081,function(){console.log("secure "+8081)});
http.createServer(app).listen(80,function(){console.log("normal "+80)});
