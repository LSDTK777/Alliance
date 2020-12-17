"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _formBuildRouter = _interopRequireDefault(require("./formBuildRouter"));

var _formValuesRouter = _interopRequireDefault(require("./formValuesRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/form-builder/', _formBuildRouter.default);
router.use('/form-values/', _formValuesRouter.default);
var _default = router;
exports.default = _default;