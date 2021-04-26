const { response } = require('express');
const express = require('express');
const twitch = require("twitch-m3u8");

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();});



addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  app.get('/:twitchname' ,(req, res) => {
    twitch.getStream(req.params.twitchname)
        .then(function(data){
             //var myJSON = JSON.stringify(data);
             //var parsed = JSON.parse(data);
            // console.log(data)
            
            res.send(` <script> 
            function pageRedirect() {
               window.location.replace(${data[0].url});
             }     
         setTimeout("pageRedirect()", 0);
            </script>`)
        
        })
        .catch(err => res.send(err));

    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});
  
   //const userAgent = request.headers.get("User-Agent") || ""
    // if (!userAgent.includes("fuckyouflixtvplayer")) {
   //          let url = `https://cdn.movieforu.workers.dev/v.m3u8?file_code=fkuiyu09trij&q=n`;
   //          return Response.redirect(url, 302);
   //      }
 
  let URLT = new URL(request.url);
  let file_code = URLT.searchParams.get("channel")
  let q = URLT.searchParams.get("q")
  let url = "https://livetvkyte.herokuapp.com/"+file_code

  let res = await fetch(url);
  let obj = await res.json(); 

  var finalURL = obj[q].url;
  return Response.redirect(finalURL, 301);
}



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`server start on ${PORT}`));
