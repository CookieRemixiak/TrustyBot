const { client, con, colors } = require("./index");

var express = require('express'); 
var app = express(); 
var PORT = 80; 
client.on('ready', () => { 
app.set('view engine', 'ejs'); 
app.use(express.static('public'))
app.get('/', async (req, res) => { 
    res.render('index', {
        channels: client.channels.cache.size,
        servers: client.guilds.cache.size,
        users: client.users.cache.size,
        status: client.user.presence.status,
        ping: client.ws.ping
    }); 
}) 
app.get('/join', async (req, res) => { 
    res.render('join'); 
}) 
 
app.listen(PORT, function(err){ 
    if (err) console.log(err); 
    console.log("Server listening on PORT: ", PORT); 
}); 
})

