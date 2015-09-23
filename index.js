var
  _ = require('underscore'),
  sqlString = require('sqlstring')

var app = module.exports = function (d) {
  if (_.isString(d))
    return sqlString.escapeId(d)
  if (_.isArray(d))
    return d.map(app).join(', ')
  if (_.isObject(d))
    return _.map(d, function (value, key) {return sqlString.escapeId(key) + ' ' + value}).join(', ')
}
