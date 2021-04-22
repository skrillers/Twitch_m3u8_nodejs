const express = require('express');
const twitch = require("twitch-m3u8");

const app = express();

app.get('/:twitchname' ,(req, res) => {
    twitch.getStream(req.params.twitchname)
        .then(function(data){
            // var parsed = JSON.parse(data);
            // console.log(parsed)



            res.send(`<p id="idvideourl" class="classvideourl">${data[0].url}</p>`)

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