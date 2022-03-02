const Mongoose = require('mongoose');

// Define Model
const GameModel = Mongoose.model("game", {
    name: String,
    description: String,
    img_url: String,
    price: Number
});

// Routes
module.exports = [
    // GET ALL
    {
        method: "GET",
        path: "/games",
        handler: async (request, h) => {
            try {
                var query = {};
                if (request.query.name) {
                    query.name = {
                        "$regex": request.query.name,
                        "$options": "i"
                    }
                }
                var games = await GameModel.find(query).populate("Game");
                return h.response(games);
            } catch (e) {
                return h.response(e).code(500);
            }
        }
    },

    // GET One
    {
        method: "GET",
        path: "/game/{id}",
        handler: async (request, h) => {
            try {
                var game = await GameModel.findById(request.params.id).populate('review');
                return h.response(game);
            } catch (e) {
                return h.response(e).code(500);
            }
        }
    },
    // POST
    {
        method: "POST",
        path: "/game",
        handler: async (request, h) => {
            try {
                var game = new GameModel(request.payload);
                var result = await game.save();
                return h.response(result);
            } catch (e) {
                return h.response(e).code(500);
            }
        }
    }
];