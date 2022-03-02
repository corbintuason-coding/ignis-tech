const Mongoose = require('mongoose');

// Define Model
const CartModel = Mongoose.model("cart", {
    game: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "game"
    }
})

// Routes
module.exports = [
    // GET ALL
    {
        method: "GET",
        path: "/carts",
        handler: async (request, h) => {
            try {
                var carts = await CartModel.find().populate("game");
                return h.response(carts);
            } catch (e) {
                return h.response(e).code(500);
            }
        }

    },
    // GET One
    {
        method: "GET",
        path: "/cart/{id}",
        handler: async (request, h) => {
            try {
                var cart = await CartModel.findById(request.params.id).populate("game");
                return h.response(cart);
            } catch (e) {
                return h.response(e).code(500);
            }
        }
    },
    // POST
    {
        method: "POST",
        path: "/cart",
        handler: async (request, h) => {
            try {
                var cart = new CartModel(request.payload);
                var result = await cart.save();
                return h.response(result);
            } catch (e) {
                return h.response(e).code(500);
            }
        }
    }
];