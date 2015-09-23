var
  _ = require('underscore'),
  sqlString = require('sqlstring')

var app = module.exports = function (d) {
  if (_.isString(d))
    return sqlString(d)
  if (_.isArray(d))
    return d.map(app).join(', ')
  if (_.isObject(d))
    return app(_.map(_.keys(d), function (key) {return _.pick(d, key)}))
}
