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

app.get('/:twitchname' ,(req, res) => {
    twitch.getStream(req.params.twitchname)
        .then(function(data){
            // var parsed = JSON.parse(data);
            // console.log(parsed)



            res.send(`${JSON.stringify(data)}`)

        })
        .catch(err => res.send(err));

    // .then(data => res.send(data))
    // twitchStreams.get('channel')
    // .then(function(streams) {
    //     res.send(data)
    // });


});



const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`server start on ${PORT}`));
