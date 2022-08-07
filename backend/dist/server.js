"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webpack_1 = __importDefault(require("webpack"));
const webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
new webpack_dev_server_1.default((0, webpack_1.default)({}), {
    hot: true,
    historyApiFallback: true,
}).listen(3000, 'localhost', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});
