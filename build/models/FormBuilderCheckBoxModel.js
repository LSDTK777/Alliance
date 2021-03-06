"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _db = _interopRequireDefault(require("../plugins/db"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint key-spacing: ["off"]*/
const Model = _db.default.define('form_builder_checkbox', {
  fieldType: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  label: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  formGroup: {
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
  isRequired: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  isHelpBlockVisible: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  isPlaceholderVisible: {
    type: _sequelize.DataTypes.BOOLEAN,
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
  labelWidth: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  isFromUrl: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  options: {
    type: _sequelize.DataTypes.JSON,
    allowNull: false
  },
  advancedOptions: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false
  },
  dataUrl: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  labelField: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  valueField: {
    type: _sequelize.DataTypes.STRING,
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

var _default = Model;
exports.default = _default;