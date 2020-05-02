const http = require('http');
const fs=require("fs");
const path=require("path");
const util = require('util')

const https = require('https');


const hostname = '127.0.0.1';
const port = 3000;

const publicResources="PublicResources/";
//secture file system access as described on 
//https://nodejs.org/en/knowledge/file-system/security/introduction/
const rootFileSystem=process.cwd();
function securePath(userPath){
  if (userPath.indexOf('\0') !== -1) {
    // could also test for illegal chars: if (!/^[a-z0-9]+$/.test(filename)) {return undefined;}
    return undefined;

  }
  userPath= publicResources+userPath;

  let p= path.join(rootFileSystem,path.normalize(userPath)); 
  //console.log("The path is:"+p);
  return p;
}

/* more accurate error codes should be sent to client */

function fileResponse(filename,res){
  const sPath=securePath(filename);
  console.log("Reading:"+sPath);
  fs.readFile(sPath, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode=404;
      res.setHeader('Content-Type', 'text/txt');
      res.write("File Error:"+String(err));
      res.end("\n");
    }else {
      res.statusCode = 200;
      res.setHeader('Content-Type', guessMimeType(filename));
      res.write(data);
      res.end('\n');
    }
  })
}

const security = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

const server = https.createServer(security, (req, res) => {
  let date=new Date();
  console.log("GOT: " + req.headers["X-API-Key"] + " " +req.url);
  if(req.method=="GET"){
    switch(req.url){
      case "/":    
        fileResponse("index.html",res);
        break;
      case "/fetching1.html": 
	    if(req.headers["X-API-Key"] != "coolKey") {
		  res.statusCode=401;
		  res.setHeader('Content-Type', 'text/txt');
		  res.write("you are not authorized to access the file");
		  res.end("\n");
		  break;
		}
        fileResponse(req.url,res);
        break;
      default:
        fileResponse(req.url,res);
        break;
    }//switch
  } else {
    console.log("received a ", req.method)
    console.log("more ", req.statusMessage)
    date=new Date();
    console.log(JSON.stringify(date));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let newobj = {};
    newobj['the_url'] = req.url;
    newobj.date = date;
    res.write(JSON.stringify(newobj));
    res.end('\n');
  }
});

//better alternative: use require('mmmagic') library
function guessMimeType(fileName){
  const fileExtension=fileName.split('.').pop().toLowerCase();
  console.log(fileExtension);
  const ext2Mime ={ //Aught to check with IANA spec
    "txt": "text/txt",
    "html": "text/html",
    "ico": "image/ico", // CHECK x-icon vs image/vnd.microsoft.icon
    "js": "text/javascript",
    "json": "application/json", 
    "css": 'text/css',
    "png": 'image/png',
    "jpg": 'image/jpeg',
    "wav": 'audio/wav',
    "mp3": 'audio/mpeg',
    "svg": 'image/svg+xml',
    "pdf": 'application/pdf',
    "doc": 'application/msword',
    "docx": 'application/msword'
   };
    //incomplete
  return (ext2Mime[fileExtension]||"text/plain");
}

//
let expenses=[
  {
      name:"Brian",
      topic:"Coca Cola",
      date: "2020-02-13",
      amount: 95.4,
      currency: "KR"
  },
  {
      name: "Michele",
      topic: "Expresso",
      date: "2020-02-14",
      amount: 6,
      currency: "EURO"
    },
  {
      name: "Brian",
      topic: "Americano",
      date: "2020-02-15",
      amount: 7,
      currency: "EURO"
    }
  //name, topic, date, amount, and currency. 
  //Thu Feb 13 2020 11:08:44 GMT+0100 (GMT+01:00)
]

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});

//https://www.w3schools.com/nodejs/nodejs_url.asp

