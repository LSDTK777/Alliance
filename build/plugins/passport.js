"use strict";

var _crypto = _interopRequireDefault(require("crypto"));

var _sqlite = _interopRequireDefault(require("sqlite3"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = new _sqlite.default.Database('./database/database.sqlite3');

function hashPassword(password, salt) {
  const hash = _crypto.default.createHash('sha256');

  hash.update(password);
  hash.update(salt);
  return hash.digest('hex');
}

_passport.default.use(new _passportLocal.Strategy(function (username, password, done) {
  db.get('SELECT salt FROM users WHERE username = ?', username, function (err, row) {
    if (!row) return done(null, false);
    var hash = hashPassword(password, row.salt);
    db.get('SELECT username, id FROM users WHERE username = ? AND password = ?', username, hash, function (err, row) {
      if (!row) return done(null, false);
      return done(null, row);
    });
  });
}));

_passport.default.serializeUser(function (user, done) {
  return done(null, user.id);
});

_passport.default.deserializeUser(function (id, done) {
  db.get('SELECT id, username FROM users WHERE id = ?', id, function (err, row) {
    if (!row) return done(null, false);
    return done(null, row);
  });
});