"use strict";

var _FormBuilderValuesModel = _interopRequireDefault(require("../models/FormBuilderValuesModel"));

var _formBuilderElements = require("../controllers/formBuilderElements");

var _dotenv = require("./dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_formBuilderElements.formModelsList.forEach(el => {
  _FormBuilderValuesModel.default.belongsTo(_formBuilderElements.mapModels[el], {
    as: el,
    foreignKey: `${el}Id`
  });
});

_formBuilderElements.mapModels['Steps'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['HtmlComponent'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['Button'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['TextInput'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['LongTextInput'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['NumberInput'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['SelectList'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['RadioButton'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['Checkbox'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['DatetimePicker'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['Rating'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['ElSwitch'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['Carousel'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['Upload'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_formBuilderElements.mapModels['Arrow'].sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});

_FormBuilderValuesModel.default.sync({
  force: _dotenv.NODE_UPDATE_DATABASE
});