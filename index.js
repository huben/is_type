const toString = Object.prototype.toString;

exports.isArray = val => {
  return toString.call(val) === '[object Array]';
} 

exports.isArrayBuffer = val => {
  return toString.call(val) === '[object ArrayBuffer]';
}

exports.isString = val => {
  return typeof val === 'string';
}

exports.isNumber = val => {
  return typeof val === 'number';
}

exports.isUndefined = val => {
  return typeof val === 'undefined';
}

exports.isObject = val => {
  return val != null && typeof val === 'object';
}

exports.isDate = val => {
  return toString.call(val) === '[object Date]';
}

exports.isFile = val => {
  return toString.call(val) === '[object File]';
}

exports.isFunction = val => {
  return toString.call(val) === '[object Function]'
}

exports.isStream = val => {
  return isObject(val) && isFunction(val.pipe)
}

exports.isFinite = val => {
  return Number.isFinite(val);
}

exports.isNaN = val => {
  return Number.isNaN(val);
}

exports.isGenerator = val => {
  return isObject(val) && isFunction(val.next) && isFunction(val.throw);
}

exports.isPromise = val => {
  return isObject(val) && isFunction(val.then);
}

exports.isRegExp = val => {
  return val instanceof RegExp;
}