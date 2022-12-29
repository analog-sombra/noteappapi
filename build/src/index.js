"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const express_1 = __importDefault(require("express"));
const notes_1 = require("./routers/notes");
const cors_1 = __importDefault(require("cors"));
require("dotenv");
const swagger_1 = require("./swagger");
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
//middlewhare
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
app.use(notes_1.noteRouter);
app.get("/", (req, res) => {
    res.send("welcome to my note application");
});
//routes
app.listen(PORT, () => {
    console.log("great");
    // console.log(`Example app listening on port ${PORT}`);
    try {
        (0, swagger_1.swaggerDocs)(app, PORT);
    }
    catch (e) {
        console.log(e);
    }
});
