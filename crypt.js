
const crypto = require('crypto');
const fs=require('fs');
const localkey = fs.readFileSync('./.local');


const ENCRYPTION_KEY = localkey.slice(10,42) // crypto.createHash('sha256').update(localkey).digest('base64')
const IV_LENGTH = 16; // For AES, this is always 16
/*
function enc(text){
 let iv =crypto.randomBytes(IV_LENGTH);
 let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return iv.toString('hex') + ':' + encrypted.toString('hex').replace('"','')
}
function dec(text){
	try{
 let textParts = text.split(':');
 c=textParts.shift();
 let iv = new Buffer(c, 'hex');
 let encryptedText = new Buffer(textParts.join(':'), 'hex');
 // let encryptedText = new Buffer(textParts.join(':') );
 let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
	}catch( e){
	return null;
	}
}
*/
module.exports={
	enc:enc1,dec:dec1
} 



function enc1(text){
 let iv =crypto.randomBytes(IV_LENGTH);
 let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return iv.toString('base64') + ':' + encrypted.toString('base64')
}
function dec1(text){
	try{
 let textParts = text.split(':');
 c=textParts.shift();
 let iv = new Buffer(c, 'base64');
 let encryptedText = new Buffer(textParts.join(':'), 'base64');
 // let encryptedText = new Buffer(textParts.join(':') );
 let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return decrypted.toString();
	}catch( e){
	return null;
	}
}


// console.log( enc("1234567890")  )
//console.log (   '1234567890',new Buffer('1234567890').toString('hex')  )
