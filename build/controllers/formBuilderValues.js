"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInputValues = exports.inputValueSave = exports.hasInputError = exports.inputValuesSave = void 0;

var _FormBuilderValuesModel = _interopRequireDefault(require("../models/FormBuilderValuesModel"));

var _formBuilderElements = require("./formBuilderElements");

var _validationErrors = _interopRequireDefault(require("../constants/validationErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const include = _formBuilderElements.formModelsList.map(as => ({
  as,
  model: _formBuilderElements.mapModels[as]
}));

const inputValuesSave = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (list) {
    const validationError = yield hasInputError(list);

    if (validationError.length) {
      throw validationError;
    }

    for (let el of list) {
      try {
        yield inputValueSave(el.input.fieldType, el.input.id, el.value);
      } catch (e) {
        console.log(e);
      }
    }

    return getInputValues();
  });

  return function inputValuesSave(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.inputValuesSave = inputValuesSave;

const hasInputError = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (list) {
    let errorList = [];

    for (let i in list) {
      var _mapModels$list$i$inp;

      const input = yield (_mapModels$list$i$inp = _formBuilderElements.mapModels[list[i].input.fieldType]) === null || _mapModels$list$i$inp === void 0 ? void 0 : _mapModels$list$i$inp.findOne({
        where: {
          id: list[i].input.id
        },
        raw: true,
        nest: true
      });

      for (let rule of _validationErrors.default) {
        const element = _objectSpread({}, list[i], {
          input,
          error: rule
        });

        if (!rule.validator.call(element)) {
          errorList.push(element);
        }
      }
    }

    return errorList;
  });

  return function hasInputError(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.hasInputError = hasInputError;

const inputValueSave = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (type, id, value) {
    var _mapModels$type;

    let input = yield (_mapModels$type = _formBuilderElements.mapModels[type]) === null || _mapModels$type === void 0 ? void 0 : _mapModels$type.findOne({
      where: {
        id
      }
    });
    let record = yield _FormBuilderValuesModel.default.findOne({
      where: {
        [`${type}Id`]: id
      },
      include
    });

    if (!record) {
      record = yield _FormBuilderValuesModel.default.create({
        [`${type}Id`]: input.get('id')
      }, {
        include
      });
    }

    record.value = value;
    return yield record.save();
  });

  return function inputValueSave(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.inputValueSave = inputValueSave;

const getInputValues = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* () {
    const models = yield _FormBuilderValuesModel.default.findAll({
      attributes: ["id", "value"],
      include: include.map(rest => _objectSpread({}, rest)),
      raw: true,
      nest: true
    });

    for (let model of models) {
      _formBuilderElements.formModelsList.forEach(el => {
        if (model[el].id) {
          model.input = model[el];
        }

        delete model[el];
      });
    }

    return models;
  });

  return function getInputValues() {
    return _ref4.apply(this, arguments);
  };
}();

exports.getInputValues = getInputValues;