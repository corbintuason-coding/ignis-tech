const Hapi = require("hapi");
const Mongoose = require('mongoose');

// Call Routes
var routes = require('./config/routes');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',        
    "routes": {
        "cors": true
    }
});
Mongoose.connect("mongodb://localhost/foxgames", { useNewUrlParser: true, useUnifiedTopology: true });



// Load Routes
server.route(routes);
server.start();