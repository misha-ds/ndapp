var ini=require('ini');
var fs=require('fs');
var crypt=require('./crypt.js');

	var map_tree=function (self,o,cbstring,cbnull ){
	var k=Object.keys(o);
	for(var i=0;i<k.length;i++)
	{
		c=o[k[i]];
		if(c==null){
			cbnull(self,o,k[i]);
		}
		else if( typeof(c)!='object'){
			cbstring(self,o,k[i]);
		}
		else{
			map_tree(self,c,cbstring,cbnull)
		}

	}
}

var needToProtect=false;
module.exports={
	protect:[
		'password','user','pwd','token'
	],
	load:function(filename){
		needToProtect=false;
		if(!filename) filename=this.filename; 
			console.log('loading '+filename);
		filecontent=fs.readFileSync(filename, 'utf-8');
		this.config=ini.parse(filecontent);
		map_tree(this,this.config,
			function(self,o,k){ if(self.protect.indexOf(k.toLowerCase())>=0){
			 	r=crypt.dec(o[k]);if(r==null) needToProtect=true; else o[k]=r   
			}   }
			,function(self,o,k){}
		)
		if(this.config.UUID){
		var cur=fs.readFileSync('./.local');
		if(this.config.UUID=='registrar' ||this.config.UUID=='uuid' ){
			this.config.UUID= cur
			needToProtect=true;
		}
		}
		if(needToProtect){
			console.log('saving protected');
			this.save(filename);
		}
		return this.config
	},
	config:{},
	filename:'./config.ini',
	save:function(filename,config){
		if(!filename) filename=this.filename; 
			console.log('saving '+filename);
		if(config)
			var tini=JSON.parse(JSON.stringify(config));
		else
			var tini=JSON.parse(JSON.stringify(this.config));
		map_tree(this,tini,
			function(self,o,k){ if(self.protect.indexOf(k.toLowerCase())>=0){ o[k]=crypt.enc(o[k]) }   }
			,function(self,o,k){ delete(o[k]);  }
		)
		fs.writeFileSync(filename, ini.stringify(tini, { section: '' }));
	}
}
