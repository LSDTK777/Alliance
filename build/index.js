"use strict";

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("./router"));

require("./plugins/passport");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = require("./plugins/dotenv");

require("./plugins/dbRel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use('/api', _router.default);
app.listen(_dotenv.EXPRESS_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.NODE_SERVER_PORT}`);
});