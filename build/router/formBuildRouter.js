"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _formBuilderElements = require("../controllers/formBuilderElements");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const router = (0, _express.Router)();
router.put("/:formId", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    return res.send(yield (0, _formBuilderElements.formUpdate)(req.params.formId, req.body));
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get("/:formId", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    return res.send(yield (0, _formBuilderElements.getFormElements)(req.params.formId, req.query));
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.delete("/:formType/:id", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    return res.send(yield (0, _formBuilderElements.deleteFormElement)(req.params.formType, req.params.id));
  });

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports.default = _default;