/*
var PouchDB = require('pouchdb');
var express = require('express');
var  app= require('express-pouchdb')({
  mode: 'minimumForPouchDB',
  overrideMode: {
    include: ['routes/fauxton']
  }
});

PouchDB.plugin(require('pouchdb-adapter-node-websql'));
var db = new PouchDB('mypouchdb.db', { adapter: 'websql' });

app.setPouchDB(PouchDB);
app.listen(3000);
*/

/*
*/
var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-adapter-node-websql'));

 var db = new PouchDB('mypouchdb1.db', { adapter: 'websql' });
var LocalDB=PouchDB.defaults({prefix: './my-temp-pouch/'});
// var db = new PouchDB('mypouchdb1.db');
 //var db = new PouchDB('mypouchdb1.db', { adapter: 'websql' });


var express = require('express');
var app = express();


app.use('/', require('express-pouchdb')(LocalDB,{
	configPath:'./cb.json',
    mode: 'fullCouchDB', //'minimumForPouchDB',
  // overrideMode: {
    // include: ['routes/fauxton']
  // }
}));

app.listen(3000,function(){
	console.log("listening on port 3000");
});
