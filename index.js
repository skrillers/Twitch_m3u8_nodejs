const express = require('express');
const twitch = require("twitch-m3u8");

const app = express();


app.get('/:twitchname' ,(req, res) => {
    twitch.getStream(req.params.twitchname)
    .then(data => res.send(data))
    .catch(err => res.send(err));



});




const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`server start on ${PORT}`));