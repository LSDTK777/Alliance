"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _formBuilderValues = require("../controllers/formBuilderValues");

var _multer = _interopRequireDefault(require("../plugins/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const router = (0, _express.Router)();
router.put("/", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      res.send(yield (0, _formBuilderValues.inputValuesSave)(req.body.list));
    } catch (e) {
      res.status(400).send(e);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post("/upload", _multer.default.single("file"), (req, res) => res.send(req.file));
router.get("/", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    let values = Object.values(req.query).map(JSON.parse);
    res.send(yield (0, _formBuilderValues.getInputValues)(values));
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;