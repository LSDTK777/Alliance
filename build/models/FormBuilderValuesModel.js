"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dataTypes = void 0;

var _db = _interopRequireDefault(require("../plugins/db"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint key-spacing: ["off"]*/
const dataTypes = {
  INPUT: "TextInput",
  INPUT_LONG: "LongTextInput",
  INPUT_NUMBER: "NumberInput",
  INPUT_DATETIME: "SelectList",
  SELECT: "RadioButton",
  RADIO: "Checkbox",
  CHECKBOX: "DatetimePicker",
  RATING: "Rating",
  SWITCH: "ElSwitch",
  FILE: "Upload"
};
exports.dataTypes = dataTypes;

const Model = _db.default.define('form_builder_values', {
  value: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  }
}, {// Other model options go here
});

var _default = Model;
exports.default = _default;