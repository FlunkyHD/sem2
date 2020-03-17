const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url == '/spy') {
        if (req.method === "POST"){
            let body = "";
            req.on('data', chunk => {
                body += chunk;
            });
            req.on("end", function(){
                console.log(body+"\n");
                //fs.appendFileSync('log.txt', 'data to append');
                res.end('I\'m spying on you.');
            });
        }
        else{
            res.end("FEJL!");
        }
    }
    else{ 
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.writeHead(200);

        let response_data = `
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>SPY ON YOU</title>
                <script>
                    document.addEventListener("mouseover", function(e){
                        console.log(e);
                        console.log(JSON.stringify(e.target.id));
                        fetch('spy', {
                            method: 'POST', // or 'PUT'
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(e.target.id),
                        })
                    });
                </script>
                <style>
                    div{
                        padding:5%;
                    }
                </style>
            </head>
            <body style="margin:0px;padding:0px;overflow:hidden;">
                <div style="background-color:blue;inner-width:100%;inner-height:100%;" class="div" id="div1">
                    div1
                    <div style="background-color:yellow;" class="div" id="div2">
                        div2
                        <div style="background-color:red;" class="div" id="div3">
                            div3
                        </div>
                    </div>
                </div>
            </body>
        </html>
        `;

        res.end(response_data);
    }
});

/*

*/

server.listen(1337);