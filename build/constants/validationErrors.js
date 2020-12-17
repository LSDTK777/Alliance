"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  key: "isRequired",
  message: "Required Field",

  validator() {
    return !(this.input.isRequired && !this.value);
  }

}, {
  key: "phone",
  pattern: "phone",
  label: "Canada Phone Numbers",
  message: "Should be a phone number",

  validator() {
    if (this.input.pattern !== "phone") {
      return true;
    }

    let re = new RegExp("^((\\+1)?[\\s-]?)?\\(?[2-9]\\d\\d\\)?[\\s-]?[2-9]\\d\\d[\\s-]?\\d\\d\\d\\d");
    return re.test(this.value);
  }

}, {
  key: "email",
  pattern: "email",
  label: "Email validation",
  message: "Should be a email",

  validator() {
    if (this.input.pattern !== "email") {
      return true;
    }

    let re = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    return re.test(this.value);
  }

}];
exports.default = _default;