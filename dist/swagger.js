"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'TourAxis',
            version: '1.0.0',
            description: 'Tour Axis API',
        },
        servers: [
            {
                url: `http://localhost:${(_a = process.env.SERVER_PORT) !== null && _a !== void 0 ? _a : 3000}`,
                description: 'Development Server',
            },
        ],
    },
    apis: ['./routes/*.ts'], // Change the path based on your project structure
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = specs;
