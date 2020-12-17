"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NODE_DATABASE_DEBUG = exports.NODE_UPDATE_DATABASE = exports.EXPRESS_PORT = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const EXPRESS_PORT = process.env.NODE_SERVER_PORT;
exports.EXPRESS_PORT = EXPRESS_PORT;
const NODE_UPDATE_DATABASE = !!Number(process.env.NODE_UPDATE_DATABASE);
exports.NODE_UPDATE_DATABASE = NODE_UPDATE_DATABASE;
const NODE_DATABASE_DEBUG = !!Number(process.env.NODE_DATABASE_DEBUG);
exports.NODE_DATABASE_DEBUG = NODE_DATABASE_DEBUG;