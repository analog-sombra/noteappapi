"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Notes api',
            version: '1.0.0',
            contact: {
                name: "analog-sombra",
                email: "analogsombra@gmail.com",
                url: "analogsombra.com"
            }
        },
        components: {}
    },
    apis: ['./src/routes/*.ts'],
};
const Specification = (0, swagger_jsdoc_1.default)(options);
const swaggerDocs = (app, port) => {
    console.log("working");
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(Specification));
    // app.get("/docs", (req: Request, res: Response) => {
    //     res.setHeader("Content-Type", 'application/json');
    //     res.send(Specification);
    // });
    console.log(`docs available at http://localhost:${port}/docs`);
};
exports.swaggerDocs = swaggerDocs;
