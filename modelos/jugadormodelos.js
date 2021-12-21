const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const jugadoreSchema = new Schema({
    nombre: {
        type: "string",
        unique: true,
        required: true
    },
    identificacion: {
        type: "string",
        required: true
    },
    usuario: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    clave: {
        type: "string",
        required: true
    },
    rclave: {
        type: "string",
        required: true
    },
    tipousuario: {
        type: "string",
        required: true
    },
    estado: {
        type: "string",
        required: true
    }
});
const jugadormodelos = Mongoose.model("jugadores", jugadoreSchema);
exports.jugadormodelos = jugadormodelos;