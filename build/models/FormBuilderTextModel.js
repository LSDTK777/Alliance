"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../plugins/db"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint key-spacing: ["off"]*/
const FormBuilderTextModel = _db.default.define('form_builder_text', {
  fieldType: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  group: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  isUnique: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  span: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  htmlContent: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  advancedOptions: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  step: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  order: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  }
}, {// Other model options go here
});

var _default = FormBuilderTextModel;
exports.default = _default;