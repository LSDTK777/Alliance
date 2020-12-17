"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormElements = exports.deleteFormElement = exports.formUpdate = exports.mapModels = exports.formModelsList = void 0;

var _FormBuilderStepsModel = _interopRequireDefault(require("../models/FormBuilderStepsModel"));

var _FormBuilderTextModel = _interopRequireDefault(require("../models/FormBuilderTextModel"));

var _FormBuilderButtonModel = _interopRequireDefault(require("../models/FormBuilderButtonModel"));

var _FormBuilderInputModel = _interopRequireDefault(require("../models/FormBuilderInputModel"));

var _FormBuilderLongInputModel = _interopRequireDefault(require("../models/FormBuilderLongInputModel"));

var _FormBuilderNumberInputModel = _interopRequireDefault(require("../models/FormBuilderNumberInputModel"));

var _FormBuilderSelectModel = _interopRequireDefault(require("../models/FormBuilderSelectModel"));

var _FormBuilderRadioButtonModel = _interopRequireDefault(require("../models/FormBuilderRadioButtonModel"));

var _FormBuilderDateTimeModel = _interopRequireDefault(require("../models/FormBuilderDateTimeModel"));

var _FormBuilderSwitchModel = _interopRequireDefault(require("../models/FormBuilderSwitchModel"));

var _FormBuilderRatingModel = _interopRequireDefault(require("../models/FormBuilderRatingModel"));

var _FormBuilderArrowModel = _interopRequireDefault(require("../models/FormBuilderArrowModel"));

var _FormBuilderCarouselModel = _interopRequireDefault(require("../models/FormBuilderCarouselModel"));

var _FormBuilderUploadFileModel = _interopRequireDefault(require("../models/FormBuilderUploadFileModel"));

var _FormBuilderCheckBoxModel = _interopRequireDefault(require("../models/FormBuilderCheckBoxModel"));

var _FormBuilderValuesModel = _interopRequireDefault(require("../models/FormBuilderValuesModel"));

var _sequelize = require("sequelize");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const formModelsList = ["TextInput", "LongTextInput", "NumberInput", "SelectList", "RadioButton", "Checkbox", "DatetimePicker", "Rating", "ElSwitch", "Upload"];
exports.formModelsList = formModelsList;
const mapModels = {
  Steps: _FormBuilderStepsModel.default,
  HtmlComponent: _FormBuilderTextModel.default,
  Button: _FormBuilderButtonModel.default,
  TextInput: _FormBuilderInputModel.default,
  LongTextInput: _FormBuilderLongInputModel.default,
  NumberInput: _FormBuilderNumberInputModel.default,
  SelectList: _FormBuilderSelectModel.default,
  RadioButton: _FormBuilderRadioButtonModel.default,
  Checkbox: _FormBuilderCheckBoxModel.default,
  DatetimePicker: _FormBuilderDateTimeModel.default,
  Rating: _FormBuilderRatingModel.default,
  ElSwitch: _FormBuilderSwitchModel.default,
  Carousel: _FormBuilderCarouselModel.default,
  Upload: _FormBuilderUploadFileModel.default,
  Arrow: _FormBuilderArrowModel.default
};
exports.mapModels = mapModels;

const formUpdate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (step, formElements) {
    const response = [];
    const ids = {};

    for (let i in formElements) {
      var _formElements$i, _mapModels$formElemen, _record;

      if (!mapModels[(_formElements$i = formElements[i]) === null || _formElements$i === void 0 ? void 0 : _formElements$i.fieldType]) {
        continue;
      }

      formElements[i].order = i;
      if (formElements[i].fieldType === "Steps" || formElements[i].fieldType === "Arrow") formElements[i].step = 1;else formElements[i].step = step;
      let record = formElements[i].id && (yield (_mapModels$formElemen = mapModels[formElements[i].fieldType]) === null || _mapModels$formElemen === void 0 ? void 0 : _mapModels$formElemen.findOne({
        where: {
          id: formElements[i].id
        }
      }));

      if (!record) {
        var _mapModels$formElemen2;

        record = yield (_mapModels$formElemen2 = mapModels[formElements[i].fieldType]) === null || _mapModels$formElemen2 === void 0 ? void 0 : _mapModels$formElemen2.create(formElements[i]);
      } else record.update(formElements[i]);

      response.push(record);

      if (!ids[formElements[i].fieldType]) {
        ids[formElements[i].fieldType] = [];
      }

      ids[formElements[i].fieldType].push((_record = record) === null || _record === void 0 ? void 0 : _record.id);
    }

    return response;
  });

  return function formUpdate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.formUpdate = formUpdate;

const deleteFormElement = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (formType, id) {
    var _mapModels$formType;

    if (formModelsList.includes(formType)) yield _FormBuilderValuesModel.default.destroy({
      where: {
        [`${formType}Id`]: id
      }
    });
    yield (_mapModels$formType = mapModels[formType]) === null || _mapModels$formType === void 0 ? void 0 : _mapModels$formType.destroy({
      where: {
        id
      }
    });
    return [];
  });

  return function deleteFormElement(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.deleteFormElement = deleteFormElement;

const getFormElements = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (step) {
    let result = [];

    for (let i in mapModels) {
      let elements = (0, _lodash.cloneDeep)(yield mapModels[i].findAll({
        where: {
          [_sequelize.Op.or]: [{
            step
          }, {
            fieldType: 'Steps'
          }, {
            fieldType: 'Arrow'
          }]
        }
      }));
      result.sort((a, b) => a.order - b.order);

      for (let element of elements) {
        element.fieldType = i;
        result.push(element);
      }
    }

    return result;
  });

  return function getFormElements(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getFormElements = getFormElements;