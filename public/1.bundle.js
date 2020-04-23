(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
} // these aren't really private, but nor are they really useful to document

/**
 * @private
 */


var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}(_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */


var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */


var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */


var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */


var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */


var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */


var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);
/**
 * @private
 */


var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/

/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}

function isNumber(o) {
  return typeof o === "number";
}

function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}

function isString(o) {
  return typeof o === "string";
}

function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES


function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}

function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}

function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS


function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS


function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x


function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}

function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}

function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS


function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)


function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}

function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING


function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = _extends({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330


function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION


function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}

function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}

function formatOffset(offset, format) {
  var hours = Math.trunc(offset / 60),
      minutes = Math.abs(offset % 60),
      sign = hours >= 0 && !Object.is(hours, -0) ? "+" : "-",
      base = "" + sign + Math.abs(hours);

  switch (format) {
    case "short":
      return "" + sign + padStart(Math.abs(hours), 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return minutes > 0 ? base + ":" + minutes : base;

    case "techie":
      return "" + sign + padStart(Math.abs(hours), 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}

function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}

var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}

var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];

function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];
    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = splits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var token = _ref;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    } // we get some perf out of doing this here, annoyingly


    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = _extends({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref2) {
      var literal = _ref2.literal,
          val = _ref2.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();
/**
 * @interface
 */


var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */

  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;
  /** @override **/

  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */


  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;
  /** @override **/

  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */


  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;
  /** @override **/

  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;
  /** @override **/


  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);
/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */


var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;
  /** @override **/

  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);
/**
 * @private
 */


function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */


  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = _extends({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = _extends({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(_extends({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(_extends({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    } // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)


    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();
/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */


function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [_extends(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);

function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = _extends({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = _extends({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size


var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  } // deep merge for vals


  var conf = {
    values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(_extends({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = _extends(parsed, opts);

      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    } // reverse-compat since 1.2; we always round down now, never up, and we do it by default


    var fmtOpts = _extends({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });

    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};

    var base = _extends({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = orderedUnits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var k = _ref;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i2 = 0, _Object$keys = Object.keys(this.values); _i2 < _Object$keys.length; _i2++) {
      var k = _Object$keys[_i2];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;

    var mixed = _extends(this.values, normalizeObject(values, Duration.normalizeUnit, []));

    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        locale = _ref2.locale,
        numberingSystem = _ref2.numberingSystem,
        conversionAccuracy = _ref2.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _iterator2 = orderedUnits, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i3 >= _iterator2.length) break;
        _ref3 = _iterator2[_i3++];
      } else {
        _i3 = _iterator2.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var k = _ref3;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i4 = 0, _Object$keys2 = Object.keys(this.values); _i4 < _Object$keys2.length; _i4++) {
      var k = _Object$keys2[_i4];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */


  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator3 = orderedUnits, _isArray3 = Array.isArray(_iterator3), _i5 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray3) {
        if (_i5 >= _iterator3.length) break;
        _ref4 = _iterator3[_i5++];
      } else {
        _i5 = _iterator3.next();
        if (_i5.done) break;
        _ref4 = _i5.value;
      }

      var u = _ref4;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();

function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */

  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var i = _ref3;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        _ref4$separator = _ref4.separator,
        separator = _ref4$separator === void 0 ? " – " : _ref4$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();
/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */


var Info = /*#__PURE__*/function () {
  function Info() {}
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */


  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff(earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(_extends(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}

function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}

function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return _extends({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}

function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}

function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return _extends({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}

function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return _extends({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}

function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}

function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}

function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(_extends({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var _dur;

  var keys = Object.keys(dur.values);

  if (keys.indexOf("milliseconds") === -1) {
    keys.push("milliseconds");
  }

  dur = (_dur = dur).shiftTo.apply(_dur, keys);

  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = _extends({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(_extends(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = orderedUnits$1, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var u = _ref2;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = opts.units, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref3 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref3 = _i2.value;
    }

    var unit = _ref3;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref4 = [config.old.c, config.old.o];
        c = _ref4[0];
        o = _ref4[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = units, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref5 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref5 = _i3.value;
      }

      var u = _ref5;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */


  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref6 = _temp === void 0 ? {} : _temp,
        _ref6$keepLocalTime = _ref6.keepLocalTime,
        keepLocalTime = _ref6$keepLocalTime === void 0 ? false : _ref6$keepLocalTime,
        _ref6$keepCalendarTim = _ref6.keepCalendarTime,
        keepCalendarTime = _ref6$keepCalendarTim === void 0 ? false : _ref6$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref7 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref7.locale,
        numberingSystem = _ref7.numberingSystem,
        outputCalendar = _ref7.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(_extends(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(_extends(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = _extends(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.local().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref8 = _temp3 === void 0 ? {} : _temp3,
        _ref8$format = _ref8.format,
        format = _ref8$format === void 0 ? "extended" : _ref8$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref9 = _temp4 === void 0 ? {} : _temp4,
        _ref9$suppressMillise = _ref9.suppressMilliseconds,
        suppressMilliseconds = _ref9$suppressMillise === void 0 ? false : _ref9$suppressMillise,
        _ref9$suppressSeconds = _ref9.suppressSeconds,
        suppressSeconds = _ref9$suppressSeconds === void 0 ? false : _ref9$suppressSeconds,
        _ref9$includeOffset = _ref9.includeOffset,
        includeOffset = _ref9$includeOffset === void 0 ? true : _ref9$includeOffset,
        _ref9$format = _ref9.format,
        format = _ref9$format === void 0 ? "extended" : _ref9$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref10 = _temp5 === void 0 ? {} : _temp5,
        _ref10$includeOffset = _ref10.includeOffset,
        includeOffset = _ref10$includeOffset === void 0 ? true : _ref10$includeOffset,
        _ref10$includeZone = _ref10.includeZone,
        includeZone = _ref10$includeZone === void 0 ? false : _ref10$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};

    var base = _extends({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = _extends({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), _extends(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, _extends(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();

function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvZW5nbGlzaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvZm9ybWF0dGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW1wbC9pbnZhbGlkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvem9uZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3pvbmVzL2xvY2FsWm9uZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3pvbmVzL0lBTkFab25lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvem9uZXMvZml4ZWRPZmZzZXRab25lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvem9uZXMvaW52YWxpZFpvbmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9pbXBsL3pvbmVVdGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9pbXBsL2xvY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvcmVnZXhQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW5mby5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvZGlnaXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW1wbC90b2tlblBhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ltcGwvY29udmVyc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9kYXRldGltZS5qcyJdLCJuYW1lcyI6WyJMdXhvbkVycm9yIiwiRXJyb3IiLCJJbnZhbGlkRGF0ZVRpbWVFcnJvciIsInJlYXNvbiIsIkludmFsaWRJbnRlcnZhbEVycm9yIiwiSW52YWxpZER1cmF0aW9uRXJyb3IiLCJDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciIsIkludmFsaWRVbml0RXJyb3IiLCJJbnZhbGlkQXJndW1lbnRFcnJvciIsIlpvbmVJc0Fic3RyYWN0RXJyb3IiLCJuIiwicyIsImwiLCJEQVRFX1NIT1JUIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiREFURV9NRUQiLCJEQVRFX0ZVTEwiLCJEQVRFX0hVR0UiLCJ3ZWVrZGF5IiwiVElNRV9TSU1QTEUiLCJob3VyIiwibWludXRlIiwiVElNRV9XSVRIX1NFQ09ORFMiLCJzZWNvbmQiLCJUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUIiwidGltZVpvbmVOYW1lIiwiVElNRV9XSVRIX0xPTkdfT0ZGU0VUIiwiVElNRV8yNF9TSU1QTEUiLCJob3VyMTIiLCJUSU1FXzI0X1dJVEhfU0VDT05EUyIsIlRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQiLCJUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQiLCJEQVRFVElNRV9TSE9SVCIsIkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyIsIkRBVEVUSU1FX01FRCIsIkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMiLCJEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZIiwiREFURVRJTUVfRlVMTCIsIkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTIiwiREFURVRJTUVfSFVHRSIsIkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTIiwibyIsIk9iamVjdCIsIkludGwiLCJpc1VuZGVmaW5lZCIsIkFycmF5IiwiYXJyIiwicGFpciIsImJ5IiwiY29tcGFyZSIsImJlc3QiLCJhIiwib2JqIiwiaXNJbnRlZ2VyIiwidGhpbmciLCJ4IiwiTWF0aCIsImlucHV0Iiwic3RyaW5nIiwicGFyc2VJbnQiLCJmcmFjdGlvbiIsImYiLCJwYXJzZUZsb2F0IiwidG93YXJkWmVybyIsImZhY3RvciIsInJvdW5kZXIiLCJudW1iZXIiLCJpc0xlYXBZZWFyIiwibW9kTW9udGgiLCJmbG9vck1vZCIsIm1vZFllYXIiLCJkIiwiRGF0ZSIsInAxIiwid2Vla1llYXIiLCJsYXN0IiwicDIiLCJ0aW1lWm9uZSIsImRhdGUiLCJpbnRsT3B0cyIsIm1vZGlmaWVkIiwib2Zmc2V0Rm9ybWF0IiwiaW50bCIsImhhc0ludGwiLCJoYXNGb3JtYXRUb1BhcnRzIiwicGFyc2VkIiwibSIsIndpdGhvdXQiLCJpbmNsdWRlZCIsImRpZmZlZCIsInRyaW1tZWQiLCJvZmZIb3VyIiwiTnVtYmVyIiwib2ZmTWluIiwib2ZmTWluU2lnbmVkIiwibnVtZXJpY1ZhbHVlIiwidmFsdWUiLCJub3JtYWxpemVkIiwiaGFzT3duUHJvcGVydHkiLCJub25Vbml0S2V5cyIsInYiLCJub3JtYWxpemVyIiwiYXNOdW1iZXIiLCJob3VycyIsIm9mZnNldCIsIm1pbnV0ZXMiLCJzaWduIiwiYmFzZSIsInBhZFN0YXJ0IiwicGljayIsImlhbmFSZWdleCIsIkpTT04iLCJtb250aHNMb25nIiwibW9udGhzU2hvcnQiLCJtb250aHNOYXJyb3ciLCJ3ZWVrZGF5c0xvbmciLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNOYXJyb3ciLCJtZXJpZGllbXMiLCJlcmFzTG9uZyIsImVyYXNTaG9ydCIsImVyYXNOYXJyb3ciLCJkdCIsIndlZWtkYXlzIiwibW9udGhzIiwiZXJhcyIsIm51bWVyaWMiLCJuYXJyb3ciLCJ1bml0cyIsInllYXJzIiwicXVhcnRlcnMiLCJ3ZWVrcyIsImRheXMiLCJzZWNvbmRzIiwibGFzdGFibGUiLCJpc0RheSIsInVuaXQiLCJpc0luUGFzdCIsImNvdW50IiwiZm10VmFsdWUiLCJzaW5ndWxhciIsImxpbFVuaXRzIiwiZm10VW5pdCIsImZpbHRlcmVkIiwia2V5Iiwic3RyaW5naWZ5IiwiZGF0ZVRpbWVIdWdlIiwidG9rZW4iLCJ0b2tlblRvU3RyaW5nIiwibWFjcm9Ub2tlblRvRm9ybWF0T3B0cyIsIkQiLCJERCIsIkRERCIsIkREREQiLCJ0IiwidHQiLCJ0dHQiLCJ0dHR0IiwiVCIsIlRUIiwiVFRUIiwiVFRUVCIsImZmIiwiZmZmIiwiZmZmZiIsIkYiLCJGRiIsIkZGRiIsIkZGRkYiLCJGb3JtYXRzIiwiRm9ybWF0dGVyIiwiY3JlYXRlIiwib3B0cyIsInBhcnNlRm9ybWF0IiwiY3VycmVudCIsImN1cnJlbnRGdWxsIiwiYnJhY2tldGVkIiwic3BsaXRzIiwiaSIsImZtdCIsImMiLCJsaXRlcmFsIiwidmFsIiwiZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQiLCJkZiIsImZvcm1hdERhdGVUaW1lIiwiZm9ybWF0RGF0ZVRpbWVQYXJ0cyIsInJlc29sdmVkT3B0aW9ucyIsIm51bSIsInAiLCJmb3JtYXREYXRlVGltZUZyb21TdHJpbmciLCJrbm93bkVuZ2xpc2giLCJ1c2VEYXRlVGltZUZvcm1hdHRlciIsImZvcm1hdE9mZnNldCIsIm1lcmlkaWVtIiwiRW5nbGlzaCIsInN0YW5kYWxvbmUiLCJsZW5ndGgiLCJtYXliZU1hY3JvIiwiZm9ybWF0T3B0cyIsImVyYSIsImZvcm1hdCIsImFsbG93WiIsImxvY2FsZSIsInN0cmluZ2lmeVRva2VucyIsImZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyIsInRva2VuVG9GaWVsZCIsIm1hcHBlZCIsImxpbGR1ciIsInRva2VucyIsInJlYWxUb2tlbnMiLCJmb3VuZCIsImNvbGxhcHNlZCIsImR1ciIsIkludmFsaWQiLCJ0b01lc3NhZ2UiLCJab25lIiwib2Zmc2V0TmFtZSIsImVxdWFscyIsInNpbmdsZXRvbiIsIkxvY2FsWm9uZSIsInBhcnNlWm9uZUluZm8iLCJvdGhlclpvbmUiLCJtYXRjaGluZ1JlZ2V4IiwiUmVnRXhwIiwiZHRmQ2FjaGUiLCJ0eXBlVG9Qb3MiLCJkdGYiLCJmTW9udGgiLCJmRGF5IiwiZlllYXIiLCJmSG91ciIsImZNaW51dGUiLCJmU2Vjb25kIiwiZm9ybWF0dGVkIiwiZmlsbGVkIiwidHlwZSIsInBvcyIsImlhbmFab25lQ2FjaGUiLCJJQU5BWm9uZSIsInJlc2V0Q2FjaGUiLCJpc1ZhbGlkU3BlY2lmaWVyIiwiaXNWYWxpZFpvbmUiLCJ6b25lIiwicGFyc2VHTVRPZmZzZXQiLCJtYXRjaCIsInNwZWNpZmllciIsIm1ha2VEVEYiLCJwYXJ0c09mZnNldCIsImhhY2t5T2Zmc2V0IiwiYWRqdXN0ZWRIb3VyIiwiYXNVVEMiLCJvYmpUb0xvY2FsVFMiLCJtaWxsaXNlY29uZCIsImFzVFMiLCJvdmVyIiwiRml4ZWRPZmZzZXRab25lIiwiaW5zdGFuY2UiLCJwYXJzZVNwZWNpZmllciIsInIiLCJzaWduZWRPZmZzZXQiLCJJbnZhbGlkWm9uZSIsImlzU3RyaW5nIiwibG93ZXJlZCIsImlzTnVtYmVyIiwibm93IiwiZGVmYXVsdFpvbmUiLCJkZWZhdWx0TG9jYWxlIiwiZGVmYXVsdE51bWJlcmluZ1N5c3RlbSIsImRlZmF1bHRPdXRwdXRDYWxlbmRhciIsInRocm93T25JbnZhbGlkIiwiU2V0dGluZ3MiLCJyZXNldENhY2hlcyIsIkxvY2FsZSIsInoiLCJub3JtYWxpemVab25lIiwibnVtYmVyaW5nU3lzdGVtIiwib3V0cHV0Q2FsZW5kYXIiLCJpbnRsRFRDYWNoZSIsImludGxOdW1DYWNoZSIsImluZiIsImludGxSZWxDYWNoZSIsImNhY2hlS2V5T3B0cyIsInN5c0xvY2FsZUNhY2hlIiwiY29tcHV0ZWRTeXMiLCJ1SW5kZXgiLCJsb2NhbGVTdHIiLCJzbWFsbGVyIiwib3B0aW9ucyIsImdldENhY2hlZERURiIsImNhbGVuZGFyIiwibXMiLCJEYXRlVGltZSIsIm1vZGUiLCJsb2MiLCJlbmdsaXNoRm4iLCJpbnRsRm4iLCJQb2x5TnVtYmVyRm9ybWF0dGVyIiwidXNlR3JvdXBpbmciLCJnZXRDYWNoZWRJTkYiLCJmaXhlZCIsInJvdW5kVG8iLCJQb2x5RGF0ZUZvcm1hdHRlciIsInRva2VuRm9ybWF0IiwiZm9ybWF0VG9QYXJ0cyIsIlBvbHlSZWxGb3JtYXR0ZXIiLCJzdHlsZSIsImhhc1JlbGF0aXZlIiwiZ2V0Q2FjaGVkUlRGIiwiZnJvbU9wdHMiLCJkZWZhdWx0VG9FTiIsInNwZWNpZmllZExvY2FsZSIsImxvY2FsZVIiLCJzeXN0ZW1Mb2NhbGUiLCJudW1iZXJpbmdTeXN0ZW1SIiwib3V0cHV0Q2FsZW5kYXJSIiwiZnJvbU9iamVjdCIsInBhcnNlTG9jYWxlU3RyaW5nIiwicGFyc2VkTG9jYWxlIiwicGFyc2VkTnVtYmVyaW5nU3lzdGVtIiwicGFyc2VkT3V0cHV0Q2FsZW5kYXIiLCJudW1iZXJpbmciLCJpbnRsQ29uZmlnU3RyaW5nIiwibGlzdGluZ01vZGUiLCJkZWZhdWx0T0siLCJoYXNGVFAiLCJpc0FjdHVhbGx5RW4iLCJoYXNOb1dlaXJkbmVzcyIsImNsb25lIiwiYWx0cyIsInJlZGVmYXVsdFRvRU4iLCJyZWRlZmF1bHRUb1N5c3RlbSIsImxpc3RTdHVmZiIsImZvcm1hdFN0ciIsIm1hcE1vbnRocyIsIm1hcFdlZWtkYXlzIiwiZXh0cmFjdCIsInJlc3VsdHMiLCJtYXRjaGluZyIsIm51bWJlckZvcm1hdHRlciIsImR0Rm9ybWF0dGVyIiwicmVsRm9ybWF0dGVyIiwiaXNFbmdsaXNoIiwib3RoZXIiLCJzdXBwb3J0c0Zhc3ROdW1iZXJzIiwicmVnZXhlcyIsImZ1bGwiLCJleHRyYWN0b3JzIiwibWVyZ2VkVmFscyIsIm1lcmdlZFpvbmUiLCJjdXJzb3IiLCJleCIsIm5leHQiLCJwYXR0ZXJucyIsInJlZ2V4IiwiZXh0cmFjdG9yIiwia2V5cyIsInJldCIsInBhcnNlSW50ZWdlciIsIm9mZnNldFJlZ2V4IiwiaXNvVGltZUJhc2VSZWdleCIsImlzb1RpbWVSZWdleCIsImlzb1RpbWVFeHRlbnNpb25SZWdleCIsImlzb1ltZFJlZ2V4IiwiaXNvV2Vla1JlZ2V4IiwiaXNvT3JkaW5hbFJlZ2V4IiwiZXh0cmFjdElTT1dlZWtEYXRhIiwic2ltcGxlUGFyc2UiLCJleHRyYWN0SVNPT3JkaW5hbERhdGEiLCJzcWxZbWRSZWdleCIsInNxbFRpbWVSZWdleCIsInNxbFRpbWVFeHRlbnNpb25SZWdleCIsIml0ZW0iLCJpbnQiLCJwYXJzZU1pbGxpcyIsImxvY2FsIiwiZnVsbE9mZnNldCIsImlzb0R1cmF0aW9uIiwieWVhclN0ciIsIm1vbnRoU3RyIiwid2Vla1N0ciIsImRheVN0ciIsImhvdXJTdHIiLCJtaW51dGVTdHIiLCJzZWNvbmRTdHIiLCJtaWxsaXNlY29uZHNTdHIiLCJoYXNOZWdhdGl2ZVByZWZpeCIsIm1heWJlTmVnYXRlIiwibWlsbGlzZWNvbmRzIiwib2JzT2Zmc2V0cyIsIkdNVCIsIkVEVCIsIkVTVCIsIkNEVCIsIkNTVCIsIk1EVCIsIk1TVCIsIlBEVCIsIlBTVCIsInJlc3VsdCIsInVudHJ1bmNhdGVZZWFyIiwid2Vla2RheVN0ciIsInJmYzI4MjIiLCJvYnNPZmZzZXQiLCJtaWxPZmZzZXQiLCJvZmZIb3VyU3RyIiwib2ZmTWludXRlU3RyIiwiZnJvbVN0cmluZ3MiLCJyZmMxMTIzIiwicmZjODUwIiwiYXNjaWkiLCJpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4IiwiY29tYmluZVJlZ2V4ZXMiLCJpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCIsImlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4IiwiaXNvVGltZUNvbWJpbmVkUmVnZXgiLCJleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCIsImNvbWJpbmVFeHRyYWN0b3JzIiwiZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0IiwiZXh0cmFjdElTT09yZGluYWxEYXRhQW5kVGltZSIsImV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0IiwicGFyc2UiLCJwcmVwcm9jZXNzUkZDMjgyMiIsInNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgiLCJzcWxUaW1lQ29tYmluZWRSZWdleCIsImV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmUiLCJleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lIiwiSU5WQUxJRCIsImxvd09yZGVyTWF0cml4IiwiY2FzdWFsTWF0cml4IiwiZGF5c0luWWVhckFjY3VyYXRlIiwiZGF5c0luTW9udGhBY2N1cmF0ZSIsImFjY3VyYXRlTWF0cml4Iiwib3JkZXJlZFVuaXRzIiwicmV2ZXJzZVVuaXRzIiwiY2xlYXIiLCJjb25mIiwidmFsdWVzIiwiY29udmVyc2lvbkFjY3VyYWN5IiwiY29udiIsIm1hdHJpeCIsInJhdyIsImZyb21NYXAiLCJzYW1lU2lnbiIsInRvTWFwIiwiYWRkZWQiLCJhbnRpVHJ1bmMiLCJ2YWxzIiwiY29udmVydCIsIkR1cmF0aW9uIiwiYWNjdXJhdGUiLCJjb25maWciLCJmcm9tTWlsbGlzIiwibm9ybWFsaXplT2JqZWN0IiwiZnJvbUlTTyIsInBhcnNlSVNPRHVyYXRpb24iLCJpbnZhbGlkIiwiZXhwbGFuYXRpb24iLCJub3JtYWxpemVVbml0IiwicXVhcnRlciIsIndlZWsiLCJpc0R1cmF0aW9uIiwidG9Gb3JtYXQiLCJmbXRPcHRzIiwiZmxvb3IiLCJ0b09iamVjdCIsInRvSVNPIiwidG9KU09OIiwidG9TdHJpbmciLCJ2YWx1ZU9mIiwicGx1cyIsImZyaWVuZGx5RHVyYXRpb24iLCJrIiwibWludXMiLCJtYXBVbml0cyIsImZuIiwiZ2V0Iiwic2V0IiwibWl4ZWQiLCJyZWNvbmZpZ3VyZSIsImFzIiwibm9ybWFsaXplIiwibm9ybWFsaXplVmFsdWVzIiwic2hpZnRUbyIsImJ1aWx0IiwiYWNjdW11bGF0ZWQiLCJsYXN0VW5pdCIsIm93biIsIm5lZ2F0ZSIsIm5lZ2F0ZWQiLCJ1Iiwic3RhcnQiLCJJbnRlcnZhbCIsImVuZCIsImZyb21EYXRlVGltZXMiLCJidWlsdFN0YXJ0IiwiZnJpZW5kbHlEYXRlVGltZSIsImJ1aWx0RW5kIiwidmFsaWRhdGVFcnJvciIsInZhbGlkYXRlU3RhcnRFbmQiLCJhZnRlciIsImJlZm9yZSIsInRleHQiLCJlIiwiaXNJbnRlcnZhbCIsImhhc1NhbWUiLCJpc0VtcHR5IiwiaXNBZnRlciIsImlzQmVmb3JlIiwiY29udGFpbnMiLCJzcGxpdEF0IiwiZGF0ZVRpbWVzIiwic29ydGVkIiwic3BsaXRCeSIsImRpdmlkZUVxdWFsbHkiLCJvdmVybGFwcyIsImFidXRzU3RhcnQiLCJhYnV0c0VuZCIsImVuZ3VsZnMiLCJpbnRlcnNlY3Rpb24iLCJ1bmlvbiIsIm1lcmdlIiwiYiIsInNvZmFyIiwiZmluYWwiLCJ4b3IiLCJjdXJyZW50Q291bnQiLCJlbmRzIiwidGltZSIsImZsYXR0ZW5lZCIsImRpZmZlcmVuY2UiLCJpbnRlcnZhbHMiLCJ0b0lTT0RhdGUiLCJ0b0lTT1RpbWUiLCJzZXBhcmF0b3IiLCJ0b0R1cmF0aW9uIiwibWFwRW5kcG9pbnRzIiwibWFwRm4iLCJJbmZvIiwiaGFzRFNUIiwicHJvdG8iLCJpc1ZhbGlkSUFOQVpvbmUiLCJtb250aHNGb3JtYXQiLCJ3ZWVrZGF5c0Zvcm1hdCIsImZlYXR1cmVzIiwiaW50bFRva2VucyIsInpvbmVzIiwicmVsYXRpdmUiLCJ1dGNEYXlTdGFydCIsImtlZXBMb2NhbFRpbWUiLCJkaWZmZXJzIiwiZGF5RGlmZiIsImRpZmZlciIsImxvd2VzdE9yZGVyIiwiZGVsdGEiLCJoaWdoV2F0ZXIiLCJoaWdoT3JkZXJEaWZmcyIsInJlbWFpbmluZ01pbGxpcyIsImxhdGVyIiwibG93ZXJPcmRlclVuaXRzIiwiZHVyYXRpb24iLCJudW1iZXJpbmdTeXN0ZW1zIiwiYXJhYiIsImFyYWJleHQiLCJiYWxpIiwiYmVuZyIsImRldmEiLCJmdWxsd2lkZSIsImd1anIiLCJoYW5pZGVjIiwia2htciIsImtuZGEiLCJsYW9vIiwibGltYiIsIm1seW0iLCJtb25nIiwibXltciIsIm9yeWEiLCJ0YW1sZGVjIiwidGVsdSIsInRoYWkiLCJ0aWJ0IiwibGF0biIsIm51bWJlcmluZ1N5c3RlbXNVVEYxNiIsImhhbmlkZWNDaGFycyIsImlzTmFOIiwic3RyIiwiY29kZSIsIm1pbiIsIm1heCIsImFwcGVuZCIsIk1JU1NJTkdfRlRQIiwicG9zdCIsImRlc2VyIiwicGFyc2VEaWdpdHMiLCJzdHJpbmdzIiwic3RyaXBJbnNlbnNpdGl2aXRpZXMiLCJoIiwiZ3JvdXBzIiwib25lIiwiZGlnaXRSZWdleCIsInR3byIsInRocmVlIiwiZm91ciIsInNpeCIsIm9uZU9yVHdvIiwib25lVG9UaHJlZSIsIm9uZVRvU2l4Iiwib25lVG9OaW5lIiwidHdvVG9Gb3VyIiwiZm91clRvU2l4IiwiZXNjYXBlVG9rZW4iLCJ1bml0YXRlIiwib25lT2YiLCJpbnRVbml0Iiwic2ltcGxlIiwiaW52YWxpZFJlYXNvbiIsInBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsIiwic2hvcnQiLCJsb25nIiwiZGF5cGVyaW9kIiwiZGF5UGVyaW9kIiwicGFydCIsInJlIiwibWF0Y2hlcyIsImFsbCIsIm1hdGNoSW5kZXgiLCJoYW5kbGVycyIsInRvRmllbGQiLCJkdW1teURhdGVUaW1lQ2FjaGUiLCJmb3JtYXR0ZXIiLCJwYXJ0cyIsImdldER1bW15RGF0ZVRpbWUiLCJ0b2tlbkZvclBhcnQiLCJtYXliZUV4cGFuZE1hY3JvVG9rZW4iLCJleHBhbmRNYWNyb1Rva2VucyIsInVuaXRGb3JUb2tlbiIsImRpc3F1YWxpZnlpbmdVbml0IiwiYnVpbGRSZWdleCIsInJlZ2V4U3RyaW5nIiwicmF3TWF0Y2hlcyIsImRhdGVUaW1lRnJvbU1hdGNoZXMiLCJleHBsYWluRnJvbVRva2VucyIsIm5vbkxlYXBMYWRkZXIiLCJsZWFwTGFkZGVyIiwianMiLCJ0YWJsZSIsIm1vbnRoMCIsIm9yZGluYWwiLCJncmVnT2JqIiwiY29tcHV0ZU9yZGluYWwiLCJkYXlPZldlZWsiLCJ3ZWVrTnVtYmVyIiwid2Vla3NJbldlZWtZZWFyIiwidGltZU9iamVjdCIsIndlZWtEYXRhIiwid2Vla2RheU9mSmFuNCIsInllYXJJbkRheXMiLCJkYXlzSW5ZZWFyIiwidW5jb21wdXRlT3JkaW5hbCIsImdyZWdEYXRhIiwib3JkaW5hbERhdGEiLCJ2YWxpZFllYXIiLCJ2YWxpZFdlZWsiLCJpbnRlZ2VyQmV0d2VlbiIsInZhbGlkV2Vla2RheSIsInVuaXRPdXRPZlJhbmdlIiwidmFsaWRPcmRpbmFsIiwidmFsaWRNb250aCIsInZhbGlkRGF5IiwiZGF5c0luTW9udGgiLCJ2YWxpZEhvdXIiLCJ2YWxpZE1pbnV0ZSIsInZhbGlkU2Vjb25kIiwidmFsaWRNaWxsaXNlY29uZCIsIk1BWF9EQVRFIiwiZ3JlZ29yaWFuVG9XZWVrIiwidHMiLCJpbnN0Iiwib2xkIiwidXRjR3Vlc3MiLCJsb2NhbFRTIiwibzIiLCJ0eiIsIm8zIiwiZml4T2Zmc2V0Iiwib1ByZSIsIm1pbGxpc1RvQWRkIiwic2V0Wm9uZSIsImludGVycHJldGF0aW9uWm9uZSIsInBhcnNlZFpvbmUiLCJ1bmRlZmluZWQiLCJmb3JjZVNpbXBsZSIsInN1cHByZXNzU2Vjb25kcyIsInN1cHByZXNzTWlsbGlzZWNvbmRzIiwiaW5jbHVkZU9mZnNldCIsImluY2x1ZGVab25lIiwic3BhY2Vab25lIiwidG9UZWNoRm9ybWF0IiwiZGVmYXVsdFVuaXRWYWx1ZXMiLCJkZWZhdWx0V2Vla1VuaXRWYWx1ZXMiLCJkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMiLCJvcmRlcmVkV2Vla1VuaXRzIiwib3JkZXJlZE9yZGluYWxVbml0cyIsIndlZWtudW1iZXIiLCJ3ZWVrc251bWJlciIsIndlZWtudW1iZXJzIiwid2Vla3llYXIiLCJ3ZWVreWVhcnMiLCJoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YSIsImhhc0ludmFsaWRUaW1lRGF0YSIsIm9mZnNldFByb3ZpcyIsIm9ialRvVFMiLCJyb3VuZCIsInVuc3VwcG9ydGVkWm9uZSIsInVuY2hhbmdlZCIsIm90IiwidHNUb09iaiIsInF1aWNrRFQiLCJ1dGMiLCJ1dGNJbnN0YW5jZSIsImZyb21KU0RhdGUiLCJpc0RhdGUiLCJ6b25lVG9Vc2UiLCJmcm9tU2Vjb25kcyIsInRzTm93IiwiY29udGFpbnNPcmRpbmFsIiwiY29udGFpbnNHcmVnb3JZZWFyIiwiY29udGFpbnNHcmVnb3JNRCIsImNvbnRhaW5zR3JlZ29yIiwiZGVmaW5pdGVXZWVrRGVmIiwidXNlV2Vla0RhdGEiLCJvYmpOb3ciLCJkZWZhdWx0VmFsdWVzIiwiZ3JlZ29yaWFuVG9PcmRpbmFsIiwiZm91bmRGaXJzdCIsImhpZ2hlck9yZGVySW52YWxpZCIsImhhc0ludmFsaWRXZWVrRGF0YSIsImhhc0ludmFsaWRPcmRpbmFsRGF0YSIsIndlZWtUb0dyZWdvcmlhbiIsIm9yZGluYWxUb0dyZWdvcmlhbiIsInRzRmluYWwiLCJvZmZzZXRGaW5hbCIsInBhcnNlSVNPRGF0ZSIsInBhcnNlRGF0YVRvRGF0ZVRpbWUiLCJmcm9tUkZDMjgyMiIsInBhcnNlUkZDMjgyMkRhdGUiLCJmcm9tSFRUUCIsInBhcnNlSFRUUERhdGUiLCJmcm9tRm9ybWF0IiwibG9jYWxlVG9Vc2UiLCJwYXJzZUZyb21Ub2tlbnMiLCJmcm9tU3RyaW5nIiwiZnJvbVNRTCIsInBhcnNlU1FMIiwiaXNEYXRlVGltZSIsInJlc29sdmVkTG9jYWxlT3B0cyIsInRvVVRDIiwidG9Mb2NhbCIsImtlZXBDYWxlbmRhclRpbWUiLCJuZXdUUyIsIm9mZnNldEd1ZXNzIiwiYXNPYmoiLCJzZXRMb2NhbGUiLCJzZXR0aW5nV2Vla1N0dWZmIiwiYWRqdXN0VGltZSIsInN0YXJ0T2YiLCJub3JtYWxpemVkVW5pdCIsInEiLCJlbmRPZiIsInRvTG9jYWxlU3RyaW5nIiwidG9Mb2NhbGVQYXJ0cyIsInRvSVNPV2Vla0RhdGUiLCJ0b1RlY2hUaW1lRm9ybWF0IiwidG9SRkMyODIyIiwidG9IVFRQIiwidG9TUUxEYXRlIiwidG9TUUxUaW1lIiwidG9TUUwiLCJ0b01pbGxpcyIsInRvU2Vjb25kcyIsInRvQlNPTiIsInRvSlNEYXRlIiwiZGlmZiIsIm90aGVyRGF0ZVRpbWUiLCJkdXJPcHRzIiwibWF5YmVBcnJheSIsIm90aGVySXNMYXRlciIsImVhcmxpZXIiLCJkaWZmTm93IiwidW50aWwiLCJpbnB1dE1zIiwidG9SZWxhdGl2ZSIsInBhZGRpbmciLCJkaWZmUmVsYXRpdmUiLCJ0b1JlbGF0aXZlQ2FsZW5kYXIiLCJjYWxlbmRhcnkiLCJiZXN0QnkiLCJmcm9tRm9ybWF0RXhwbGFpbiIsImZyb21TdHJpbmdFeHBsYWluIiwicG9zc2libHlDYWNoZWRXZWVrRGF0YSIsImRhdGVUaW1laXNoIl0s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eEI7QUFDRDtBQUVEOzs7Ozs7O3dCQUl1QztBQUNyQztBQUNEO0FBRUQ7Ozs7Ozs7d0JBSXVDO0FBQ3JDO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJMkI7QUFDekI7QUFDRDtBQUVEOzs7Ozs7O3dCQUl3QztBQUN0QztBQUNEO0FBRUQ7Ozs7Ozs7d0JBSTJCO0FBQ3pCO0FBQ0Q7QUFFRDs7Ozs7Ozt3QkFJd0M7QUFDdEM7QUFDRDs7Ozs7O0FBTUksdUNBQXVDO0FBQzVDLE1BQUl6VyxRQUFRLENBQVJBLFdBQUosV0FBSUEsQ0FBSixFQUFzQztBQUNwQztBQURGLFNBRU8sSUFBSTZmLFdBQVcsSUFBSUEsV0FBVyxDQUExQkEsV0FBc0N6aEIsUUFBUSxDQUFDeWhCLFdBQVcsQ0FBOUQsT0FBbURBLEVBQUQsQ0FBbEQsRUFBMkU7QUFDaEYsV0FBTzdmLFFBQVEsQ0FBUkEsV0FBUCxXQUFPQSxDQUFQO0FBREssU0FFQSxJQUFJNmYsV0FBVyxJQUFJLHVCQUFuQixVQUFvRDtBQUN6RCxXQUFPN2YsUUFBUSxDQUFSQSxXQUFQLFdBQU9BLENBQVA7QUFESyxTQUVBO0FBQ0wsVUFBTSxzRkFDa0QsT0FEeEQsV0FBTSxDQUFOO0FBR0Q7QUFDRiIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTHV4b25FcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEludmFsaWREYXRlVGltZUVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHJlYXNvbikge1xuICAgIHN1cGVyKGBJbnZhbGlkIERhdGVUaW1lOiAke3JlYXNvbi50b01lc3NhZ2UoKX1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkSW50ZXJ2YWxFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihyZWFzb24pIHtcbiAgICBzdXBlcihgSW52YWxpZCBJbnRlcnZhbDogJHtyZWFzb24udG9NZXNzYWdlKCl9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgSW52YWxpZER1cmF0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRHVyYXRpb246ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7fVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkVW5pdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKHVuaXQpIHtcbiAgICBzdXBlcihgSW52YWxpZCB1bml0ICR7dW5pdH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgWm9uZUlzQWJzdHJhY3RFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlpvbmUgaXMgYW4gYWJzdHJhY3QgY2xhc3NcIik7XG4gIH1cbn1cbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBuID0gXCJudW1lcmljXCIsXG4gIHMgPSBcInNob3J0XCIsXG4gIGwgPSBcImxvbmdcIjtcblxuZXhwb3J0IGNvbnN0IERBVEVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG5cbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogblxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogblxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbFxufTtcblxuZXhwb3J0IGNvbnN0IFRJTUVfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG5cbmV4cG9ydCBjb25zdCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xuXG5leHBvcnQgY29uc3QgVElNRV8yNF9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgaG91cjEyOiBmYWxzZVxufTtcblxuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9TRUNPTkRTID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91cjEyOiBmYWxzZVxufTtcblxuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91cjEyOiBmYWxzZSxcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xuXG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXIxMjogZmFsc2UsXG4gIHRpbWVab25lTmFtZTogbFxufTtcblxuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICovXG5leHBvcnQgY29uc3QgREFURVRJTUVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogblxufTtcblxuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICovXG5leHBvcnQgY29uc3QgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogblxufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBzLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogc1xufTtcblxuZXhwb3J0IGNvbnN0IERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xuXG5leHBvcnQgY29uc3QgREFURVRJTUVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG5cbmV4cG9ydCBjb25zdCBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIHRpbWVab25lTmFtZTogbFxufTtcbiIsIi8qXG4gIFRoaXMgaXMganVzdCBhIGp1bmsgZHJhd2VyLCBjb250YWluaW5nIGFueXRoaW5nIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNsYXNzZXMuXG4gIEJlY2F1c2UgTHV4b24gaXMgc21hbGwoaXNoKSwgdGhpcyBzaG91bGQgc3RheSBzbWFsbCBhbmQgd2Ugd29uJ3Qgd29ycnkgYWJvdXQgc3BsaXR0aW5nXG4gIGl0IHVwIGludG8sIHNheSwgcGFyc2luZ1V0aWwuanMgYW5kIGJhc2ljVXRpbC5qcyBhbmQgc28gb24uIEJ1dCB0aGV5IGFyZSBkaXZpZGVkIHVwIGJ5IGZlYXR1cmUgYXJlYS5cbiovXG5cbmltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yIH0gZnJvbSBcIi4uL2Vycm9ycy5qc1wiO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuLy8gVFlQRVNcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInVuZGVmaW5lZFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCIgJiYgbyAlIDEgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZShvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBEYXRlXVwiO1xufVxuXG4vLyBDQVBBQklMSVRJRVNcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0ludGwoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmIEludGwuRGF0ZVRpbWVGb3JtYXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Zvcm1hdFRvUGFydHMoKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQoSW50bC5EYXRlVGltZUZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VG9QYXJ0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vLyBPQkpFQ1RTIEFORCBBUlJBWVNcblxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpbmcpID8gdGhpbmcgOiBbdGhpbmddO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKChiZXN0LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGljayhvYmosIGtleXMpIHtcbiAgcmV0dXJuIGtleXMucmVkdWNlKChhLCBrKSA9PiB7XG4gICAgYVtrXSA9IG9ialtrXTtcbiAgICByZXR1cm4gYTtcbiAgfSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuLy8gTlVNQkVSUyBBTkQgU1RSSU5HU1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59XG5cbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuZXhwb3J0IGZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRTdGFydChpbnB1dCwgbiA9IDIpIHtcbiAgaWYgKGlucHV0LnRvU3RyaW5nKCkubGVuZ3RoIDwgbikge1xuICAgIHJldHVybiAoXCIwXCIucmVwZWF0KG4pICsgaW5wdXQpLnNsaWNlKC1uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXQudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLCAxMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XG4gIC8vIFJldHVybiB1bmRlZmluZWQgKGluc3RlYWQgb2YgMCkgaW4gdGhlc2UgY2FzZXMsIHdoZXJlIGZyYWN0aW9uIGlzIG5vdCBzZXRcbiAgaWYgKGlzVW5kZWZpbmVkKGZyYWN0aW9uKSB8fCBmcmFjdGlvbiA9PT0gbnVsbCB8fCBmcmFjdGlvbiA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZiA9IHBhcnNlRmxvYXQoXCIwLlwiICsgZnJhY3Rpb24pICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihmKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUbyhudW1iZXIsIGRpZ2l0cywgdG93YXJkWmVybyA9IGZhbHNlKSB7XG4gIGNvbnN0IGZhY3RvciA9IDEwICoqIGRpZ2l0cyxcbiAgICByb3VuZGVyID0gdG93YXJkWmVybyA/IE1hdGgudHJ1bmMgOiBNYXRoLnJvdW5kO1xuICByZXR1cm4gcm91bmRlcihudW1iZXIgKiBmYWN0b3IpIC8gZmFjdG9yO1xufVxuXG4vLyBEQVRFIEJBU0lDU1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gIGNvbnN0IG1vZE1vbnRoID0gZmxvb3JNb2QobW9udGggLSAxLCAxMikgKyAxLFxuICAgIG1vZFllYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XG5cbiAgaWYgKG1vZE1vbnRoID09PSAyKSB7XG4gICAgcmV0dXJuIGlzTGVhcFllYXIobW9kWWVhcikgPyAyOSA6IDI4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXVttb2RNb250aCAtIDFdO1xuICB9XG59XG5cbi8vIGNvdmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGxvY2FsIHRpbWVzdGFtcCAoZXBvY2gsIGJ1dCB3aXRoIHRoZSBvZmZzZXQgYmFrZWQgaW4pXG5leHBvcnQgZnVuY3Rpb24gb2JqVG9Mb2NhbFRTKG9iaikge1xuICBsZXQgZCA9IERhdGUuVVRDKFxuICAgIG9iai55ZWFyLFxuICAgIG9iai5tb250aCAtIDEsXG4gICAgb2JqLmRheSxcbiAgICBvYmouaG91cixcbiAgICBvYmoubWludXRlLFxuICAgIG9iai5zZWNvbmQsXG4gICAgb2JqLm1pbGxpc2Vjb25kXG4gICk7XG5cbiAgLy8gZm9yIGxlZ2FjeSByZWFzb25zLCB5ZWFycyBiZXR3ZWVuIDAgYW5kIDk5IGFyZSBpbnRlcnByZXRlZCBhcyAxOVhYOyByZXZlcnQgdGhhdFxuICBpZiAob2JqLnllYXIgPCAxMDAgJiYgb2JqLnllYXIgPj0gMCkge1xuICAgIGQgPSBuZXcgRGF0ZShkKTtcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xuICB9XG4gIHJldHVybiArZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcikge1xuICBjb25zdCBwMSA9XG4gICAgICAod2Vla1llYXIgK1xuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNCkgLVxuICAgICAgICBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKSArXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKSAlXG4gICAgICA3LFxuICAgIGxhc3QgPSB3ZWVrWWVhciAtIDEsXG4gICAgcDIgPSAobGFzdCArIE1hdGguZmxvb3IobGFzdCAvIDQpIC0gTWF0aC5mbG9vcihsYXN0IC8gMTAwKSArIE1hdGguZmxvb3IobGFzdCAvIDQwMCkpICUgNztcbiAgcmV0dXJuIHAxID09PSA0IHx8IHAyID09PSAzID8gNTMgOiA1Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXIpIHtcbiAgaWYgKHllYXIgPiA5OSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2UgcmV0dXJuIHllYXIgPiA2MCA/IDE5MDAgKyB5ZWFyIDogMjAwMCArIHllYXI7XG59XG5cbi8vIFBBUlNJTkdcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlWm9uZUluZm8odHMsIG9mZnNldEZvcm1hdCwgbG9jYWxlLCB0aW1lWm9uZSA9IG51bGwpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRzKSxcbiAgICBpbnRsT3B0cyA9IHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCJcbiAgICB9O1xuXG4gIGlmICh0aW1lWm9uZSkge1xuICAgIGludGxPcHRzLnRpbWVab25lID0gdGltZVpvbmU7XG4gIH1cblxuICBjb25zdCBtb2RpZmllZCA9IE9iamVjdC5hc3NpZ24oeyB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdCB9LCBpbnRsT3B0cyksXG4gICAgaW50bCA9IGhhc0ludGwoKTtcblxuICBpZiAoaW50bCAmJiBoYXNGb3JtYXRUb1BhcnRzKCkpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKVxuICAgICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAgIC5maW5kKG0gPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCIpO1xuICAgIHJldHVybiBwYXJzZWQgPyBwYXJzZWQudmFsdWUgOiBudWxsO1xuICB9IGVsc2UgaWYgKGludGwpIHtcbiAgICAvLyB0aGlzIHByb2JhYmx5IGRvZXNuJ3Qgd29yayBmb3IgYWxsIGxvY2FsZXNcbiAgICBjb25zdCB3aXRob3V0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBpbnRsT3B0cykuZm9ybWF0KGRhdGUpLFxuICAgICAgaW5jbHVkZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKS5mb3JtYXQoZGF0ZSksXG4gICAgICBkaWZmZWQgPSBpbmNsdWRlZC5zdWJzdHJpbmcod2l0aG91dC5sZW5ndGgpLFxuICAgICAgdHJpbW1lZCA9IGRpZmZlZC5yZXBsYWNlKC9eWywgXFx1MjAwZV0rLywgXCJcIik7XG4gICAgcmV0dXJuIHRyaW1tZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmV4cG9ydCBmdW5jdGlvbiBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKSB7XG4gIGxldCBvZmZIb3VyID0gcGFyc2VJbnQob2ZmSG91clN0ciwgMTApO1xuXG4gIC8vIGRvbid0IHx8IHRoaXMgYmVjYXVzZSB3ZSB3YW50IHRvIHByZXNlcnZlIC0wXG4gIGlmIChOdW1iZXIuaXNOYU4ob2ZmSG91cikpIHtcbiAgICBvZmZIb3VyID0gMDtcbiAgfVxuXG4gIGNvbnN0IG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgb2ZmTWluU2lnbmVkID0gb2ZmSG91ciA8IDAgfHwgT2JqZWN0LmlzKG9mZkhvdXIsIC0wKSA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59XG5cbi8vIENPRVJDSU9OXG5cbmV4cG9ydCBmdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIiB8fCB2YWx1ZSA9PT0gXCJcIiB8fCBOdW1iZXIuaXNOYU4obnVtZXJpY1ZhbHVlKSlcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoYEludmFsaWQgdW5pdCB2YWx1ZSAke3ZhbHVlfWApO1xuICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplciwgbm9uVW5pdEtleXMpIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHt9O1xuICBmb3IgKGNvbnN0IHUgaW4gb2JqKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgdSkpIHtcbiAgICAgIGlmIChub25Vbml0S2V5cy5pbmRleE9mKHUpID49IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KG9mZnNldCwgZm9ybWF0KSB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC50cnVuYyhvZmZzZXQgLyA2MCksXG4gICAgbWludXRlcyA9IE1hdGguYWJzKG9mZnNldCAlIDYwKSxcbiAgICBzaWduID0gaG91cnMgPj0gMCAmJiAhT2JqZWN0LmlzKGhvdXJzLCAtMCkgPyBcIitcIiA6IFwiLVwiLFxuICAgIGJhc2UgPSBgJHtzaWdufSR7TWF0aC5hYnMoaG91cnMpfWA7XG5cbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7cGFkU3RhcnQoTWF0aC5hYnMoaG91cnMpLCAyKX06JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBtaW51dGVzID4gMCA/IGAke2Jhc2V9OiR7bWludXRlc31gIDogYmFzZTtcbiAgICBjYXNlIFwidGVjaGllXCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke3BhZFN0YXJ0KE1hdGguYWJzKGhvdXJzKSwgMil9JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVmFsdWUgZm9ybWF0ICR7Zm9ybWF0fSBpcyBvdXQgb2YgcmFuZ2UgZm9yIHByb3BlcnR5IGZvcm1hdGApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikge1xuICByZXR1cm4gcGljayhvYmosIFtcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSk7XG59XG5cbmV4cG9ydCBjb25zdCBpYW5hUmVnZXggPSAvW0EtWmEtel8rLV17MSwyNTZ9KDo/XFwvW0EtWmEtel8rLV17MSwyNTZ9KFxcL1tBLVphLXpfKy1dezEsMjU2fSk/KT8vO1xuIiwiaW1wb3J0ICogYXMgRm9ybWF0cyBmcm9tIFwiLi9mb3JtYXRzLmpzXCI7XG5pbXBvcnQgeyBwaWNrIH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIE9iamVjdC5rZXlzKG9iaikuc29ydCgpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBjb25zdCBtb250aHNMb25nID0gW1xuICBcIkphbnVhcnlcIixcbiAgXCJGZWJydWFyeVwiLFxuICBcIk1hcmNoXCIsXG4gIFwiQXByaWxcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5lXCIsXG4gIFwiSnVseVwiLFxuICBcIkF1Z3VzdFwiLFxuICBcIlNlcHRlbWJlclwiLFxuICBcIk9jdG9iZXJcIixcbiAgXCJOb3ZlbWJlclwiLFxuICBcIkRlY2VtYmVyXCJcbl07XG5cbmV4cG9ydCBjb25zdCBtb250aHNTaG9ydCA9IFtcbiAgXCJKYW5cIixcbiAgXCJGZWJcIixcbiAgXCJNYXJcIixcbiAgXCJBcHJcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5cIixcbiAgXCJKdWxcIixcbiAgXCJBdWdcIixcbiAgXCJTZXBcIixcbiAgXCJPY3RcIixcbiAgXCJOb3ZcIixcbiAgXCJEZWNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IG1vbnRoc05hcnJvdyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRocyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gbW9udGhzTmFycm93O1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0O1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gbW9udGhzTG9uZztcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBjYXNlIFwiMi1kaWdpdFwiOlxuICAgICAgcmV0dXJuIFtcIjAxXCIsIFwiMDJcIiwgXCIwM1wiLCBcIjA0XCIsIFwiMDVcIiwgXCIwNlwiLCBcIjA3XCIsIFwiMDhcIiwgXCIwOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzTG9uZyA9IFtcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiLFxuICBcIlN1bmRheVwiXG5dO1xuXG5leHBvcnQgY29uc3Qgd2Vla2RheXNTaG9ydCA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzTmFycm93ID0gW1wiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCIsIFwiU1wiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiB3ZWVrZGF5c05hcnJvdztcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiB3ZWVrZGF5c1Nob3J0O1xuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gd2Vla2RheXNMb25nO1xuICAgIGNhc2UgXCJudW1lcmljXCI6XG4gICAgICByZXR1cm4gW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1lcmlkaWVtcyA9IFtcIkFNXCIsIFwiUE1cIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzTG9uZyA9IFtcIkJlZm9yZSBDaHJpc3RcIiwgXCJBbm5vIERvbWluaVwiXTtcblxuZXhwb3J0IGNvbnN0IGVyYXNTaG9ydCA9IFtcIkJDXCIsIFwiQURcIl07XG5cbmV4cG9ydCBjb25zdCBlcmFzTmFycm93ID0gW1wiQlwiLCBcIkFcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBlcmFzKGxlbmd0aCkge1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBlcmFzTmFycm93O1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIGVyYXNTaG9ydDtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIGVyYXNMb25nO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkge1xuICByZXR1cm4gbWVyaWRpZW1zW2R0LmhvdXIgPCAxMiA/IDAgOiAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gbW9udGhzKGxlbmd0aClbZHQubW9udGggLSAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVyYUZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGVyYXMobGVuZ3RoKVtkdC55ZWFyIDwgMCA/IDAgOiAxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYyA9IFwiYWx3YXlzXCIsIG5hcnJvdyA9IGZhbHNlKSB7XG4gIGNvbnN0IHVuaXRzID0ge1xuICAgIHllYXJzOiBbXCJ5ZWFyXCIsIFwieXIuXCJdLFxuICAgIHF1YXJ0ZXJzOiBbXCJxdWFydGVyXCIsIFwicXRyLlwiXSxcbiAgICBtb250aHM6IFtcIm1vbnRoXCIsIFwibW8uXCJdLFxuICAgIHdlZWtzOiBbXCJ3ZWVrXCIsIFwid2suXCJdLFxuICAgIGRheXM6IFtcImRheVwiLCBcImRheVwiLCBcImRheXNcIl0sXG4gICAgaG91cnM6IFtcImhvdXJcIiwgXCJoci5cIl0sXG4gICAgbWludXRlczogW1wibWludXRlXCIsIFwibWluLlwiXSxcbiAgICBzZWNvbmRzOiBbXCJzZWNvbmRcIiwgXCJzZWMuXCJdXG4gIH07XG5cbiAgY29uc3QgbGFzdGFibGUgPSBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdLmluZGV4T2YodW5pdCkgPT09IC0xO1xuXG4gIGlmIChudW1lcmljID09PSBcImF1dG9cIiAmJiBsYXN0YWJsZSkge1xuICAgIGNvbnN0IGlzRGF5ID0gdW5pdCA9PT0gXCJkYXlzXCI7XG4gICAgc3dpdGNoIChjb3VudCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvbW9ycm93XCIgOiBgbmV4dCAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInllc3RlcmRheVwiIDogYGxhc3QgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvZGF5XCIgOiBgdGhpcyAke3VuaXRzW3VuaXRdWzBdfWA7XG4gICAgICBkZWZhdWx0OiAvLyBmYWxsIHRocm91Z2hcbiAgICB9XG4gIH1cblxuICBjb25zdCBpc0luUGFzdCA9IE9iamVjdC5pcyhjb3VudCwgLTApIHx8IGNvdW50IDwgMCxcbiAgICBmbXRWYWx1ZSA9IE1hdGguYWJzKGNvdW50KSxcbiAgICBzaW5ndWxhciA9IGZtdFZhbHVlID09PSAxLFxuICAgIGxpbFVuaXRzID0gdW5pdHNbdW5pdF0sXG4gICAgZm10VW5pdCA9IG5hcnJvd1xuICAgICAgPyBzaW5ndWxhclxuICAgICAgICA/IGxpbFVuaXRzWzFdXG4gICAgICAgIDogbGlsVW5pdHNbMl0gfHwgbGlsVW5pdHNbMV1cbiAgICAgIDogc2luZ3VsYXJcbiAgICAgICAgPyB1bml0c1t1bml0XVswXVxuICAgICAgICA6IHVuaXQ7XG4gIHJldHVybiBpc0luUGFzdCA/IGAke2ZtdFZhbHVlfSAke2ZtdFVuaXR9IGFnb2AgOiBgaW4gJHtmbXRWYWx1ZX0gJHtmbXRVbml0fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTdHJpbmcoa25vd25Gb3JtYXQpIHtcbiAgLy8gdGhlc2UgYWxsIGhhdmUgdGhlIG9mZnNldHMgcmVtb3ZlZCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYWNjZXNzIHRvIHRoZW1cbiAgLy8gd2l0aG91dCBhbGwgdGhlIGludGwgc3R1ZmYgdGhpcyBpcyBiYWNrZmlsbGluZ1xuICBjb25zdCBmaWx0ZXJlZCA9IHBpY2soa25vd25Gb3JtYXQsIFtcbiAgICAgIFwid2Vla2RheVwiLFxuICAgICAgXCJlcmFcIixcbiAgICAgIFwieWVhclwiLFxuICAgICAgXCJtb250aFwiLFxuICAgICAgXCJkYXlcIixcbiAgICAgIFwiaG91clwiLFxuICAgICAgXCJtaW51dGVcIixcbiAgICAgIFwic2Vjb25kXCIsXG4gICAgICBcInRpbWVab25lTmFtZVwiLFxuICAgICAgXCJob3VyMTJcIlxuICAgIF0pLFxuICAgIGtleSA9IHN0cmluZ2lmeShmaWx0ZXJlZCksXG4gICAgZGF0ZVRpbWVIdWdlID0gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW0gYVwiO1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9TSE9SVCk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURV9NRUQpOlxuICAgICAgcmV0dXJuIFwiTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfRlVMTCk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVfSFVHRSk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXlcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfU0lNUExFKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FX1dJVEhfU0hPUlRfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV9XSVRIX0xPTkdfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcImg6bW0gYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuVElNRV8yNF9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkhIOm1tOnNzXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKTpcbiAgICAgIHJldHVybiBcIkhIOm1tXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX1NIT1JUKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5LCBoOm1tIGFcIjtcbiAgICBjYXNlIHN0cmluZ2lmeShGb3JtYXRzLkRBVEVUSU1FX01FRCk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9IVUdFKTpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9XRUVLREFZKTpcbiAgICAgIHJldHVybiBcIkVFRSwgZCBMTEwgeXl5eSwgaDptbSBhXCI7XG4gICAgY2FzZSBzdHJpbmdpZnkoRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuICAgIGNhc2Ugc3RyaW5naWZ5KEZvcm1hdHMuREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiRUVFRSwgTExMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgKiBhcyBGb3JtYXRzIGZyb20gXCIuL2Zvcm1hdHMuanNcIjtcbmltcG9ydCB7IGhhc0Zvcm1hdFRvUGFydHMsIHBhZFN0YXJ0IH0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XG4gIGxldCBzID0gXCJcIjtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBzcGxpdHMpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcyArPSB0b2tlbi52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcztcbn1cblxuY29uc3QgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogRm9ybWF0cy5EQVRFX1NIT1JULFxuICBERDogRm9ybWF0cy5EQVRFX01FRCxcbiAgREREOiBGb3JtYXRzLkRBVEVfRlVMTCxcbiAgRERERDogRm9ybWF0cy5EQVRFX0hVR0UsXG4gIHQ6IEZvcm1hdHMuVElNRV9TSU1QTEUsXG4gIHR0OiBGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IEZvcm1hdHMuVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQsXG4gIFQ6IEZvcm1hdHMuVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCxcbiAgVFRUVDogRm9ybWF0cy5USU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IEZvcm1hdHMuREFURVRJTUVfU0hPUlQsXG4gIGZmOiBGb3JtYXRzLkRBVEVUSU1FX01FRCxcbiAgZmZmOiBGb3JtYXRzLkRBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IEZvcm1hdHMuREFURVRJTUVfSFVHRSxcbiAgRjogRm9ybWF0cy5EQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMsXG4gIEZGOiBGb3JtYXRzLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogRm9ybWF0cy5EQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EU1xufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1hdHRlciB7XG4gIHN0YXRpYyBjcmVhdGUobG9jYWxlLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRm9ybWF0KGZtdCkge1xuICAgIGxldCBjdXJyZW50ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRGdWxsID0gXCJcIixcbiAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHNwbGl0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gZm10LmNoYXJBdChpKTtcbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogYnJhY2tldGVkLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCI7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogZmFsc2UsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xuICAgICAgICBjdXJyZW50ID0gYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbiAgfVxuXG4gIHN0YXRpYyBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKSB7XG4gICAgcmV0dXJuIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHNbdG9rZW5dO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XG4gIH1cblxuICBmb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgb3B0cykge1xuICAgIGlmICh0aGlzLnN5c3RlbUxvYyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSB0aGlzLmxvYy5yZWRlZmF1bHRUb1N5c3RlbSgpO1xuICAgIH1cbiAgICBjb25zdCBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZShkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWVQYXJ0cyhkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdFRvUGFydHMoKTtcbiAgfVxuXG4gIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9XG5cbiAgbnVtKG4sIHAgPSAwKSB7XG4gICAgLy8gd2UgZ2V0IHNvbWUgcGVyZiBvdXQgb2YgZG9pbmcgdGhpcyBoZXJlLCBhbm5veWluZ2x5XG4gICAgaWYgKHRoaXMub3B0cy5mb3JjZVNpbXBsZSkge1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KG4sIHApO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMpO1xuXG4gICAgaWYgKHAgPiAwKSB7XG4gICAgICBvcHRzLnBhZFRvID0gcDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2MubnVtYmVyRm9ybWF0dGVyKG9wdHMpLmZvcm1hdChuKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm10KSB7XG4gICAgY29uc3Qga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPVxuICAgICAgICB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gXCJncmVnb3J5XCIgJiYgaGFzRm9ybWF0VG9QYXJ0cygpLFxuICAgICAgc3RyaW5nID0gKG9wdHMsIGV4dHJhY3QpID0+IHRoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpLFxuICAgICAgZm9ybWF0T2Zmc2V0ID0gb3B0cyA9PiB7XG4gICAgICAgIGlmIChkdC5pc09mZnNldEZpeGVkICYmIGR0Lm9mZnNldCA9PT0gMCAmJiBvcHRzLmFsbG93Wikge1xuICAgICAgICAgIHJldHVybiBcIlpcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkdC5pc1ZhbGlkID8gZHQuem9uZS5mb3JtYXRPZmZzZXQoZHQudHMsIG9wdHMuZm9ybWF0KSA6IFwiXCI7XG4gICAgICB9LFxuICAgICAgbWVyaWRpZW0gPSAoKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2hcbiAgICAgICAgICA/IEVuZ2xpc2gubWVyaWRpZW1Gb3JEYXRlVGltZShkdClcbiAgICAgICAgICA6IHN0cmluZyh7IGhvdXI6IFwibnVtZXJpY1wiLCBob3VyMTI6IHRydWUgfSwgXCJkYXlwZXJpb2RcIiksXG4gICAgICBtb250aCA9IChsZW5ndGgsIHN0YW5kYWxvbmUpID0+XG4gICAgICAgIGtub3duRW5nbGlzaFxuICAgICAgICAgID8gRW5nbGlzaC5tb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXG4gICAgICAgICAgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHsgbW9udGg6IGxlbmd0aCB9IDogeyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIiksXG4gICAgICB3ZWVrZGF5ID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBFbmdsaXNoLndlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKVxuICAgICAgICAgIDogc3RyaW5nKFxuICAgICAgICAgICAgICBzdGFuZGFsb25lID8geyB3ZWVrZGF5OiBsZW5ndGggfSA6IHsgd2Vla2RheTogbGVuZ3RoLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfSxcbiAgICAgICAgICAgICAgXCJ3ZWVrZGF5XCJcbiAgICAgICAgICAgICksXG4gICAgICBtYXliZU1hY3JvID0gdG9rZW4gPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pO1xuICAgICAgICBpZiAoZm9ybWF0T3B0cykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcmEgPSBsZW5ndGggPT5cbiAgICAgICAga25vd25FbmdsaXNoID8gRW5nbGlzaC5lcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7IGVyYTogbGVuZ3RoIH0sIFwiZXJhXCIpLFxuICAgICAgdG9rZW5Ub1N0cmluZyA9IHRva2VuID0+IHtcbiAgICAgICAgLy8gV2hlcmUgcG9zc2libGU6IGh0dHA6Ly9jbGRyLnVuaWNvZGUub3JnL3RyYW5zbGF0aW9uL2RhdGUtdGltZSNUT0MtU3RhbmQtQWxvbmUtdnMuLUZvcm1hdC1TdHlsZXNcbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAgIC8vIG1zXG4gICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCk7XG4gICAgICAgICAgY2FzZSBcInVcIjpcbiAgICAgICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICAgICAgY2FzZSBcIlNTU1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm1pbGxpc2Vjb25kLCAzKTtcbiAgICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQpO1xuICAgICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LnNlY29uZCwgMik7XG4gICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlKTtcbiAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUsIDIpO1xuICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XG4gICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91cik7XG4gICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciwgMik7XG4gICAgICAgICAgLy8gb2Zmc2V0XG4gICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6IFwibmFycm93XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInNob3J0XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInRlY2hpZVwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJzaG9ydFwiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJsb25nXCIsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xuICAgICAgICAgIC8vIHpvbmVcbiAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZU5hbWU7XG4gICAgICAgICAgLy8gbWVyaWRpZW1zXG4gICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAgIC8vIGRhdGVzXG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCJudW1lcmljXCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXkpO1xuICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiBcIjItZGlnaXRcIiB9LCBcImRheVwiKSA6IHRoaXMubnVtKGR0LmRheSwgMik7XG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIHN0YW5kYWxvbmVcbiAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcbiAgICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xuICAgICAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyB5ZWFyc1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDIwMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKSA6IHRoaXMubnVtKGR0LnllYXIpO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCIyLWRpZ2l0XCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAxMlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCJudW1lcmljXCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAgIC8vIGVyYXNcbiAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBRFxuICAgICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuICAgICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgICAgcmV0dXJuIGVyYShcImxvbmdcIik7XG4gICAgICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuICAgICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLCA0KTtcbiAgICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuICAgICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCk7XG4gICAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuICAgICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyKTtcbiAgICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQudHMgLyAxMDAwKSk7XG4gICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC50cyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBtYXliZU1hY3JvKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksIHRva2VuVG9TdHJpbmcpO1xuICB9XG5cbiAgZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKGR1ciwgZm10KSB7XG4gICAgY29uc3QgdG9rZW5Ub0ZpZWxkID0gdG9rZW4gPT4ge1xuICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbGxpc2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcbiAgICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJkYXlcIjtcbiAgICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRva2VuVG9TdHJpbmcgPSBsaWxkdXIgPT4gdG9rZW4gPT4ge1xuICAgICAgICBjb25zdCBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKFxuICAgICAgICAoZm91bmQsIHsgbGl0ZXJhbCwgdmFsIH0pID0+IChsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKSksXG4gICAgICAgIFtdXG4gICAgICApLFxuICAgICAgY29sbGFwc2VkID0gZHVyLnNoaWZ0VG8oLi4ucmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIodCA9PiB0KSk7XG4gICAgcmV0dXJuIHN0cmluZ2lmeVRva2Vucyh0b2tlbnMsIHRva2VuVG9TdHJpbmcoY29sbGFwc2VkKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWQge1xuICBjb25zdHJ1Y3RvcihyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xuICB9XG5cbiAgdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5yZWFzb259OiAke3RoaXMuZXhwbGFuYXRpb259YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5pbXBvcnQgeyBab25lSXNBYnN0cmFjdEVycm9yIH0gZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5cbi8qKlxuICogQGludGVyZmFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBab25lIHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgdHlwZSgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoaXMgem9uZS5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbmFtZSgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgb2Zmc2V0IGlzIGtub3duIHRvIGJlIGZpeGVkIGZvciB0aGUgd2hvbGUgeWVhci5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IHVuaXZlcnNhbCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIGNvbW1vbiBuYW1lIChzdWNoIGFzIEVTVCkgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXBcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBuYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBhZmZlY3QgdGhlIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5mb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uIEFjY2VwdHMgJ2xvbmcnIG9yICdzaG9ydCcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmxvY2FsZSAtIFdoYXQgbG9jYWxlIHRvIHJldHVybiB0aGUgb2Zmc2V0IG5hbWUgaW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBjb21wdXRlIHRoZSBvZmZzZXRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgb2Zmc2V0KHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge1pvbmV9IG90aGVyWm9uZSAtIHRoZSB6b25lIHRvIGNvbXBhcmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvLCBoYXNJbnRsIH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgbG9jYWwgem9uZSBmb3IgdGhpcyBKYXZhc2NyaXB0IGVudmlyb25tZW50LlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsWm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBsb2NhbCB6b25lXG4gICAqIEByZXR1cm4ge0xvY2FsWm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKHNpbmdsZXRvbiA9PT0gbnVsbCkge1xuICAgICAgc2luZ2xldG9uID0gbmV3IExvY2FsWm9uZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwibG9jYWxcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBuYW1lKCkge1xuICAgIGlmIChoYXNJbnRsKCkpIHtcbiAgICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgIH0gZWxzZSByZXR1cm4gXCJsb2NhbFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHVuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXROYW1lKHRzLCB7IGZvcm1hdCwgbG9jYWxlIH0pIHtcbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImxvY2FsXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9ybWF0T2Zmc2V0LCBwYXJzZVpvbmVJbmZvLCBpc1VuZGVmaW5lZCwgaWFuYVJlZ2V4LCBvYmpUb0xvY2FsVFMgfSBmcm9tIFwiLi4vaW1wbC91dGlsLmpzXCI7XG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuXG5jb25zdCBtYXRjaGluZ1JlZ2V4ID0gUmVnRXhwKGBeJHtpYW5hUmVnZXguc291cmNlfSRgKTtcblxubGV0IGR0ZkNhY2hlID0ge307XG5mdW5jdGlvbiBtYWtlRFRGKHpvbmUpIHtcbiAgaWYgKCFkdGZDYWNoZVt6b25lXSkge1xuICAgIGR0ZkNhY2hlW3pvbmVdID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgICAgdGltZVpvbmU6IHpvbmUsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xufVxuXG5jb25zdCB0eXBlVG9Qb3MgPSB7XG4gIHllYXI6IDAsXG4gIG1vbnRoOiAxLFxuICBkYXk6IDIsXG4gIGhvdXI6IDMsXG4gIG1pbnV0ZTogNCxcbiAgc2Vjb25kOiA1XG59O1xuXG5mdW5jdGlvbiBoYWNreU9mZnNldChkdGYsIGRhdGUpIHtcbiAgY29uc3QgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csIFwiXCIpLFxuICAgIHBhcnNlZCA9IC8oXFxkKylcXC8oXFxkKylcXC8oXFxkKyksPyAoXFxkKyk6KFxcZCspOihcXGQrKS8uZXhlYyhmb3JtYXR0ZWQpLFxuICAgIFssIGZNb250aCwgZkRheSwgZlllYXIsIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXSA9IHBhcnNlZDtcbiAgcmV0dXJuIFtmWWVhciwgZk1vbnRoLCBmRGF5LCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF07XG59XG5cbmZ1bmN0aW9uIHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKSxcbiAgICBmaWxsZWQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtYXR0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7IHR5cGUsIHZhbHVlIH0gPSBmb3JtYXR0ZWRbaV0sXG4gICAgICBwb3MgPSB0eXBlVG9Qb3NbdHlwZV07XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbGxlZDtcbn1cblxubGV0IGlhbmFab25lQ2FjaGUgPSB7fTtcbi8qKlxuICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJQU5BWm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcbiAgICogQHJldHVybiB7SUFOQVpvbmV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKG5hbWUpIHtcbiAgICBpZiAoIWlhbmFab25lQ2FjaGVbbmFtZV0pIHtcbiAgICAgIGlhbmFab25lQ2FjaGVbbmFtZV0gPSBuZXcgSUFOQVpvbmUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBpYW5hWm9uZUNhY2hlW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvY2FsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgaWFuYVpvbmVDYWNoZSA9IHt9O1xuICAgIGR0ZkNhY2hlID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBzcGVjaWZpZXIuIFRoaXMgb25seSBjaGVja3MgdGhlIHN0cmluZydzIGZvcm1hdCwgbm90IHRoYXQgdGhlIHNwZWNpZmllciBpZGVudGlmaWVzIGEga25vd24gem9uZTsgc2VlIGlzVmFsaWRab25lIGZvciB0aGF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBzdHJpbmcgdG8gY2hlY2sgdmFsaWRpdHkgb25cbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRTcGVjaWZpZXIocykge1xuICAgIHJldHVybiAhIShzICYmIHMubWF0Y2gobWF0Y2hpbmdSZWdleCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlkZW50aWZpZXMgYSByZWFsIHpvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBUaGUgc3RyaW5nIHRvIGNoZWNrXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiBmYWxzZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZFpvbmUoem9uZSkge1xuICAgIHRyeSB7XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHsgdGltZVpvbmU6IHpvbmUgfSkuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gRXRjL0dNVCs4IC0+IC00ODBcbiAgLyoqIEBpZ25vcmUgKi9cbiAgc3RhdGljIHBhcnNlR01UT2Zmc2V0KHNwZWNpZmllcikge1xuICAgIGlmIChzcGVjaWZpZXIpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gc3BlY2lmaWVyLm1hdGNoKC9eRXRjXFwvR01UKFsrLV1cXGR7MSwyfSkkL2kpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiAtNjAgKiBwYXJzZUludChtYXRjaFsxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMuem9uZU5hbWUgPSBuYW1lO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICB0aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJpYW5hXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB1bml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgICBkdGYgPSBtYWtlRFRGKHRoaXMubmFtZSksXG4gICAgICBbeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmRdID0gZHRmLmZvcm1hdFRvUGFydHNcbiAgICAgICAgPyBwYXJ0c09mZnNldChkdGYsIGRhdGUpXG4gICAgICAgIDogaGFja3lPZmZzZXQoZHRmLCBkYXRlKSxcbiAgICAgIC8vIHdvcmsgYXJvdW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwMjU1NjQmY2FuPTImcT0lMjIyNCUzQTAwJTIyJTIwZGF0ZXRpbWVmb3JtYXRcbiAgICAgIGFkanVzdGVkSG91ciA9IGhvdXIgPT09IDI0ID8gMCA6IGhvdXI7XG5cbiAgICBjb25zdCBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXksXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXG4gICAgICBtaW51dGUsXG4gICAgICBzZWNvbmQsXG4gICAgICBtaWxsaXNlY29uZDogMFxuICAgIH0pO1xuXG4gICAgbGV0IGFzVFMgPSArZGF0ZTtcbiAgICBjb25zdCBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZvcm1hdE9mZnNldCwgc2lnbmVkT2Zmc2V0IH0gZnJvbSBcIi4uL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxubGV0IHNpbmdsZXRvbiA9IG51bGw7XG5cbi8qKlxuICogQSB6b25lIHdpdGggYSBmaXhlZCBvZmZzZXQgKG1lYW5pbmcgbm8gRFNUKVxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpeGVkT2Zmc2V0Wm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFVUQ1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IHV0Y0luc3RhbmNlKCkge1xuICAgIGlmIChzaW5nbGV0b24gPT09IG51bGwpIHtcbiAgICAgIHNpbmdsZXRvbiA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b247XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIHdpdGggYSBzcGVjaWZpZWQgb2Zmc2V0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgLSBUaGUgb2Zmc2V0IGluIG1pbnV0ZXNcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIGluc3RhbmNlKG9mZnNldCkge1xuICAgIHJldHVybiBvZmZzZXQgPT09IDAgPyBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UgOiBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIGluc3RhbmNlIG9mIEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIGEgVVRDIG9mZnNldCBzdHJpbmcsIGxpa2UgXCJVVEMrNlwiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzIC0gVGhlIG9mZnNldCBzdHJpbmcgdG8gcGFyc2VcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDKzA2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQy02OjAwXCIpXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBwYXJzZVNwZWNpZmllcihzKSB7XG4gICAgaWYgKHMpIHtcbiAgICAgIGNvbnN0IHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIHJldHVybiBuZXcgRml4ZWRPZmZzZXRab25lKHNpZ25lZE9mZnNldChyWzFdLCByWzJdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob2Zmc2V0KSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy5maXhlZCA9IG9mZnNldDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcImZpeGVkXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/IFwiVVRDXCIgOiBgVVRDJHtmb3JtYXRPZmZzZXQodGhpcy5maXhlZCwgXCJuYXJyb3dcIil9YDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBmb3JtYXQpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHVuaXZlcnNhbCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXhlZDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiZml4ZWRcIiAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IFpvbmUgZnJvbSBcIi4uL3pvbmUuanNcIjtcblxuLyoqXG4gKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmFsaWRab25lIGV4dGVuZHMgWm9uZSB7XG4gIGNvbnN0cnVjdG9yKHpvbmVOYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogIEBwcml2YXRlICovXG4gICAgdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdW5pdmVyc2FsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBmb3JtYXRPZmZzZXQoKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5pbXBvcnQgWm9uZSBmcm9tIFwiLi4vem9uZS5qc1wiO1xuaW1wb3J0IElBTkFab25lIGZyb20gXCIuLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi4vem9uZXMvZml4ZWRPZmZzZXRab25lLmpzXCI7XG5pbXBvcnQgSW52YWxpZFpvbmUgZnJvbSBcIi4uL3pvbmVzL2ludmFsaWRab25lLmpzXCI7XG5cbmltcG9ydCB7IGlzVW5kZWZpbmVkLCBpc1N0cmluZywgaXNOdW1iZXIgfSBmcm9tIFwiLi91dGlsLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICBsZXQgb2Zmc2V0O1xuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpIHx8IGlucHV0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRab25lO1xuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgWm9uZSkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcbiAgICBjb25zdCBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJsb2NhbFwiKSByZXR1cm4gZGVmYXVsdFpvbmU7XG4gICAgZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIGVsc2UgaWYgKChvZmZzZXQgPSBJQU5BWm9uZS5wYXJzZUdNVE9mZnNldChpbnB1dCkpICE9IG51bGwpIHtcbiAgICAgIC8vIGhhbmRsZSBFdGMvR01ULTQsIHdoaWNoIFY4IGNob2tlcyBvblxuICAgICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAoSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihsb3dlcmVkKSkgcmV0dXJuIElBTkFab25lLmNyZWF0ZShpbnB1dCk7XG4gICAgZWxzZSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIGlucHV0Lm9mZnNldCAmJiB0eXBlb2YgaW5wdXQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IExvY2FsWm9uZSBmcm9tIFwiLi96b25lcy9sb2NhbFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IExvY2FsZSBmcm9tIFwiLi9pbXBsL2xvY2FsZS5qc1wiO1xuXG5pbXBvcnQgeyBub3JtYWxpemVab25lIH0gZnJvbSBcIi4vaW1wbC96b25lVXRpbC5qc1wiO1xuXG5sZXQgbm93ID0gKCkgPT4gRGF0ZS5ub3coKSxcbiAgZGVmYXVsdFpvbmUgPSBudWxsLCAvLyBub3Qgc2V0dGluZyB0aGlzIGRpcmVjdGx5IHRvIExvY2FsWm9uZS5pbnN0YW5jZSBiYyBsb2FkaW5nIG9yZGVyIGlzc3Vlc1xuICBkZWZhdWx0TG9jYWxlID0gbnVsbCxcbiAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bGwsXG4gIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG51bGwsXG4gIHRocm93T25JbnZhbGlkID0gZmFsc2U7XG5cbi8qKlxuICogU2V0dGluZ3MgY29udGFpbnMgc3RhdGljIGdldHRlcnMgYW5kIHNldHRlcnMgdGhhdCBjb250cm9sIEx1eG9uJ3Mgb3ZlcmFsbCBiZWhhdmlvci4gTHV4b24gaXMgYSBzaW1wbGUgbGlicmFyeSB3aXRoIGZldyBvcHRpb25zLCBidXQgdGhlIG9uZXMgaXQgZG9lcyBoYXZlIGxpdmUgaGVyZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3Mge1xuICAvKipcbiAgICogR2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKi9cbiAgc3RhdGljIGdldCBub3coKSB7XG4gICAgcmV0dXJuIG5vdztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgKiBUaGUgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIG51bWJlciwgd2hpY2ggd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBhbiBFcG9jaCBtaWxsaXNlY29uZCBjb3VudFxuICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IERhdGUubm93KCkgKyAzMDAwIC8vIHByZXRlbmQgaXQgaXMgMyBzZWNvbmRzIGluIHRoZSBmdXR1cmVcbiAgICogQGV4YW1wbGUgU2V0dGluZ3Mubm93ID0gKCkgPT4gMCAvLyBhbHdheXMgcHJldGVuZCBpdCdzIEphbiAxLCAxOTcwIGF0IG1pZG5pZ2h0IGluIFVUQyB0aW1lXG4gICAqL1xuICBzdGF0aWMgc2V0IG5vdyhuKSB7XG4gICAgbm93ID0gbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRab25lTmFtZSgpIHtcbiAgICByZXR1cm4gU2V0dGluZ3MuZGVmYXVsdFpvbmUubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc2V0IGRlZmF1bHRab25lTmFtZSh6KSB7XG4gICAgaWYgKCF6KSB7XG4gICAgICBkZWZhdWx0Wm9uZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmF1bHRab25lID0gbm9ybWFsaXplWm9uZSh6KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSBvYmplY3QgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge1pvbmV9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRab25lKCkge1xuICAgIHJldHVybiBkZWZhdWx0Wm9uZSB8fCBMb2NhbFpvbmUuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgc2V0IGRlZmF1bHRMb2NhbGUobG9jYWxlKSB7XG4gICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlZmF1bHQgbnVtYmVyaW5nIHN5c3RlbSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKG51bWJlcmluZ1N5c3RlbSkge1xuICAgIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmdTeXN0ZW07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPdXRwdXRDYWxlbmRhcigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE91dHB1dENhbGVuZGFyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBvdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgZ2V0IHRocm93T25JbnZhbGlkKCkge1xuICAgIHJldHVybiB0aHJvd09uSW52YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgc2V0IHRocm93T25JbnZhbGlkKHQpIHtcbiAgICB0aHJvd09uSW52YWxpZCA9IHQ7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgTHV4b24ncyBnbG9iYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzdGF0aWMgcmVzZXRDYWNoZXMoKSB7XG4gICAgTG9jYWxlLnJlc2V0Q2FjaGUoKTtcbiAgICBJQU5BWm9uZS5yZXNldENhY2hlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGhhc0Zvcm1hdFRvUGFydHMsIGhhc0ludGwsIHBhZFN0YXJ0LCByb3VuZFRvLCBoYXNSZWxhdGl2ZSB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCAqIGFzIEVuZ2xpc2ggZnJvbSBcIi4vZW5nbGlzaC5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9mb3JtYXR0ZXIuanNcIjtcblxubGV0IGludGxEVENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWREVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgZHRmID0gaW50bERUQ2FjaGVba2V5XTtcbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxubGV0IGludGxOdW1DYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkSU5GKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGluZiA9IGludGxOdW1DYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBpbnRsUmVsQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZFJURihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCB7IGJhc2UsIC4uLmNhY2hlS2V5T3B0cyB9ID0gb3B0czsgLy8gZXhjbHVkZSBgYmFzZWAgZnJvbSB0aGUgb3B0aW9uc1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgbGV0IGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxSZWxDYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIGlmIChoYXNJbnRsKCkpIHtcbiAgICBjb25zdCBjb21wdXRlZFN5cyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xuICAgIC8vIG5vZGUgc29tZXRpbWVzIGRlZmF1bHRzIHRvIFwidW5kXCIuIE92ZXJyaWRlIHRoYXQgYmVjYXVzZSB0aGF0IGlzIGR1bWJcbiAgICBzeXNMb2NhbGVDYWNoZSA9ICFjb21wdXRlZFN5cyB8fCBjb21wdXRlZFN5cyA9PT0gXCJ1bmRcIiA/IFwiZW4tVVNcIiA6IGNvbXB1dGVkU3lzO1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IFwiZW4tVVNcIjtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlU3RyKSB7XG4gIC8vIEkgcmVhbGx5IHdhbnQgdG8gYXZvaWQgd3JpdGluZyBhIEJDUCA0NyBwYXJzZXJcbiAgLy8gc2VlLCBlLmcuIGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vYmNwLTQ3XG4gIC8vIEluc3RlYWQsIHdlJ2xsIGRvIHRoaXM6XG5cbiAgLy8gYSkgaWYgdGhlIHN0cmluZyBoYXMgbm8gLXUgZXh0ZW5zaW9ucywganVzdCBsZWF2ZSBpdCBhbG9uZVxuICAvLyBiKSBpZiBpdCBkb2VzLCB1c2UgSW50bCB0byByZXNvbHZlIGV2ZXJ5dGhpbmdcbiAgLy8gYykgaWYgSW50bCBmYWlscywgdHJ5IGFnYWluIHdpdGhvdXQgdGhlIC11XG5cbiAgY29uc3QgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCItdS1cIik7XG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIGxldCBvcHRpb25zO1xuICAgIGNvbnN0IHNtYWxsZXIgPSBsb2NhbGVTdHIuc3Vic3RyaW5nKDAsIHVJbmRleCk7XG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gb3B0aW9ucztcbiAgICAvLyByZXR1cm4gdGhlIHNtYWxsZXIgb25lIHNvIHRoYXQgd2UgY2FuIGFwcGVuZCB0aGUgY2FsZW5kYXIgYW5kIG51bWJlcmluZyBvdmVycmlkZXMgdG8gaXRcbiAgICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChoYXNJbnRsKCkpIHtcbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gXCItdVwiO1xuXG4gICAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgICAgbG9jYWxlU3RyICs9IGAtY2EtJHtvdXRwdXRDYWxlbmRhcn1gO1xuICAgICAgfVxuXG4gICAgICBpZiAobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICAgIGxvY2FsZVN0ciArPSBgLW51LSR7bnVtYmVyaW5nU3lzdGVtfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbG9jYWxlU3RyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlU3RyO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgIGNvbnN0IGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIGksIDEpO1xuICAgIG1zLnB1c2goZihkdCkpO1xuICB9XG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xuICBjb25zdCBtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMgKyBpKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZGVmYXVsdE9LLCBlbmdsaXNoRm4sIGludGxGbikge1xuICBjb25zdCBtb2RlID0gbG9jLmxpc3RpbmdNb2RlKGRlZmF1bHRPSyk7XG5cbiAgaWYgKG1vZGUgPT09IFwiZXJyb3JcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBlbmdsaXNoRm4obGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW50bEZuKGxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNGYXN0TnVtYmVycyhsb2MpIHtcbiAgaWYgKGxvYy5udW1iZXJpbmdTeXN0ZW0gJiYgbG9jLm51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGxvYy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiIHx8XG4gICAgICAhbG9jLmxvY2FsZSB8fFxuICAgICAgbG9jLmxvY2FsZS5zdGFydHNXaXRoKFwiZW5cIikgfHxcbiAgICAgIChoYXNJbnRsKCkgJiYgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jLmludGwpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIpXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgUG9seU51bWJlckZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKGludGwsIGZvcmNlU2ltcGxlLCBvcHRzKSB7XG4gICAgdGhpcy5wYWRUbyA9IG9wdHMucGFkVG8gfHwgMDtcbiAgICB0aGlzLmZsb29yID0gb3B0cy5mbG9vciB8fCBmYWxzZTtcblxuICAgIGlmICghZm9yY2VTaW1wbGUgJiYgaGFzSW50bCgpKSB7XG4gICAgICBjb25zdCBpbnRsT3B0cyA9IHsgdXNlR3JvdXBpbmc6IGZhbHNlIH07XG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoaSkge1xuICAgIGlmICh0aGlzLmluZikge1xuICAgICAgY29uc3QgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICAgIGNvbnN0IGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiByb3VuZFRvKGksIDMpO1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KGZpeGVkLCB0aGlzLnBhZFRvKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIFBvbHlEYXRlRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoZHQsIGludGwsIG9wdHMpIHtcbiAgICB0aGlzLm9wdHMgPSBvcHRzO1xuICAgIHRoaXMuaGFzSW50bCA9IGhhc0ludGwoKTtcblxuICAgIGxldCB6O1xuICAgIGlmIChkdC56b25lLnVuaXZlcnNhbCAmJiB0aGlzLmhhc0ludGwpIHtcbiAgICAgIC8vIENocm9taXVtIGRvZXNuJ3Qgc3VwcG9ydCBmaXhlZC1vZmZzZXQgem9uZXMgbGlrZSBFdGMvR01UKzggaW4gaXRzIGZvcm1hdHRlcixcbiAgICAgIC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0zNjQzNzQuXG4gICAgICAvLyBTbyB3ZSBoYXZlIHRvIG1ha2UgZG8uIFR3byBjYXNlczpcbiAgICAgIC8vIDEuIFRoZSBmb3JtYXQgb3B0aW9ucyB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFdlIGNhbid0IGRvIHRoYXQsIHNvIHRoZSBiZXN0XG4gICAgICAvLyB3ZSBjYW4gZG8gaXMgZm9ybWF0IHRoZSBkYXRlIGluIFVUQy5cbiAgICAgIC8vIDIuIFRoZSBmb3JtYXQgb3B0aW9ucyBkb24ndCB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFRoZW4gd2UgY2FuIGFkanVzdCB0aGVtXG4gICAgICAvLyB0aGUgdGltZSBhbmQgdGVsbCB0aGUgZm9ybWF0dGVyIHRvIHNob3cgaXQgdG8gdXMgaW4gVVRDLCBzbyB0aGF0IHRoZSB0aW1lIGlzIHJpZ2h0XG4gICAgICAvLyBhbmQgdGhlIGJhZCB6b25lIGRvZXNuJ3Qgc2hvdyB1cC5cbiAgICAgIC8vIFdlIGNhbiBjbGVhbiBhbGwgdGhpcyB1cCB3aGVuIENocm9tZSBmaXhlcyB0aGlzLlxuICAgICAgeiA9IFwiVVRDXCI7XG4gICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwibG9jYWxcIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIGNvbnN0IGludGxPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzKTtcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIGludGxPcHRzLnRpbWVab25lID0gejtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHRmID0gZ2V0Q2FjaGVkRFRGKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoKSB7XG4gICAgaWYgKHRoaXMuaGFzSW50bCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdCh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b2tlbkZvcm1hdCA9IEVuZ2xpc2guZm9ybWF0U3RyaW5nKHRoaXMub3B0cyksXG4gICAgICAgIGxvYyA9IExvY2FsZS5jcmVhdGUoXCJlbi1VU1wiKTtcbiAgICAgIHJldHVybiBGb3JtYXR0ZXIuY3JlYXRlKGxvYykuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKHRoaXMuZHQsIHRva2VuRm9ybWF0KTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRUb1BhcnRzKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwgJiYgaGFzRm9ybWF0VG9QYXJ0cygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0VG9QYXJ0cyh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGlzIGtpbmQgb2YgYSBjb3Agb3V0LiBXZSBhY3R1YWxseSBjb3VsZCBkbyB0aGlzIGZvciBFbmdsaXNoLiBIb3dldmVyLCB3ZSBjb3VsZG4ndCBkbyBpdCBmb3IgaW50bCBzdHJpbmdzXG4gICAgICAvLyBhbmQgSU1PIGl0J3MgdG9vIHdlaXJkIHRvIGhhdmUgYW4gdW5jYW5ueSB2YWxsZXkgbGlrZSB0aGF0XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogXCJsYXRuXCIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyOiBcImdyZWdvcnlcIlxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBQb2x5UmVsRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoaW50bCwgaXNFbmdsaXNoLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gT2JqZWN0LmFzc2lnbih7IHN0eWxlOiBcImxvbmdcIiB9LCBvcHRzKTtcbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRW5nbGlzaC5mb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIHRoaXMub3B0cy5udW1lcmljLCB0aGlzLm9wdHMuc3R5bGUgIT09IFwibG9uZ1wiKTtcbiAgICB9XG4gIH1cblxuICBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2FsZSB7XG4gIHN0YXRpYyBmcm9tT3B0cyhvcHRzKSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUob3B0cy5sb2NhbGUsIG9wdHMubnVtYmVyaW5nU3lzdGVtLCBvcHRzLm91dHB1dENhbGVuZGFyLCBvcHRzLmRlZmF1bHRUb0VOKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyLCBkZWZhdWx0VG9FTiA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc3BlY2lmaWVkTG9jYWxlID0gbG9jYWxlIHx8IFNldHRpbmdzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgICAgbG9jYWxlUiA9IHNwZWNpZmllZExvY2FsZSB8fCAoZGVmYXVsdFRvRU4gPyBcImVuLVVTXCIgOiBzeXN0ZW1Mb2NhbGUoKSksXG4gICAgICBudW1iZXJpbmdTeXN0ZW1SID0gbnVtYmVyaW5nU3lzdGVtIHx8IFNldHRpbmdzLmRlZmF1bHROdW1iZXJpbmdTeXN0ZW0sXG4gICAgICBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuICAgIGludGxEVENhY2hlID0ge307XG4gICAgaW50bE51bUNhY2hlID0ge307XG4gICAgaW50bFJlbENhY2hlID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdCh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICBjb25zdCBbcGFyc2VkTG9jYWxlLCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0sIHBhcnNlZE91dHB1dENhbGVuZGFyXSA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSk7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XG5cbiAgICB0aGlzLndlZWtkYXlzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcblxuICAgIHRoaXMuc3BlY2lmaWVkTG9jYWxlID0gc3BlY2lmaWVkTG9jYWxlO1xuICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGZhc3ROdW1iZXJzKCkge1xuICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICB9XG5cbiAgbGlzdGluZ01vZGUoZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIGNvbnN0IGludGwgPSBoYXNJbnRsKCksXG4gICAgICBoYXNGVFAgPSBpbnRsICYmIGhhc0Zvcm1hdFRvUGFydHMoKSxcbiAgICAgIGlzQWN0dWFsbHlFbiA9IHRoaXMuaXNFbmdsaXNoKCksXG4gICAgICBoYXNOb1dlaXJkbmVzcyA9XG4gICAgICAgICh0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gbnVsbCB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCIpICYmXG4gICAgICAgICh0aGlzLm91dHB1dENhbGVuZGFyID09PSBudWxsIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IFwiZ3JlZ29yeVwiKTtcblxuICAgIGlmICghaGFzRlRQICYmICEoaXNBY3R1YWxseUVuICYmIGhhc05vV2VpcmRuZXNzKSAmJiAhZGVmYXVsdE9LKSB7XG4gICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgIH0gZWxzZSBpZiAoIWhhc0ZUUCB8fCAoaXNBY3R1YWxseUVuICYmIGhhc05vV2VpcmRuZXNzKSkge1xuICAgICAgcmV0dXJuIFwiZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiaW50bFwiO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoXG4gICAgICAgIGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLFxuICAgICAgICBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlZGVmYXVsdFRvRU4oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoT2JqZWN0LmFzc2lnbih7fSwgYWx0cywgeyBkZWZhdWx0VG9FTjogdHJ1ZSB9KSk7XG4gIH1cblxuICByZWRlZmF1bHRUb1N5c3RlbShhbHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7IGRlZmF1bHRUb0VOOiBmYWxzZSB9KSk7XG4gIH1cblxuICBtb250aHMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIEVuZ2xpc2gubW9udGhzLCAoKSA9PiB7XG4gICAgICBjb25zdCBpbnRsID0gZm9ybWF0ID8geyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0gOiB7IG1vbnRoOiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcE1vbnRocyhkdCA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgd2Vla2RheXMobGVuZ3RoLCBmb3JtYXQgPSBmYWxzZSwgZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIEVuZ2xpc2gud2Vla2RheXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXRcbiAgICAgICAgICA/IHsgd2Vla2RheTogbGVuZ3RoLCB5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH1cbiAgICAgICAgICA6IHsgd2Vla2RheTogbGVuZ3RoIH0sXG4gICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/IFwiZm9ybWF0XCIgOiBcInN0YW5kYWxvbmVcIjtcbiAgICAgIGlmICghdGhpcy53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwV2Vla2RheXMoZHQgPT5cbiAgICAgICAgICB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwid2Vla2RheVwiKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH1cblxuICBtZXJpZGllbXMoZGVmYXVsdE9LID0gdHJ1ZSkge1xuICAgIHJldHVybiBsaXN0U3R1ZmYoXG4gICAgICB0aGlzLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgZGVmYXVsdE9LLFxuICAgICAgKCkgPT4gRW5nbGlzaC5tZXJpZGllbXMsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXG4gICAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci5cbiAgICAgICAgaWYgKCF0aGlzLm1lcmlkaWVtQ2FjaGUpIHtcbiAgICAgICAgICBjb25zdCBpbnRsID0geyBob3VyOiBcIm51bWVyaWNcIiwgaG91cjEyOiB0cnVlIH07XG4gICAgICAgICAgdGhpcy5tZXJpZGllbUNhY2hlID0gW0RhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDkpLCBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCAxOSldLm1hcChcbiAgICAgICAgICAgIGR0ID0+IHRoaXMuZXh0cmFjdChkdCwgaW50bCwgXCJkYXlwZXJpb2RcIilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWVyaWRpZW1DYWNoZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZXJhcyhsZW5ndGgsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBFbmdsaXNoLmVyYXMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSB7IGVyYTogbGVuZ3RoIH07XG5cbiAgICAgIC8vIFRoaXMgaXMgdXR0ZXIgYnVsbHNoaXQuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cbiAgICAgIGlmICghdGhpcy5lcmFDYWNoZVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoZHQgPT5cbiAgICAgICAgICB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwiZXJhXCIpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVyYUNhY2hlW2xlbmd0aF07XG4gICAgfSk7XG4gIH1cblxuICBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICBjb25zdCBkZiA9IHRoaXMuZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSxcbiAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICBtYXRjaGluZyA9IHJlc3VsdHMuZmluZChtID0+IG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBmaWVsZCk7XG4gICAgcmV0dXJuIG1hdGNoaW5nID8gbWF0Y2hpbmcudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgbnVtYmVyRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIC8vIHRoaXMgZm9yY2VzaW1wbGUgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHJlc3Qgb2YgdGhlIGNvbmRpdGlvbiBpcyB1c2VkIGhlYXZpbHkpXG4gICAgcmV0dXJuIG5ldyBQb2x5TnVtYmVyRm9ybWF0dGVyKHRoaXMuaW50bCwgb3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzLCBvcHRzKTtcbiAgfVxuXG4gIGR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XG4gIH1cblxuICByZWxGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBQb2x5UmVsRm9ybWF0dGVyKHRoaXMuaW50bCwgdGhpcy5pc0VuZ2xpc2goKSwgb3B0cyk7XG4gIH1cblxuICBpc0VuZ2xpc2goKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubG9jYWxlID09PSBcImVuXCIgfHxcbiAgICAgIHRoaXMubG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09IFwiZW4tdXNcIiB8fFxuICAgICAgKGhhc0ludGwoKSAmJiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmludGwpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZS5zdGFydHNXaXRoKFwiZW4tdXNcIikpXG4gICAgKTtcbiAgfVxuXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmXG4gICAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9PT0gb3RoZXIubnVtYmVyaW5nU3lzdGVtICYmXG4gICAgICB0aGlzLm91dHB1dENhbGVuZGFyID09PSBvdGhlci5vdXRwdXRDYWxlbmRhclxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHVudHJ1bmNhdGVZZWFyLFxuICBzaWduZWRPZmZzZXQsXG4gIHBhcnNlSW50ZWdlcixcbiAgcGFyc2VNaWxsaXMsXG4gIGlhbmFSZWdleCxcbiAgaXNVbmRlZmluZWRcbn0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0ICogYXMgRW5nbGlzaCBmcm9tIFwiLi9lbmdsaXNoLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcblxuLypcbiAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XG4gKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cbiAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcbiAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxuICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXG4gKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxuICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXG4gKi9cblxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoLi4ucmVnZXhlcykge1xuICBjb25zdCBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoKGYsIHIpID0+IGYgKyByLnNvdXJjZSwgXCJcIik7XG4gIHJldHVybiBSZWdFeHAoYF4ke2Z1bGx9JGApO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lRXh0cmFjdG9ycyguLi5leHRyYWN0b3JzKSB7XG4gIHJldHVybiBtID0+XG4gICAgZXh0cmFjdG9yc1xuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFttZXJnZWRWYWxzLCBtZXJnZWRab25lLCBjdXJzb3JdLCBleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IFt2YWwsIHpvbmUsIG5leHRdID0gZXgobSwgY3Vyc29yKTtcbiAgICAgICAgICByZXR1cm4gW09iamVjdC5hc3NpZ24obWVyZ2VkVmFscywgdmFsKSwgbWVyZ2VkWm9uZSB8fCB6b25lLCBuZXh0XTtcbiAgICAgICAgfSxcbiAgICAgICAgW3t9LCBudWxsLCAxXVxuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIDIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzLCAuLi5wYXR0ZXJucykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAoY29uc3QgW3JlZ2V4LCBleHRyYWN0b3JdIG9mIHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbnVsbCwgbnVsbF07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKC4uLmtleXMpIHtcbiAgcmV0dXJuIChtYXRjaCwgY3Vyc29yKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTtcbiAgICB9XG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufVxuXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXG5jb25zdCBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS8sXG4gIGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsOX0pKT8pPyk/LyxcbiAgaXNvVGltZVJlZ2V4ID0gUmVnRXhwKGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSR7b2Zmc2V0UmVnZXguc291cmNlfT9gKSxcbiAgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKGAoPzpUJHtpc29UaW1lUmVnZXguc291cmNlfSk/YCksXG4gIGlzb1ltZFJlZ2V4ID0gLyhbKy1dXFxkezZ9fFxcZHs0fSkoPzotPyhcXGRcXGQpKD86LT8oXFxkXFxkKSk/KT8vLFxuICBpc29XZWVrUmVnZXggPSAvKFxcZHs0fSktP1coXFxkXFxkKSg/Oi0/KFxcZCkpPy8sXG4gIGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvLFxuICBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZShcIndlZWtZZWFyXCIsIFwid2Vla051bWJlclwiLCBcIndlZWtEYXlcIiksXG4gIGV4dHJhY3RJU09PcmRpbmFsRGF0YSA9IHNpbXBsZVBhcnNlKFwieWVhclwiLCBcIm9yZGluYWxcIiksXG4gIHNxbFltZFJlZ2V4ID0gLyhcXGR7NH0pLShcXGRcXGQpLShcXGRcXGQpLywgLy8gZHVtYmVkLWRvd24gdmVyc2lvbiBvZiB0aGUgSVNPIG9uZVxuICBzcWxUaW1lUmVnZXggPSBSZWdFeHAoXG4gICAgYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9ID8oPzoke29mZnNldFJlZ2V4LnNvdXJjZX18KCR7aWFuYVJlZ2V4LnNvdXJjZX0pKT9gXG4gICksXG4gIHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86ICR7c3FsVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xuXG5mdW5jdGlvbiBpbnQobWF0Y2gsIHBvcywgZmFsbGJhY2spIHtcbiAgY29uc3QgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICB5ZWFyOiBpbnQobWF0Y2gsIGN1cnNvciksXG4gICAgbW9udGg6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMSksXG4gICAgZGF5OiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDEpXG4gIH07XG5cbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyAzXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT1RpbWUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCBpdGVtID0ge1xuICAgIGhvdXI6IGludChtYXRjaCwgY3Vyc29yLCAwKSxcbiAgICBtaW51dGU6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXG4gICAgc2Vjb25kOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLFxuICAgIG1pbGxpc2Vjb25kOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSlcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPT2Zmc2V0KG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pLFxuICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IElBTkFab25lLmNyZWF0ZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdO1xufVxuXG4vLyBJU08gZHVyYXRpb24gcGFyc2luZ1xuXG5jb25zdCBpc29EdXJhdGlvbiA9IC9eLT9QKD86KD86KC0/XFxkezEsOX0pWSk/KD86KC0/XFxkezEsOX0pTSk/KD86KC0/XFxkezEsOX0pVyk/KD86KC0/XFxkezEsOX0pRCk/KD86VCg/OigtP1xcZHsxLDl9KUgpPyg/OigtP1xcZHsxLDl9KU0pPyg/OigtP1xcZHsxLDl9KSg/OlsuLF0oLT9cXGR7MSw5fSkpP1MpPyk/KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgY29uc3QgW1xuICAgIHMsXG4gICAgeWVhclN0cixcbiAgICBtb250aFN0cixcbiAgICB3ZWVrU3RyLFxuICAgIGRheVN0cixcbiAgICBob3VyU3RyLFxuICAgIG1pbnV0ZVN0cixcbiAgICBzZWNvbmRTdHIsXG4gICAgbWlsbGlzZWNvbmRzU3RyXG4gIF0gPSBtYXRjaDtcblxuICBjb25zdCBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuXG4gIGNvbnN0IG1heWJlTmVnYXRlID0gbnVtID0+IChudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXggPyAtbnVtIDogbnVtKTtcblxuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHllYXJzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoeWVhclN0cikpLFxuICAgICAgbW9udGhzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIobW9udGhTdHIpKSxcbiAgICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIod2Vla1N0cikpLFxuICAgICAgZGF5czogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKGRheVN0cikpLFxuICAgICAgaG91cnM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcihob3VyU3RyKSksXG4gICAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIobWludXRlU3RyKSksXG4gICAgICBzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoc2Vjb25kU3RyKSksXG4gICAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0cikpXG4gICAgfVxuICBdO1xufVxuXG4vLyBUaGVzZSBhcmUgYSBsaXR0bGUgYnJhaW5kZWFkLiBFRFQgKnNob3VsZCogdGVsbCB1cyB0aGF0IHdlJ3JlIGluLCBzYXksIEFtZXJpY2EvTmV3X1lvcmtcbi8vIGFuZCBub3QganVzdCB0aGF0IHdlJ3JlIGluIC0yNDAgKnJpZ2h0IG5vdyouIEJ1dCBzaW5jZSBJIGRvbid0IHRoaW5rIHRoZXNlIGFyZSB1c2VkIHRoYXQgb2Z0ZW5cbi8vIEknbSBqdXN0IGdvaW5nIHRvIGlnbm9yZSB0aGF0XG5jb25zdCBvYnNPZmZzZXRzID0ge1xuICBHTVQ6IDAsXG4gIEVEVDogLTQgKiA2MCxcbiAgRVNUOiAtNSAqIDYwLFxuICBDRFQ6IC01ICogNjAsXG4gIENTVDogLTYgKiA2MCxcbiAgTURUOiAtNiAqIDYwLFxuICBNU1Q6IC03ICogNjAsXG4gIFBEVDogLTcgKiA2MCxcbiAgUFNUOiAtOCAqIDYwXG59O1xuXG5mdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludGVnZXIoeWVhclN0cikpIDogcGFyc2VJbnRlZ2VyKHllYXJTdHIpLFxuICAgIG1vbnRoOiBFbmdsaXNoLm1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcbiAgICBkYXk6IHBhcnNlSW50ZWdlcihkYXlTdHIpLFxuICAgIGhvdXI6IHBhcnNlSW50ZWdlcihob3VyU3RyKSxcbiAgICBtaW51dGU6IHBhcnNlSW50ZWdlcihtaW51dGVTdHIpXG4gIH07XG5cbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xuICBpZiAod2Vla2RheVN0cikge1xuICAgIHJlc3VsdC53ZWVrZGF5ID1cbiAgICAgIHdlZWtkYXlTdHIubGVuZ3RoID4gM1xuICAgICAgICA/IEVuZ2xpc2gud2Vla2RheXNMb25nLmluZGV4T2Yod2Vla2RheVN0cikgKyAxXG4gICAgICAgIDogRW5nbGlzaC53ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUkZDIDI4MjIvNTMyMlxuY29uc3QgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgY29uc3QgW1xuICAgICAgLFxuICAgICAgd2Vla2RheVN0cixcbiAgICAgIGRheVN0cixcbiAgICAgIG1vbnRoU3RyLFxuICAgICAgeWVhclN0cixcbiAgICAgIGhvdXJTdHIsXG4gICAgICBtaW51dGVTdHIsXG4gICAgICBzZWNvbmRTdHIsXG4gICAgICBvYnNPZmZzZXQsXG4gICAgICBtaWxPZmZzZXQsXG4gICAgICBvZmZIb3VyU3RyLFxuICAgICAgb2ZmTWludXRlU3RyXG4gICAgXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcblxuICBsZXQgb2Zmc2V0O1xuICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICB9IGVsc2UgaWYgKG1pbE9mZnNldCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7XG4gIH1cblxuICByZXR1cm4gW3Jlc3VsdCwgbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpXTtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCBcIiBcIilcbiAgICAucmVwbGFjZSgvKFxcc1xccyspL2csIFwiIFwiKVxuICAgIC50cmltKCk7XG59XG5cbi8vIGh0dHAgZGF0ZVxuXG5jb25zdCByZmMxMTIzID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgcmZjODUwID0gL14oTW9uZGF5fFR1ZXNkYXl8V2Vkc2RheXxUaHVyc2RheXxGcmlkYXl8U2F0dXJkYXl8U3VuZGF5KSwgKFxcZFxcZCktKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKS0oXFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgYXNjaWkgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBcXGR8XFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSAoXFxkezR9KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0UkZDMTEyM09yODUwKG1hdGNoKSB7XG4gIGNvbnN0IFssIHdlZWtkYXlTdHIsIGRheVN0ciwgbW9udGhTdHIsIHllYXJTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyXSA9IG1hdGNoLFxuICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcbiAgcmV0dXJuIFtyZXN1bHQsIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZV07XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RBU0NJSShtYXRjaCkge1xuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0ciwgeWVhclN0cl0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5jb25zdCBpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvWW1kUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvVGltZUNvbWJpbmVkUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29UaW1lUmVnZXgpO1xuXG5jb25zdCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPWW1kLFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldFxuKTtcbmNvbnN0IGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPV2Vla0RhdGEsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0XG4pO1xuY29uc3QgZXh0cmFjdElTT09yZGluYWxEYXRhQW5kVGltZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09PcmRpbmFsRGF0YSwgZXh0cmFjdElTT1RpbWUpO1xuY29uc3QgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCk7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW2lzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lQW5kT2Zmc2V0XSxcbiAgICBbaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldF0sXG4gICAgW2lzb09yZGluYWxXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPT3JkaW5hbERhdGFBbmRUaW1lXSxcbiAgICBbaXNvVGltZUNvbWJpbmVkUmVnZXgsIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0XVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhUVFBEYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW3JmYzExMjMsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLFxuICAgIFtyZmM4NTAsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLFxuICAgIFthc2NpaSwgZXh0cmFjdEFTQ0lJXVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJU09EdXJhdGlvbihzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvRHVyYXRpb24sIGV4dHJhY3RJU09EdXJhdGlvbl0pO1xufVxuXG5jb25zdCBzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XG5cbmNvbnN0IGV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1ltZCxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcbiAgcmV0dXJuIHBhcnNlKFxuICAgIHMsXG4gICAgW3NxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09ZbWRUaW1lT2Zmc2V0QW5kSUFOQVpvbmVdLFxuICAgIFtzcWxUaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZV1cbiAgKTtcbn1cbiIsImltcG9ydCB7IEludmFsaWRBcmd1bWVudEVycm9yLCBJbnZhbGlkRHVyYXRpb25FcnJvciwgSW52YWxpZFVuaXRFcnJvciB9IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5pbXBvcnQgTG9jYWxlIGZyb20gXCIuL2ltcGwvbG9jYWxlLmpzXCI7XG5pbXBvcnQgeyBwYXJzZUlTT0R1cmF0aW9uIH0gZnJvbSBcIi4vaW1wbC9yZWdleFBhcnNlci5qc1wiO1xuaW1wb3J0IHtcbiAgYXNOdW1iZXIsXG4gIGhhc093blByb3BlcnR5LFxuICBpc051bWJlcixcbiAgaXNVbmRlZmluZWQsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUb1xufSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIER1cmF0aW9uXCI7XG5cbi8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcbmNvbnN0IGxvd09yZGVyTWF0cml4ID0ge1xuICAgIHdlZWtzOiB7XG4gICAgICBkYXlzOiA3LFxuICAgICAgaG91cnM6IDcgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IDcgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIGhvdXJzOiAyNCxcbiAgICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICB9LFxuICAgIGhvdXJzOiB7IG1pbnV0ZXM6IDYwLCBzZWNvbmRzOiA2MCAqIDYwLCBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwIH0sXG4gICAgbWludXRlczogeyBzZWNvbmRzOiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDEwMDAgfSxcbiAgICBzZWNvbmRzOiB7IG1pbGxpc2Vjb25kczogMTAwMCB9XG4gIH0sXG4gIGNhc3VhbE1hdHJpeCA9IE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgeWVhcnM6IHtcbiAgICAgICAgbW9udGhzOiAxMixcbiAgICAgICAgd2Vla3M6IDUyLFxuICAgICAgICBkYXlzOiAzNjUsXG4gICAgICAgIGhvdXJzOiAzNjUgKiAyNCxcbiAgICAgICAgbWludXRlczogMzY1ICogMjQgKiA2MCxcbiAgICAgICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgICAgICBtaWxsaXNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICAgIH0sXG4gICAgICBxdWFydGVyczoge1xuICAgICAgICBtb250aHM6IDMsXG4gICAgICAgIHdlZWtzOiAxMyxcbiAgICAgICAgZGF5czogOTEsXG4gICAgICAgIGhvdXJzOiA5MSAqIDI0LFxuICAgICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgICB9LFxuICAgICAgbW9udGhzOiB7XG4gICAgICAgIHdlZWtzOiA0LFxuICAgICAgICBkYXlzOiAzMCxcbiAgICAgICAgaG91cnM6IDMwICogMjQsXG4gICAgICAgIG1pbnV0ZXM6IDMwICogMjQgKiA2MCxcbiAgICAgICAgc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgICB9XG4gICAgfSxcbiAgICBsb3dPcmRlck1hdHJpeFxuICApLFxuICBkYXlzSW5ZZWFyQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQwMCxcbiAgZGF5c0luTW9udGhBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDgwMCxcbiAgYWNjdXJhdGVNYXRyaXggPSBPYmplY3QuYXNzaWduKFxuICAgIHtcbiAgICAgIHllYXJzOiB7XG4gICAgICAgIG1vbnRoczogMTIsXG4gICAgICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA3LFxuICAgICAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUsXG4gICAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICAgICAgbWludXRlczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCxcbiAgICAgICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgICAgIH0sXG4gICAgICBxdWFydGVyczoge1xuICAgICAgICBtb250aHM6IDMsXG4gICAgICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyAyOCxcbiAgICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICAgICAgaG91cnM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCkgLyA0LFxuICAgICAgICBtaW51dGVzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCkgLyA0LFxuICAgICAgICBzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwKSAvIDQsXG4gICAgICAgIG1pbGxpc2Vjb25kczogKGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApIC8gNFxuICAgICAgfSxcbiAgICAgIG1vbnRoczoge1xuICAgICAgICB3ZWVrczogZGF5c0luTW9udGhBY2N1cmF0ZSAvIDcsXG4gICAgICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgICAgIGhvdXJzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQsXG4gICAgICAgIG1pbnV0ZXM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgICAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgICBtaWxsaXNlY29uZHM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gICAgICB9XG4gICAgfSxcbiAgICBsb3dPcmRlck1hdHJpeFxuICApO1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbmNvbnN0IG9yZGVyZWRVbml0cyA9IFtcbiAgXCJ5ZWFyc1wiLFxuICBcInF1YXJ0ZXJzXCIsXG4gIFwibW9udGhzXCIsXG4gIFwid2Vla3NcIixcbiAgXCJkYXlzXCIsXG4gIFwiaG91cnNcIixcbiAgXCJtaW51dGVzXCIsXG4gIFwic2Vjb25kc1wiLFxuICBcIm1pbGxpc2Vjb25kc1wiXG5dO1xuXG5jb25zdCByZXZlcnNlVW5pdHMgPSBvcmRlcmVkVW5pdHMuc2xpY2UoMCkucmV2ZXJzZSgpO1xuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMgXCJjcmVhdGUgYW5vdGhlciBpbnN0YW5jZSBqdXN0IGxpa2UgdGhpcyBvbmUsIGJ1dCB3aXRoIHRoZXNlIGNoYW5nZXNcIlxuZnVuY3Rpb24gY2xvbmUoZHVyLCBhbHRzLCBjbGVhciA9IGZhbHNlKSB7XG4gIC8vIGRlZXAgbWVyZ2UgZm9yIHZhbHNcbiAgY29uc3QgY29uZiA9IHtcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiBPYmplY3QuYXNzaWduKHt9LCBkdXIudmFsdWVzLCBhbHRzLnZhbHVlcyB8fCB7fSksXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3lcbiAgfTtcbiAgcmV0dXJuIG5ldyBEdXJhdGlvbihjb25mKTtcbn1cblxuZnVuY3Rpb24gYW50aVRydW5jKG4pIHtcbiAgcmV0dXJuIG4gPCAwID8gTWF0aC5mbG9vcihuKSA6IE1hdGguY2VpbChuKTtcbn1cblxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuZnVuY3Rpb24gY29udmVydChtYXRyaXgsIGZyb21NYXAsIGZyb21Vbml0LCB0b01hcCwgdG9Vbml0KSB7XG4gIGNvbnN0IGNvbnYgPSBtYXRyaXhbdG9Vbml0XVtmcm9tVW5pdF0sXG4gICAgcmF3ID0gZnJvbU1hcFtmcm9tVW5pdF0gLyBjb252LFxuICAgIHNhbWVTaWduID0gTWF0aC5zaWduKHJhdykgPT09IE1hdGguc2lnbih0b01hcFt0b1VuaXRdKSxcbiAgICAvLyBvaywgc28gdGhpcyBpcyB3aWxkLCBidXQgc2VlIHRoZSBtYXRyaXggaW4gdGhlIHRlc3RzXG4gICAgYWRkZWQgPVxuICAgICAgIXNhbWVTaWduICYmIHRvTWFwW3RvVW5pdF0gIT09IDAgJiYgTWF0aC5hYnMocmF3KSA8PSAxID8gYW50aVRydW5jKHJhdykgOiBNYXRoLnRydW5jKHJhdyk7XG4gIHRvTWFwW3RvVW5pdF0gKz0gYWRkZWQ7XG4gIGZyb21NYXBbZnJvbVVuaXRdIC09IGFkZGVkICogY29udjtcbn1cblxuLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWVzKG1hdHJpeCwgdmFscykge1xuICByZXZlcnNlVW5pdHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4ge1xuICAgIGlmICghaXNVbmRlZmluZWQodmFsc1tjdXJyZW50XSkpIHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb252ZXJ0KG1hdHJpeCwgdmFscywgcHJldmlvdXMsIHZhbHMsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwcmV2aW91cztcbiAgICB9XG4gIH0sIG51bGwpO1xufVxuXG4vKipcbiAqIEEgRHVyYXRpb24gb2JqZWN0IHJlcHJlc2VudHMgYSBwZXJpb2Qgb2YgdGltZSwgbGlrZSBcIjIgbW9udGhzXCIgb3IgXCIxIGRheSwgMSBob3VyXCIuIENvbmNlcHR1YWxseSwgaXQncyBqdXN0IGEgbWFwIG9mIHVuaXRzIHRvIHRoZWlyIHF1YW50aXRpZXMsIGFjY29tcGFuaWVkIGJ5IHNvbWUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGFuZCBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLiBUaGV5IGNhbiBiZSB1c2VkIG9uIHRoZWlyIG93biBvciBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIEx1eG9uIHR5cGVzOyBmb3IgZXhhbXBsZSwgeW91IGNhbiB1c2Uge0BsaW5rIERhdGVUaW1lLnBsdXN9IHRvIGFkZCBhIER1cmF0aW9uIG9iamVjdCB0byBhIERhdGVUaW1lLCBwcm9kdWNpbmcgYW5vdGhlciBEYXRlVGltZS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIER1cmF0aW9uOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhIER1cmF0aW9uLCB1c2Uge0BsaW5rIER1cmF0aW9uLmZyb21NaWxsaXN9LCB7QGxpbmsgRHVyYXRpb24uZnJvbU9iamVjdH0sIG9yIHtAbGluayBEdXJhdGlvbi5mcm9tSVNPfS5cbiAqICogKipVbml0IHZhbHVlcyoqIFNlZSB0aGUge0BsaW5rIER1cmF0aW9uLnllYXJzfSwge0BsaW5rIER1cmF0aW9uLm1vbnRoc30sIHtAbGluayBEdXJhdGlvbi53ZWVrc30sIHtAbGluayBEdXJhdGlvbi5kYXlzfSwge0BsaW5rIER1cmF0aW9uLmhvdXJzfSwge0BsaW5rIER1cmF0aW9uLm1pbnV0ZXN9LCB7QGxpbmsgRHVyYXRpb24uc2Vjb25kc30sIHtAbGluayBEdXJhdGlvbi5taWxsaXNlY29uZHN9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlICB7QGxpbmsgRHVyYXRpb24ubG9jYWxlfSBhbmQge0BsaW5rIER1cmF0aW9uLm51bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG5ldyBEdXJhdGlvbnMgb3V0IG9mIG9sZCBvbmVzIHVzZSB7QGxpbmsgRHVyYXRpb24ucGx1c30sIHtAbGluayBEdXJhdGlvbi5taW51c30sIHtAbGluayBEdXJhdGlvbi5ub3JtYWxpemV9LCB7QGxpbmsgRHVyYXRpb24uc2V0fSwge0BsaW5rIER1cmF0aW9uLnJlY29uZmlndXJlfSwge0BsaW5rIER1cmF0aW9uLnNoaWZ0VG99LCBhbmQge0BsaW5rIER1cmF0aW9uLm5lZ2F0ZX0uXG4gKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgRHVyYXRpb24gaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgRHVyYXRpb24uYXN9LCB7QGxpbmsgRHVyYXRpb24udG9JU099LCB7QGxpbmsgRHVyYXRpb24udG9Gb3JtYXR9LCBhbmQge0BsaW5rIER1cmF0aW9uLnRvSlNPTn1cbiAqXG4gKiBUaGVyZSdzIGFyZSBtb3JlIG1ldGhvZHMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24gYW5kIHZhbGlkaXR5LCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1cmF0aW9uIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25zdCBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09IFwibG9uZ3Rlcm1cIiB8fCBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlcyA9IGNvbmZpZy52YWx1ZXM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGFjY3VyYXRlID8gXCJsb25ndGVybVwiIDogXCJjYXN1YWxcIjtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubWF0cml4ID0gYWNjdXJhdGUgPyBhY2N1cmF0ZU1hdHJpeCA6IGNhc3VhbE1hdHJpeDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tTWlsbGlzKGNvdW50LCBvcHRzKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoT2JqZWN0LmFzc2lnbih7IG1pbGxpc2Vjb25kczogY291bnQgfSwgb3B0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMuXG4gICAqIElmIHRoaXMgb2JqZWN0IGlzIGVtcHR5IHRoZW4gYSB6ZXJvIG1pbGxpc2Vjb25kcyBkdXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5xdWFydGVyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5c1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvYmoubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvYmouY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmopIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgRHVyYXRpb24uZnJvbU9iamVjdDogYXJndW1lbnQgZXhwZWN0ZWQgdG8gYmUgYW4gb2JqZWN0LCBnb3QgJHtcbiAgICAgICAgICBvYmogPT09IG51bGwgPyBcIm51bGxcIiA6IHR5cGVvZiBvYmpcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0LCBbXG4gICAgICAgIFwibG9jYWxlXCIsXG4gICAgICAgIFwibnVtYmVyaW5nU3lzdGVtXCIsXG4gICAgICAgIFwiY29udmVyc2lvbkFjY3VyYWN5XCIsXG4gICAgICAgIFwiem9uZVwiIC8vIGEgYml0IG9mIGRlYnQ7IGl0J3Mgc3VwZXIgaW5jb252ZW5pZW50IGludGVybmFsbHkgbm90IHRvIGJlIGFibGUgdG8gYmxpbmRseSBwYXNzIHRoaXNcbiAgICAgIF0pLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvYmopLFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBvYmouY29udmVyc2lvbkFjY3VyYWN5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc3RhdGljIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09EdXJhdGlvbih0ZXh0KTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICBjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHBhcnNlZCwgb3B0cyk7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIGRhdGV0aW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZER1cmF0aW9uRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIlxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuXG4gICAgaWYgKCFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIER1cmF0aW9uLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEdXJhdGlvbihvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkR1cmF0aW9uKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIER1cmF0aW9uLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIER1cmF0aW9uXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy4gWW91IG1heSB1c2UgdGhlc2UgdG9rZW5zOlxuICAgKiAqIGBTYCBmb3IgbWlsbGlzZWNvbmRzXG4gICAqICogYHNgIGZvciBzZWNvbmRzXG4gICAqICogYG1gIGZvciBtaW51dGVzXG4gICAqICogYGhgIGZvciBob3Vyc1xuICAgKiAqIGBkYCBmb3IgZGF5c1xuICAgKiAqIGBNYCBmb3IgbW9udGhzXG4gICAqICogYHlgIGZvciB5ZWFyc1xuICAgKiBOb3RlczpcbiAgICogKiBBZGQgcGFkZGluZyBieSByZXBlYXRpbmcgdGhlIHRva2VuLCBlLmcuIFwieXlcIiBwYWRzIHRoZSB5ZWFycyB0byB0d28gZGlnaXRzLCBcImhoaGhcIiBwYWRzIHRoZSBob3VycyBvdXQgdG8gZm91ciBkaWdpdHNcbiAgICogKiBUaGUgZHVyYXRpb24gd2lsbCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHNldCBvZiB1bml0cyBpbiB0aGUgZm9ybWF0IHN0cmluZyB1c2luZyB7QGxpbmsgRHVyYXRpb24uc2hpZnRUb30gYW5kIHRoZSBEdXJhdGlvbnMncyBjb252ZXJzaW9uIGFjY3VyYWN5IHNldHRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbG9vcj10cnVlXSAtIGZsb29yIG51bWVyaWNhbCB2YWx1ZXNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieSBkIHNcIikgLy89PiBcIjEgNiAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwieXkgZGQgc3NzXCIpIC8vPT4gXCIwMSAwNiAwMDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJNIFNcIikgLy89PiBcIjEyIDUxODQwMjAwMFwiXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgLy8gcmV2ZXJzZS1jb21wYXQgc2luY2UgMS4yOyB3ZSBhbHdheXMgcm91bmQgZG93biBub3csIG5ldmVyIHVwLCBhbmQgd2UgZG8gaXQgYnkgZGVmYXVsdFxuICAgIGNvbnN0IGZtdE9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzLCB7XG4gICAgICBmbG9vcjogb3B0cy5yb3VuZCAhPT0gZmFsc2UgJiYgb3B0cy5mbG9vciAhPT0gZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MsIGZtdE9wdHMpLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFzY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3Qob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIGNvbnN0IGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZhbHVlcyk7XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLmNvbnZlcnNpb25BY2N1cmFjeSA9IHRoaXMuY29udmVyc2lvbkFjY3VyYWN5O1xuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTygpIHtcbiAgICAvLyB3ZSBjb3VsZCB1c2UgdGhlIGZvcm1hdHRlciwgYnV0IHRoaXMgaXMgYW4gZWFzaWVyIHdheSB0byBnZXQgdGhlIG1pbmltdW0gc3RyaW5nXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHMgPSBcIlBcIjtcbiAgICBpZiAodGhpcy55ZWFycyAhPT0gMCkgcyArPSB0aGlzLnllYXJzICsgXCJZXCI7XG4gICAgaWYgKHRoaXMubW9udGhzICE9PSAwIHx8IHRoaXMucXVhcnRlcnMgIT09IDApIHMgKz0gdGhpcy5tb250aHMgKyB0aGlzLnF1YXJ0ZXJzICogMyArIFwiTVwiO1xuICAgIGlmICh0aGlzLndlZWtzICE9PSAwKSBzICs9IHRoaXMud2Vla3MgKyBcIldcIjtcbiAgICBpZiAodGhpcy5kYXlzICE9PSAwKSBzICs9IHRoaXMuZGF5cyArIFwiRFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwIHx8IHRoaXMubWludXRlcyAhPT0gMCB8fCB0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXG4gICAgICBzICs9IFwiVFwiO1xuICAgIGlmICh0aGlzLmhvdXJzICE9PSAwKSBzICs9IHRoaXMuaG91cnMgKyBcIkhcIjtcbiAgICBpZiAodGhpcy5taW51dGVzICE9PSAwKSBzICs9IHRoaXMubWludXRlcyArIFwiTVwiO1xuICAgIGlmICh0aGlzLnNlY29uZHMgIT09IDAgfHwgdGhpcy5taWxsaXNlY29uZHMgIT09IDApXG4gICAgICAvLyB0aGlzIHdpbGwgaGFuZGxlIFwiZmxvYXRpbmcgcG9pbnQgbWFkbmVzc1wiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW5cbiAgICAgIHMgKz0gcm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgXCJTXCI7XG4gICAgaWYgKHMgPT09IFwiUFwiKSBzICs9IFwiVDBTXCI7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXMoXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIGxvbmdlciBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbiksXG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eShkdXIudmFsdWVzLCBrKSB8fCBoYXNPd25Qcm9wZXJ0eSh0aGlzLnZhbHVlcywgaykpIHtcbiAgICAgICAgcmVzdWx0W2tdID0gZHVyLmdldChrKSArIHRoaXMuZ2V0KGspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0KHggPT4geCAqIDIpIC8vPT4geyBob3VyczogMiwgbWludXRlczogNjAgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIG1pbnV0ZXM6IDMwIH0pLm1hcFVuaXQoKHgsIHUpID0+IHUgPT09IFwiaG91clwiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBtYXBVbml0cyhmbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS55ZWFycyAvLz0+IDJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5tb250aHMgLy89PiAwXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZGF5cyAvLz0+IDNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1tEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGNvbnN0IG1peGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywgbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCwgW10pKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IG1peGVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICByZWNvbmZpZ3VyZSh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjb252ZXJzaW9uQWNjdXJhY3kgfSA9IHt9KSB7XG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KSxcbiAgICAgIG9wdHMgPSB7IGxvYyB9O1xuXG4gICAgaWYgKGNvbnZlcnNpb25BY2N1cmFjeSkge1xuICAgICAgb3B0cy5jb252ZXJzaW9uQWNjdXJhY3kgPSBjb252ZXJzaW9uQWNjdXJhY3k7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBkdXJhdGlvbiBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZXMnIG9yICdkYXlzJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdkYXlzJykgLy89PiAzNjVcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnbW9udGhzJykgLy89PiAxMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtob3VyczogNjB9KS5hcygnZGF5cycpIC8vPT4gMi41XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGFzKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWR1Y2UgdGhpcyBEdXJhdGlvbiB0byBpdHMgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIGluIGl0cyBjdXJyZW50IHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDIsIGRheXM6IDUwMDAgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDE1LCBkYXlzOiAyNTUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEyLCBtaW51dGVzOiAtNDUgfSkubm9ybWFsaXplKCkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAxNSB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiB2YWxzIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhpcyBEdXJhdGlvbiBpbnRvIGl0cyByZXByZXNlbnRhdGlvbiBpbiBhIGRpZmZlcmVudCBzZXQgb2YgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkuc2hpZnRUbygnbWludXRlcycsICdtaWxsaXNlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiA2MCwgbWlsbGlzZWNvbmRzOiAzMDAwMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgc2hpZnRUbyguLi51bml0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuaXRzID0gdW5pdHMubWFwKHUgPT4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KSk7XG5cbiAgICBjb25zdCBidWlsdCA9IHt9LFxuICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbGV0IGxhc3RVbml0O1xuXG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcblxuICAgIGZvciAoY29uc3QgayBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xuXG4gICAgICAgIGxldCBvd24gPSAwO1xuXG4gICAgICAgIC8vIGFueXRoaW5nIHdlIGhhdmVuJ3QgYm9pbGVkIGRvd24geWV0IHNob3VsZCBnZXQgYm9pbGVkIHRvIHRoaXMgdW5pdFxuICAgICAgICBmb3IgKGNvbnN0IGFrIGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcbiAgICAgICAgICBhY2N1bXVsYXRlZFtha10gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgICAgb3duICs9IHZhbHNba107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpID0gTWF0aC50cnVuYyhvd24pO1xuICAgICAgICBidWlsdFtrXSA9IGk7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gb3duIC0gaTsgLy8gd2UnZCBsaWtlIHRvIGFic29yYiB0aGVzZSBmcmFjdGlvbnMgaW4gYW5vdGhlciB1bml0XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG4gICAgICAgIGZvciAoY29uc3QgZG93biBpbiB2YWxzKSB7XG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cy5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gdmFsc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0XG4gICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eVxuICAgIGZvciAoY29uc3Qga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz1cbiAgICAgICAgICBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IGJ1aWx0IH0sIHRydWUpLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmVnYXRpdmUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5uZWdhdGUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogLTEsIHNlY29uZHM6IC0zMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbmVnYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBuZWdhdGVkID0ge307XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xuICAgICAgbmVnYXRlZFtrXSA9IC10aGlzLnZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHsgdmFsdWVzOiBuZWdhdGVkIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgeWVhcnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBxdWFydGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtb250aHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2Vla3NcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRheXMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5cygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91cnMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbnV0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBtaWxsaXNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgKiBvbiBpbnZhbGlkIERhdGVUaW1lcyBvciBJbnRlcnZhbHMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlcXVhbHMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhb3RoZXIuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2MuZXF1YWxzKG90aGVyLmxvYykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHUgb2Ygb3JkZXJlZFVuaXRzKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZXNbdV0gIT09IG90aGVyLnZhbHVlc1t1XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb25pc2gpIHtcbiAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uaXNoKSkge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uaXNoKTtcbiAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uaXNoKSkge1xuICAgIHJldHVybiBkdXJhdGlvbmlzaDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25pc2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbmlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgYFVua25vd24gZHVyYXRpb24gYXJndW1lbnQgJHtkdXJhdGlvbmlzaH0gb2YgdHlwZSAke3R5cGVvZiBkdXJhdGlvbmlzaH1gXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVUaW1lLCB7IGZyaWVuZGx5RGF0ZVRpbWUgfSBmcm9tIFwiLi9kYXRldGltZS5qc1wiO1xuaW1wb3J0IER1cmF0aW9uLCB7IGZyaWVuZGx5RHVyYXRpb24gfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XG5pbXBvcnQgeyBJbnZhbGlkQXJndW1lbnRFcnJvciwgSW52YWxpZEludGVydmFsRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMuanNcIjtcbmltcG9ydCBJbnZhbGlkIGZyb20gXCIuL2ltcGwvaW52YWxpZC5qc1wiO1xuXG5jb25zdCBJTlZBTElEID0gXCJJbnZhbGlkIEludGVydmFsXCI7XG5cbi8vIGNoZWNrcyBpZiB0aGUgc3RhcnQgaXMgZXF1YWwgdG8gb3IgYmVmb3JlIHRoZSBlbmRcbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcbiAgICAgIFwiZW5kIGJlZm9yZSBzdGFydFwiLFxuICAgICAgYFRoZSBlbmQgb2YgYW4gaW50ZXJ2YWwgbXVzdCBiZSBhZnRlciBpdHMgc3RhcnQsIGJ1dCB5b3UgaGFkIHN0YXJ0PSR7c3RhcnQudG9JU08oKX0gYW5kIGVuZD0ke2VuZC50b0lTTygpfWBcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIGZyb21EYXRlVGltZXN9LCB7QGxpbmsgYWZ0ZXJ9LCB7QGxpbmsgYmVmb3JlfSwgb3Ige0BsaW5rIGZyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgc3RhcnR9IGFuZCB7QGxpbmsgZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIGNvdW50fSwge0BsaW5rIGxlbmd0aH0sIHtAbGluayBoYXNTYW1lfSwge0BsaW5rIGNvbnRhaW5zfSwge0BsaW5rIGlzQWZ0ZXJ9LCBvciB7QGxpbmsgaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgc2V0fSwge0BsaW5rIHNwbGl0QXR9LCB7QGxpbmsgc3BsaXRCeX0sIHtAbGluayBkaXZpZGVFcXVhbGx5fSwge0BsaW5rIG1lcmdlfSwge0BsaW5rIHhvcn0sIHtAbGluayB1bmlvbn0sIHtAbGluayBpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBlcXVhbHN9LCB7QGxpbmsgb3ZlcmxhcHN9LCB7QGxpbmsgYWJ1dHNTdGFydH0sIHtAbGluayBhYnV0c0VuZH0sIHtAbGluayBlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIEludGVydmFsIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIHRvU3RyaW5nfSwge0BsaW5rIHRvSVNPfSwge0BsaW5rIHRvSVNPRGF0ZX0sIHtAbGluayB0b0lTT1RpbWV9LCB7QGxpbmsgdG9Gb3JtYXR9LCBhbmQge0BsaW5rIHRvRHVyYXRpb259LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcnZhbCB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zID0gY29uZmlnLnN0YXJ0O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZSA9IGNvbmZpZy5lbmQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWQgfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25JbnRlcnZhbCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIEludGVydmFsIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEludGVydmFsRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgYnVpbHRFbmQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG5cbiAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XG5cbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICAgIGVuZDogYnVpbHRFbmRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVFcnJvcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IHN0YXJ0XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgYWZ0ZXIoc3RhcnQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0LCBkdC5wbHVzKGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIGVuZCBEYXRlVGltZSBhbmQgYSBEdXJhdGlvbiB0byBleHRlbmQgYmFja3dhcmRzIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBiZWZvcmUoZW5kLCBkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLFxuICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKGVuZCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQubWludXMoZHVyKSwgZHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIElTTyA4NjAxIHN0cmluZy5cbiAgICogQWNjZXB0cyBgPHN0YXJ0Pi88ZW5kPmAsIGA8c3RhcnQ+LzxkdXJhdGlvbj5gLCBhbmQgYDxkdXJhdGlvbj4vPGVuZD5gIGZvcm1hdHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIElTTyBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXSAtIG9wdGlvbnMgdG8gcGFzcyB7QGxpbmsgRGF0ZVRpbWUuZnJvbUlTT30gYW5kIG9wdGlvbmFsbHkge0BsaW5rIER1cmF0aW9uLmZyb21JU099XG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgY29uc3QgW3MsIGVdID0gKHRleHQgfHwgXCJcIikuc3BsaXQoXCIvXCIsIDIpO1xuICAgIGlmIChzICYmIGUpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZVRpbWUuZnJvbUlTTyhzLCBvcHRzKSxcbiAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcblxuICAgICAgaWYgKHN0YXJ0LmlzVmFsaWQgJiYgZW5kLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydC5pc1ZhbGlkKSB7XG4gICAgICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21JU08oZSwgb3B0cyk7XG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQuaXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYmVmb3JlKGVuZCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gSW50ZXJ2YWwuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0ludGVydmFsKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uSW50ZXJ2YWwpIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBsZW5ndGgodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uKC4uLlt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxuICAgKiBVbmxpa2Uge0BsaW5rIGxlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcbiAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvdW50KHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLltEYXRlVGltZV19IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICBzcGxpdEF0KC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgY29uc3Qgc29ydGVkID0gZGF0ZVRpbWVzXG4gICAgICAgIC5tYXAoZnJpZW5kbHlEYXRlVGltZSlcbiAgICAgICAgLmZpbHRlcihkID0+IHRoaXMuY29udGFpbnMoZCkpXG4gICAgICAgIC5zb3J0KCksXG4gICAgICByZXN1bHRzID0gW107XG4gICAgbGV0IHsgcyB9ID0gdGhpcyxcbiAgICAgIGkgPSAwO1xuXG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcbiAgICAgIGNvbnN0IGFkZGVkID0gc29ydGVkW2ldIHx8IHRoaXMuZSxcbiAgICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcbiAgICAgIHMgPSBuZXh0O1xuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG4gIHNwbGl0QnkoZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFkdXIuaXNWYWxpZCB8fCBkdXIuYXMoXCJtaWxsaXNlY29uZHNcIikgPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgeyBzIH0gPSB0aGlzLFxuICAgICAgYWRkZWQsXG4gICAgICBuZXh0O1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBhZGRlZCA9IHMucGx1cyhkdXIpO1xuICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcbiAgICAgIHMgPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzbWFsbGVyIGludGVydmFscy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlck9mUGFydHMgLSBUaGUgbnVtYmVyIG9mIEludGVydmFscyB0byBkaXZpZGUgdGhlIEludGVydmFsIGludG8uXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICBkaXZpZGVFcXVhbGx5KG51bWJlck9mUGFydHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiB0aGlzLnNwbGl0QnkodGhpcy5sZW5ndGgoKSAvIG51bWJlck9mUGFydHMpLnNsaWNlKDAsIG51bWJlck9mUGFydHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgb3ZlcmxhcHMgd2l0aCB0aGUgc3BlY2lmaWVkIEludGVydmFsXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBvdmVybGFwcyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmUgPiBvdGhlci5zICYmIHRoaXMucyA8IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBhZGphY2VudCB0byB0aGUgc3BlY2lmaWVkIEludGVydmFsJ3Mgc3RhcnQuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBhYnV0c1N0YXJ0KG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK3RoaXMuZSA9PT0gK290aGVyLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBlbmQuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBhYnV0c0VuZChvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICtvdGhlci5lID09PSArdGhpcy5zO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgZW5ndWxmcyB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZW5ndWxmcyhvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucyA8PSBvdGhlci5zICYmIHRoaXMuZSA+PSBvdGhlci5lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgYXMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucy5lcXVhbHMob3RoZXIucykgJiYgdGhpcy5lLmVxdWFscyhvdGhlci5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIG1lYW5pbmcsIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIGludGVyc2VjdGlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lIDwgb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG5cbiAgICBpZiAocyA+IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtbSW50ZXJ2YWxdfSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG4gIHN0YXRpYyBtZXJnZShpbnRlcnZhbHMpIHtcbiAgICBjb25zdCBbZm91bmQsIGZpbmFsXSA9IGludGVydmFscy5zb3J0KChhLCBiKSA9PiBhLnMgLSBiLnMpLnJlZHVjZShcbiAgICAgIChbc29mYXIsIGN1cnJlbnRdLCBpdGVtKSA9PiB7XG4gICAgICAgIGlmICghY3VycmVudCkge1xuICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQub3ZlcmxhcHMoaXRlbSkgfHwgY3VycmVudC5hYnV0c1N0YXJ0KGl0ZW0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtzb2ZhciwgY3VycmVudC51bmlvbihpdGVtKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFtzb2Zhci5jb25jYXQoW2N1cnJlbnRdKSwgaXRlbV07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbW10sIG51bGxdXG4gICAgKTtcbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7W0ludGVydmFsXX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKGkgPT4gW3sgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LCB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfV0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICBkaWZmZXJlbmNlKC4uLmludGVydmFscykge1xuICAgIHJldHVybiBJbnRlcnZhbC54b3IoW3RoaXNdLmNvbmNhdChpbnRlcnZhbHMpKVxuICAgICAgLm1hcChpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcihpID0+IGkgJiYgIWkuaXNFbXB0eSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgWyR7dGhpcy5zLnRvSVNPKCl9IOKAkyAke3RoaXMuZS50b0lTTygpfSlgO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgRGF0ZVRpbWUudG9JU099XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTTyhvcHRzKX0vJHt0aGlzLmUudG9JU08ob3B0cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgZGF0ZSBvZiB0aGlzIEludGVydmFsLlxuICAgKiBUaGUgdGltZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQ7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTT0RhdGUoKX0vJHt0aGlzLmUudG9JU09EYXRlKCl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGltZSBvZiB0aGlzIEludGVydmFsLlxuICAgKiBUaGUgZGF0ZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gVGhlIHNhbWUgb3B0aW9ucyBhcyB7QGxpbmsgRGF0ZVRpbWUudG9JU099XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZShvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9JU09UaW1lKG9wdHMpfS8ke3RoaXMuZS50b0lTT1RpbWUob3B0cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gdGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS4gU2VlIHtAbGluayBEYXRlVGltZS50b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gYSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCByZXByZXNlbnRhdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Gb3JtYXQoZGF0ZUZvcm1hdCwgeyBzZXBhcmF0b3IgPSBcIiDigJMgXCIgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9Gb3JtYXQoZGF0ZUZvcm1hdCl9JHtzZXBhcmF0b3J9JHt0aGlzLmUudG9Gb3JtYXQoZGF0ZUZvcm1hdCl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBEdXJhdGlvbiByZXByZXNlbnRpbmcgdGhlIHRpbWUgc3Bhbm5lZCBieSB0aGlzIGludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA4ODQ4OTI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ2RheXMnKS50b09iamVjdCgpIC8vPT4geyBkYXlzOiAxLjAyNDE4MTIxNTI3Nzc3NzggfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LjgyMDk1IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LCBzZWNvbmRzOiA0OS4yNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgc2Vjb25kczogODg0ODkuMjU3IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICB0b0R1cmF0aW9uKHVuaXQsIG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQodGhpcy5pbnZhbGlkUmVhc29uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIG1hcEZuIG9uIHRoZSBpbnRlcnZhbCBzdGFydCBhbmQgZW5kLCByZXR1cm5pbmcgYSBuZXcgSW50ZXJ2YWwgZnJvbSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnRvVVRDKCkpXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC5wbHVzKHsgaG91cnM6IDIgfSkpXG4gICAqL1xuICBtYXBFbmRwb2ludHMobWFwRm4pIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL2RhdGV0aW1lLmpzXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi96b25lcy9JQU5BWm9uZS5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcblxuaW1wb3J0IHsgaGFzRm9ybWF0VG9QYXJ0cywgaGFzSW50bCwgaGFzUmVsYXRpdmUgfSBmcm9tIFwiLi9pbXBsL3V0aWwuanNcIjtcblxuLyoqXG4gKiBUaGUgSW5mbyBjbGFzcyBjb250YWlucyBzdGF0aWMgbWV0aG9kcyBmb3IgcmV0cmlldmluZyBnZW5lcmFsIHRpbWUgYW5kIGRhdGUgcmVsYXRlZCBkYXRhLiBGb3IgZXhhbXBsZSwgaXQgaGFzIG1ldGhvZHMgZm9yIGZpbmRpbmcgb3V0IGlmIGEgdGltZSB6b25lIGhhcyBhIERTVCwgZm9yIGxpc3RpbmcgdGhlIG1vbnRocyBpbiBhbnkgc3VwcG9ydGVkIGxvY2FsZSwgYW5kIGZvciBkaXNjb3ZlcmluZyB3aGljaCBvZiBMdXhvbiBmZWF0dXJlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIHtcbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgem9uZSBjb250YWlucyBhIERTVC5cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW3pvbmU9J2xvY2FsJ10gLSBab25lIHRvIGNoZWNrLiBEZWZhdWx0cyB0byB0aGUgZW52aXJvbm1lbnQncyBsb2NhbCB6b25lLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGhhc0RTVCh6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmUpIHtcbiAgICBjb25zdCBwcm90byA9IERhdGVUaW1lLmxvY2FsKClcbiAgICAgIC5zZXRab25lKHpvbmUpXG4gICAgICAuc2V0KHsgbW9udGg6IDEyIH0pO1xuXG4gICAgcmV0dXJuICF6b25lLnVuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7IG1vbnRoOiA2IH0pLm9mZnNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZElBTkFab25lKHpvbmUpIHtcbiAgICByZXR1cm4gSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcih6b25lKSAmJiBJQU5BWm9uZS5pc1ZhbGlkWm9uZSh6b25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lLmlzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVab25lKGlucHV0KSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICBzdGF0aWMgbW9udGhzKFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSBcImdyZWdvcnlcIiB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IG1vbnRoIG5hbWVzLlxuICAgKiBGb3JtYXQgbW9udGhzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgbW9udGhzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byB0aGUgZGF5IG9mIHRoZSBtb250aC4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIG1vbnRoc31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibnVtZXJpY1wiLCBcIjItZGlnaXRcIiwgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEByZXR1cm4ge1tzdHJpbmddfVxuICAgKi9cbiAgc3RhdGljIG1vbnRoc0Zvcm1hdChcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gXCJncmVnb3J5XCIgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcikubW9udGhzKGxlbmd0aCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKClbMF0gLy89PiAnTW9uZGF5J1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcpWzBdIC8vPT4gJ01vbidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9KVswXSAvLz0+ICdsdW4uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9in2YTYp9ir2YbZitmGJ1xuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG4gIHN0YXRpYyB3ZWVrZGF5cyhsZW5ndGggPSBcImxvbmdcIiwgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKS53ZWVrZGF5cyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgd2VlayBuYW1lcy5cbiAgICogRm9ybWF0IHdlZWtkYXlzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgd2Vla2RheXMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIG1vcmUgZGF0ZSBpbmZvcm1hdGlvbi4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIHdlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEByZXR1cm4ge1tzdHJpbmddfVxuICAgKi9cbiAgc3RhdGljIHdlZWtkYXlzRm9ybWF0KGxlbmd0aCA9IFwibG9uZ1wiLCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IHt9KSB7XG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpLndlZWtkYXlzKGxlbmd0aCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ215JyB9KSAvLz0+IFsgJ+GAlOGAtuGAlOGAgOGAuicsICfhgIrhgJThgLEnIF1cbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICBzdGF0aWMgbWVyaWRpZW1zKHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUpLm1lcmlkaWVtcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcInNob3J0XCIgb3IgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoKSAvLz0+IFsgJ0JDJywgJ0FEJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycpIC8vPT4gWyAnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnLCB7IGxvY2FsZTogJ2ZyJyB9KSAvLz0+IFsgJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnIF1cbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICBzdGF0aWMgZXJhcyhsZW5ndGggPSBcInNob3J0XCIsIHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bGwsIFwiZ3JlZ29yeVwiKS5lcmFzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXG4gICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCB0aW1lem9uZSBzdXBwb3J0IGlzIG5vdCBhdmFpbGFibGUuIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGZpZ3VyZSBvdXQgaWYgdGhhdCdzIHRoZSBjYXNlLlxuICAgKiBLZXlzOlxuICAgKiAqIGB6b25lc2A6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyBJQU5BIHRpbWV6b25lc1xuICAgKiAqIGBpbnRsVG9rZW5zYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIGludGVybmF0aW9uYWxpemVkIHRva2VuLWJhc2VkIGZvcm1hdHRpbmcvcGFyc2luZ1xuICAgKiAqIGBpbnRsYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIGdlbmVyYWwgaW50ZXJuYXRpb25hbGl6YXRpb25cbiAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgaW50bDogdHJ1ZSwgaW50bFRva2VuczogZmFsc2UsIHpvbmVzOiB0cnVlLCByZWxhdGl2ZTogZmFsc2UgfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZmVhdHVyZXMoKSB7XG4gICAgbGV0IGludGwgPSBmYWxzZSxcbiAgICAgIGludGxUb2tlbnMgPSBmYWxzZSxcbiAgICAgIHpvbmVzID0gZmFsc2UsXG4gICAgICByZWxhdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKGhhc0ludGwoKSkge1xuICAgICAgaW50bCA9IHRydWU7XG4gICAgICBpbnRsVG9rZW5zID0gaGFzRm9ybWF0VG9QYXJ0cygpO1xuICAgICAgcmVsYXRpdmUgPSBoYXNSZWxhdGl2ZSgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB6b25lcyA9XG4gICAgICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlblwiLCB7IHRpbWVab25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIiB9KS5yZXNvbHZlZE9wdGlvbnMoKVxuICAgICAgICAgICAgLnRpbWVab25lID09PSBcIkFtZXJpY2EvTmV3X1lvcmtcIjtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgem9uZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBpbnRsLCBpbnRsVG9rZW5zLCB6b25lcywgcmVsYXRpdmUgfTtcbiAgfVxufVxuIiwiaW1wb3J0IER1cmF0aW9uIGZyb20gXCIuLi9kdXJhdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBkYXlEaWZmKGVhcmxpZXIsIGxhdGVyKSB7XG4gIGNvbnN0IHV0Y0RheVN0YXJ0ID0gZHQgPT5cbiAgICAgIGR0XG4gICAgICAgIC50b1VUQygwLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSlcbiAgICAgICAgLnN0YXJ0T2YoXCJkYXlcIilcbiAgICAgICAgLnZhbHVlT2YoKSxcbiAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcyhcImRheXNcIikpO1xufVxuXG5mdW5jdGlvbiBoaWdoT3JkZXJEaWZmcyhjdXJzb3IsIGxhdGVyLCB1bml0cykge1xuICBjb25zdCBkaWZmZXJzID0gW1xuICAgIFtcInllYXJzXCIsIChhLCBiKSA9PiBiLnllYXIgLSBhLnllYXJdLFxuICAgIFtcIm1vbnRoc1wiLCAoYSwgYikgPT4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyXSxcbiAgICBbXG4gICAgICBcIndlZWtzXCIsXG4gICAgICAoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gZGF5RGlmZihhLCBiKTtcbiAgICAgICAgcmV0dXJuIChkYXlzIC0gKGRheXMgJSA3KSkgLyA3O1xuICAgICAgfVxuICAgIF0sXG4gICAgW1wiZGF5c1wiLCBkYXlEaWZmXVxuICBdO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB7fTtcbiAgbGV0IGxvd2VzdE9yZGVyLCBoaWdoV2F0ZXI7XG5cbiAgZm9yIChjb25zdCBbdW5pdCwgZGlmZmVyXSBvZiBkaWZmZXJzKSB7XG4gICAgaWYgKHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMCkge1xuICAgICAgbG93ZXN0T3JkZXIgPSB1bml0O1xuXG4gICAgICBsZXQgZGVsdGEgPSBkaWZmZXIoY3Vyc29yLCBsYXRlcik7XG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cyh7IFt1bml0XTogZGVsdGEgfSk7XG5cbiAgICAgIGlmIChoaWdoV2F0ZXIgPiBsYXRlcikge1xuICAgICAgICBjdXJzb3IgPSBjdXJzb3IucGx1cyh7IFt1bml0XTogZGVsdGEgLSAxIH0pO1xuICAgICAgICBkZWx0YSAtPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzW3VuaXRdID0gZGVsdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcbiAgbGV0IFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdID0gaGlnaE9yZGVyRGlmZnMoZWFybGllciwgbGF0ZXIsIHVuaXRzKTtcblxuICBjb25zdCByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcblxuICBjb25zdCBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoXG4gICAgdSA9PiBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdLmluZGV4T2YodSkgPj0gMFxuICApO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGhpZ2hXYXRlciA8IGxhdGVyKSB7XG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cyh7IFtsb3dlc3RPcmRlcl06IDEgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7XG4gICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChPYmplY3QuYXNzaWduKHJlc3VsdHMsIG9wdHMpKTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhyZW1haW5pbmdNaWxsaXMsIG9wdHMpXG4gICAgICAuc2hpZnRUbyguLi5sb3dlck9yZGVyVW5pdHMpXG4gICAgICAucGx1cyhkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG59XG4iLCJjb25zdCBudW1iZXJpbmdTeXN0ZW1zID0ge1xuICBhcmFiOiBcIltcXHUwNjYwLVxcdTA2NjldXCIsXG4gIGFyYWJleHQ6IFwiW1xcdTA2RjAtXFx1MDZGOV1cIixcbiAgYmFsaTogXCJbXFx1MUI1MC1cXHUxQjU5XVwiLFxuICBiZW5nOiBcIltcXHUwOUU2LVxcdTA5RUZdXCIsXG4gIGRldmE6IFwiW1xcdTA5NjYtXFx1MDk2Rl1cIixcbiAgZnVsbHdpZGU6IFwiW1xcdUZGMTAtXFx1RkYxOV1cIixcbiAgZ3VqcjogXCJbXFx1MEFFNi1cXHUwQUVGXVwiLFxuICBoYW5pZGVjOiBcIlvjgId85LiAfOS6jHzkuIl85ZubfOS6lHzlha185LiDfOWFq3zkuZ1dXCIsXG4gIGtobXI6IFwiW1xcdTE3RTAtXFx1MTdFOV1cIixcbiAga25kYTogXCJbXFx1MENFNi1cXHUwQ0VGXVwiLFxuICBsYW9vOiBcIltcXHUwRUQwLVxcdTBFRDldXCIsXG4gIGxpbWI6IFwiW1xcdTE5NDYtXFx1MTk0Rl1cIixcbiAgbWx5bTogXCJbXFx1MEQ2Ni1cXHUwRDZGXVwiLFxuICBtb25nOiBcIltcXHUxODEwLVxcdTE4MTldXCIsXG4gIG15bXI6IFwiW1xcdTEwNDAtXFx1MTA0OV1cIixcbiAgb3J5YTogXCJbXFx1MEI2Ni1cXHUwQjZGXVwiLFxuICB0YW1sZGVjOiBcIltcXHUwQkU2LVxcdTBCRUZdXCIsXG4gIHRlbHU6IFwiW1xcdTBDNjYtXFx1MEM2Rl1cIixcbiAgdGhhaTogXCJbXFx1MEU1MC1cXHUwRTU5XVwiLFxuICB0aWJ0OiBcIltcXHUwRjIwLVxcdTBGMjldXCIsXG4gIGxhdG46IFwiXFxcXGRcIlxufTtcblxuY29uc3QgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xuICBhcmFiOiBbMTYzMiwgMTY0MV0sXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxuICBiZW5nOiBbMjUzNCwgMjU0M10sXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxuICBndWpyOiBbMjc5MCwgMjc5OV0sXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcbiAga25kYTogWzMzMDIsIDMzMTFdLFxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxuICBtb25nOiBbNjE2MCwgNjE2OV0sXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxuICB0aWJ0OiBbMzg3MiwgMzg4MV1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgaGFuaWRlY0NoYXJzID0gbnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjLnJlcGxhY2UoL1tcXFt8XFxdXS9nLCBcIlwiKS5zcGxpdChcIlwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGlnaXRzKHN0cikge1xuICBsZXQgdmFsdWUgPSBwYXJzZUludChzdHIsIDEwKTtcbiAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgIHZhbHVlID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICBpZiAoc3RyW2ldLnNlYXJjaChudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSArPSBoYW5pZGVjQ2hhcnMuaW5kZXhPZihzdHJbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbnVtYmVyaW5nU3lzdGVtc1VURjE2KSB7XG4gICAgICAgICAgY29uc3QgW21pbiwgbWF4XSA9IG51bWJlcmluZ1N5c3RlbXNVVEYxNltrZXldO1xuICAgICAgICAgIGlmIChjb2RlID49IG1pbiAmJiBjb2RlIDw9IG1heCkge1xuICAgICAgICAgICAgdmFsdWUgKz0gY29kZSAtIG1pbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWdpdFJlZ2V4KHsgbnVtYmVyaW5nU3lzdGVtIH0sIGFwcGVuZCA9IFwiXCIpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7bnVtYmVyaW5nU3lzdGVtc1tudW1iZXJpbmdTeXN0ZW0gfHwgXCJsYXRuXCJdfSR7YXBwZW5kfWApO1xufVxuIiwiaW1wb3J0IHsgcGFyc2VNaWxsaXMsIGlzVW5kZWZpbmVkLCB1bnRydW5jYXRlWWVhciwgc2lnbmVkT2Zmc2V0LCBoYXNPd25Qcm9wZXJ0eSB9IGZyb20gXCIuL3V0aWwuanNcIjtcbmltcG9ydCBGb3JtYXR0ZXIgZnJvbSBcIi4vZm9ybWF0dGVyLmpzXCI7XG5pbXBvcnQgRml4ZWRPZmZzZXRab25lIGZyb20gXCIuLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBJQU5BWm9uZSBmcm9tIFwiLi4vem9uZXMvSUFOQVpvbmUuanNcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUuanNcIjtcbmltcG9ydCB7IGRpZ2l0UmVnZXgsIHBhcnNlRGlnaXRzIH0gZnJvbSBcIi4vZGlnaXRzLmpzXCI7XG5pbXBvcnQgeyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciB9IGZyb20gXCIuLi9lcnJvcnMuanNcIjtcblxuY29uc3QgTUlTU0lOR19GVFAgPSBcIm1pc3NpbmcgSW50bC5EYXRlVGltZUZvcm1hdC5mb3JtYXRUb1BhcnRzIHN1cHBvcnRcIjtcblxuZnVuY3Rpb24gaW50VW5pdChyZWdleCwgcG9zdCA9IGkgPT4gaSkge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHBvc3QocGFyc2VEaWdpdHMocykpIH07XG59XG5cbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vLCBcIlxcXFwuP1wiKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKFwifFwiKSksXG4gICAgICBkZXNlcjogKFtzXSkgPT5cbiAgICAgICAgc3RyaW5ncy5maW5kSW5kZXgoaSA9PiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSA9PT0gc3RyaXBJbnNlbnNpdGl2aXRpZXMoaSkpICsgc3RhcnRJbmRleFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoWywgaCwgbV0pID0+IHNpZ25lZE9mZnNldChoLCBtKSwgZ3JvdXBzIH07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZShyZWdleCkge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbc10pID0+IHMgfTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlVG9rZW4odmFsdWUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgXCJcXFxcJCZcIik7XG59XG5cbmZ1bmN0aW9uIHVuaXRGb3JUb2tlbih0b2tlbiwgbG9jKSB7XG4gIGNvbnN0IG9uZSA9IGRpZ2l0UmVnZXgobG9jKSxcbiAgICB0d28gPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Mn1cIiksXG4gICAgdGhyZWUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7M31cIiksXG4gICAgZm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcIns0fVwiKSxcbiAgICBzaXggPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Nn1cIiksXG4gICAgb25lT3JUd28gPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSwyfVwiKSxcbiAgICBvbmVUb1RocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezEsM31cIiksXG4gICAgb25lVG9TaXggPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSw2fVwiKSxcbiAgICBvbmVUb05pbmUgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7MSw5fVwiKSxcbiAgICB0d29Ub0ZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Miw0fVwiKSxcbiAgICBmb3VyVG9TaXggPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NCw2fVwiKSxcbiAgICBsaXRlcmFsID0gdCA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pLFxuICAgIHVuaXRhdGUgPSB0ID0+IHtcbiAgICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0LnZhbCkge1xuICAgICAgICAvLyBlcmFcbiAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJzaG9ydFwiLCBmYWxzZSksIDApO1xuICAgICAgICBjYXNlIFwiR0dcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoXCJsb25nXCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIC8vIHllYXJzXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91clRvU2l4KTtcbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHNpeCk7XG4gICAgICAgIC8vIG1vbnRoc1xuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJMTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTExMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgLy8gZGF0ZXNcbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIG9yZGluYWxzXG4gICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIC8vIHRpbWVcbiAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xuICAgICAgICBjYXNlIFwiU1NTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuICAgICAgICBjYXNlIFwidVwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUob25lVG9OaW5lKTtcbiAgICAgICAgLy8gbWVyaWRpZW1cbiAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLm1lcmlkaWVtcygpLCAwKTtcbiAgICAgICAgLy8gd2Vla1llYXIgKGspXG4gICAgICAgIGNhc2UgXCJra2trXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoZm91cik7XG4gICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgICAvLyB3ZWVrTnVtYmVyIChXKVxuICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIldXXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gd2Vla2RheXNcbiAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgLy8gb2Zmc2V0L3pvbmVcbiAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoPzo6KCR7dHdvLnNvdXJjZX0pKT9gKSwgMik7XG4gICAgICAgIGNhc2UgXCJaWlpcIjpcbiAgICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoYChbKy1dJHtvbmVPclR3by5zb3VyY2V9KSgke3R3by5zb3VyY2V9KT9gKSwgMik7XG4gICAgICAgIC8vIHdlIGRvbid0IHN1cHBvcnQgWlpaWiAoUFNUKSBvciBaWlpaWiAoUGFjaWZpYyBTdGFuZGFyZCBUaW1lKSBpbiBwYXJzaW5nXG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZVxuICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgIHJldHVybiBzaW1wbGUoL1thLXpfKy0vXXsxLDI1Nn0/L2kpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgY29uc3QgdW5pdCA9IHVuaXRhdGUodG9rZW4pIHx8IHtcbiAgICBpbnZhbGlkUmVhc29uOiBNSVNTSU5HX0ZUUFxuICB9O1xuXG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcblxuICByZXR1cm4gdW5pdDtcbn1cblxuY29uc3QgcGFydFR5cGVTdHlsZVRvVG9rZW5WYWwgPSB7XG4gIHllYXI6IHtcbiAgICBcIjItZGlnaXRcIjogXCJ5eVwiLFxuICAgIG51bWVyaWM6IFwieXl5eXlcIlxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCJcbiAgfSxcbiAgZGF5OiB7XG4gICAgbnVtZXJpYzogXCJkXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiZGRcIlxuICB9LFxuICB3ZWVrZGF5OiB7XG4gICAgc2hvcnQ6IFwiRUVFXCIsXG4gICAgbG9uZzogXCJFRUVFXCJcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjoge1xuICAgIG51bWVyaWM6IFwiaFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImhoXCJcbiAgfSxcbiAgbWludXRlOiB7XG4gICAgbnVtZXJpYzogXCJtXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwibW1cIlxuICB9LFxuICBzZWNvbmQ6IHtcbiAgICBudW1lcmljOiBcInNcIixcbiAgICBcIjItZGlnaXRcIjogXCJzc1wiXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRva2VuRm9yUGFydChwYXJ0LCBsb2NhbGUsIGZvcm1hdE9wdHMpIHtcbiAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gcGFydDtcblxuICBpZiAodHlwZSA9PT0gXCJsaXRlcmFsXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogdHJ1ZSxcbiAgICAgIHZhbDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSBmb3JtYXRPcHRzW3R5cGVdO1xuXG4gIGxldCB2YWwgPSBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbFt0eXBlXTtcbiAgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YWwgPSB2YWxbc3R5bGVdO1xuICB9XG5cbiAgaWYgKHZhbCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaXRlcmFsOiBmYWxzZSxcbiAgICAgIHZhbFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlZ2V4KHVuaXRzKSB7XG4gIGNvbnN0IHJlID0gdW5pdHMubWFwKHUgPT4gdS5yZWdleCkucmVkdWNlKChmLCByKSA9PiBgJHtmfSgke3Iuc291cmNlfSlgLCBcIlwiKTtcbiAgcmV0dXJuIFtgXiR7cmV9JGAsIHVuaXRzXTtcbn1cblxuZnVuY3Rpb24gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycykge1xuICBjb25zdCBtYXRjaGVzID0gaW5wdXQubWF0Y2gocmVnZXgpO1xuXG4gIGlmIChtYXRjaGVzKSB7XG4gICAgY29uc3QgYWxsID0ge307XG4gICAgbGV0IG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAoY29uc3QgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICBjb25zdCBoID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgY29uc3QgdG9GaWVsZCA9IHRva2VuID0+IHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiU1wiOlxuICAgICAgICByZXR1cm4gXCJtaWxsaXNlY29uZFwiO1xuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG4gICAgICBjYXNlIFwibVwiOlxuICAgICAgICByZXR1cm4gXCJtaW51dGVcIjtcbiAgICAgIGNhc2UgXCJoXCI6XG4gICAgICBjYXNlIFwiSFwiOlxuICAgICAgICByZXR1cm4gXCJob3VyXCI7XG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gXCJkYXlcIjtcbiAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgIHJldHVybiBcIm9yZGluYWxcIjtcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICByZXR1cm4gXCJtb250aFwiO1xuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtkYXlcIjtcbiAgICAgIGNhc2UgXCJXXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtOdW1iZXJcIjtcbiAgICAgIGNhc2UgXCJrXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtZZWFyXCI7XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gXCJxdWFydGVyXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgbGV0IHpvbmU7XG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkge1xuICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7XG4gIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMueikpIHtcbiAgICB6b25lID0gSUFOQVpvbmUuY3JlYXRlKG1hdGNoZXMueik7XG4gIH0gZWxzZSB7XG4gICAgem9uZSA9IG51bGw7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMucSkpIHtcbiAgICBtYXRjaGVzLk0gPSAobWF0Y2hlcy5xIC0gMSkgKiAzICsgMTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5oKSkge1xuICAgIGlmIChtYXRjaGVzLmggPCAxMiAmJiBtYXRjaGVzLmEgPT09IDEpIHtcbiAgICAgIG1hdGNoZXMuaCArPSAxMjtcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMuaCA9PT0gMTIgJiYgbWF0Y2hlcy5hID09PSAwKSB7XG4gICAgICBtYXRjaGVzLmggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7XG4gICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy51KSkge1xuICAgIG1hdGNoZXMuUyA9IHBhcnNlTWlsbGlzKG1hdGNoZXMudSk7XG4gIH1cblxuICBjb25zdCB2YWxzID0gT2JqZWN0LmtleXMobWF0Y2hlcykucmVkdWNlKChyLCBrKSA9PiB7XG4gICAgY29uc3QgZiA9IHRvRmllbGQoayk7XG4gICAgaWYgKGYpIHtcbiAgICAgIHJbZl0gPSBtYXRjaGVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiByO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIFt2YWxzLCB6b25lXTtcbn1cblxubGV0IGR1bW15RGF0ZVRpbWVDYWNoZSA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldER1bW15RGF0ZVRpbWUoKSB7XG4gIGlmICghZHVtbXlEYXRlVGltZUNhY2hlKSB7XG4gICAgZHVtbXlEYXRlVGltZUNhY2hlID0gRGF0ZVRpbWUuZnJvbU1pbGxpcygxNTU1NTU1NTU1NTU1KTtcbiAgfVxuXG4gIHJldHVybiBkdW1teURhdGVUaW1lQ2FjaGU7XG59XG5cbmZ1bmN0aW9uIG1heWJlRXhwYW5kTWFjcm9Ub2tlbih0b2tlbiwgbG9jYWxlKSB7XG4gIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG5cbiAgaWYgKCFmb3JtYXRPcHRzKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gRm9ybWF0dGVyLmNyZWF0ZShsb2NhbGUsIGZvcm1hdE9wdHMpO1xuICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXREYXRlVGltZVBhcnRzKGdldER1bW15RGF0ZVRpbWUoKSk7XG5cbiAgY29uc3QgdG9rZW5zID0gcGFydHMubWFwKHAgPT4gdG9rZW5Gb3JQYXJ0KHAsIGxvY2FsZSwgZm9ybWF0T3B0cykpO1xuXG4gIGlmICh0b2tlbnMuaW5jbHVkZXModW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZE1hY3JvVG9rZW5zKHRva2VucywgbG9jYWxlKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0KC4uLnRva2Vucy5tYXAodCA9PiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKSkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICB1bml0cyA9IHRva2Vucy5tYXAodCA9PiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKSksXG4gICAgZGlzcXVhbGlmeWluZ1VuaXQgPSB1bml0cy5maW5kKHQgPT4gdC5pbnZhbGlkUmVhc29uKTtcblxuICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHtcbiAgICByZXR1cm4geyBpbnB1dCwgdG9rZW5zLCBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uIH07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgW3JlZ2V4U3RyaW5nLCBoYW5kbGVyc10gPSBidWlsZFJlZ2V4KHVuaXRzKSxcbiAgICAgIHJlZ2V4ID0gUmVnRXhwKHJlZ2V4U3RyaW5nLCBcImlcIiksXG4gICAgICBbcmF3TWF0Y2hlcywgbWF0Y2hlc10gPSBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSxcbiAgICAgIFtyZXN1bHQsIHpvbmVdID0gbWF0Y2hlcyA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykgOiBbbnVsbCwgbnVsbF07XG4gICAgaWYgKGhhc093blByb3BlcnR5KG1hdGNoZXMsIFwiYVwiKSAmJiBoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcIkhcIikpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcbiAgICAgICAgXCJDYW4ndCBpbmNsdWRlIG1lcmlkaWVtIHdoZW4gc3BlY2lmeWluZyAyNC1ob3VyIGZvcm1hdFwiXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4geyBpbnB1dCwgdG9rZW5zLCByZWdleCwgcmF3TWF0Y2hlcywgbWF0Y2hlcywgcmVzdWx0LCB6b25lIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpIHtcbiAgY29uc3QgeyByZXN1bHQsIHpvbmUsIGludmFsaWRSZWFzb24gfSA9IGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCk7XG4gIHJldHVybiBbcmVzdWx0LCB6b25lLCBpbnZhbGlkUmVhc29uXTtcbn1cbiIsImltcG9ydCB7XG4gIGludGVnZXJCZXR3ZWVuLFxuICBpc0xlYXBZZWFyLFxuICB0aW1lT2JqZWN0LFxuICBkYXlzSW5ZZWFyLFxuICBkYXlzSW5Nb250aCxcbiAgd2Vla3NJbldlZWtZZWFyLFxuICBpc0ludGVnZXJcbn0gZnJvbSBcIi4vdXRpbC5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW52YWxpZC5qc1wiO1xuXG5jb25zdCBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgbGVhcExhZGRlciA9IFswLCAzMSwgNjAsIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNV07XG5cbmZ1bmN0aW9uIHVuaXRPdXRPZlJhbmdlKHVuaXQsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcbiAgICBcInVuaXQgb3V0IG9mIHJhbmdlXCIsXG4gICAgYHlvdSBzcGVjaWZpZWQgJHt2YWx1ZX0gKG9mIHR5cGUgJHt0eXBlb2YgdmFsdWV9KSBhcyBhICR7dW5pdH0sIHdoaWNoIGlzIGludmFsaWRgXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIGNvbnN0IGpzID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCBkYXkpKS5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGpzID09PSAwID8gNyA6IGpzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIHJldHVybiBkYXkgKyAoaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyKVttb250aCAtIDFdO1xufVxuXG5mdW5jdGlvbiB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpIHtcbiAgY29uc3QgdGFibGUgPSBpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIsXG4gICAgbW9udGgwID0gdGFibGUuZmluZEluZGV4KGkgPT4gaSA8IG9yZGluYWwpLFxuICAgIGRheSA9IG9yZGluYWwgLSB0YWJsZVttb250aDBdO1xuICByZXR1cm4geyBtb250aDogbW9udGgwICsgMSwgZGF5IH07XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZ29yaWFuVG9XZWVrKGdyZWdPYmopIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBncmVnT2JqLFxuICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSxcbiAgICB3ZWVrZGF5ID0gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gIGxldCB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICB3ZWVrWWVhcjtcblxuICBpZiAod2Vla051bWJlciA8IDEpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhcikpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHsgd2Vla1llYXIsIHdlZWtOdW1iZXIsIHdlZWtkYXkgfSwgdGltZU9iamVjdChncmVnT2JqKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgY29uc3QgeyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSB9ID0gd2Vla0RhdGEsXG4gICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuXG4gIGxldCBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDMsXG4gICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB5ZWFyLCBtb250aCwgZGF5IH0sIHRpbWVPYmplY3Qod2Vla0RhdGEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyZWdvcmlhblRvT3JkaW5hbChncmVnRGF0YSkge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdyZWdEYXRhLFxuICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHllYXIsIG9yZGluYWwgfSwgdGltZU9iamVjdChncmVnRGF0YSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7XG4gIGNvbnN0IHsgeWVhciwgb3JkaW5hbCB9ID0gb3JkaW5hbERhdGEsXG4gICAgeyBtb250aCwgZGF5IH0gPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHsgeWVhciwgbW9udGgsIGRheSB9LCB0aW1lT2JqZWN0KG9yZGluYWxEYXRhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkV2Vla0RhdGEob2JqKSB7XG4gIGNvbnN0IHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoud2Vla1llYXIpLFxuICAgIHZhbGlkV2VlayA9IGludGVnZXJCZXR3ZWVuKG9iai53ZWVrTnVtYmVyLCAxLCB3ZWVrc0luV2Vla1llYXIob2JqLndlZWtZZWFyKSksXG4gICAgdmFsaWRXZWVrZGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtkYXksIDEsIDcpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1llYXJcIiwgb2JqLndlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1wiLCBvYmoud2Vlayk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vla2RheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtkYXlcIiwgb2JqLndlZWtkYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xuICBjb25zdCB2YWxpZFllYXIgPSBpc0ludGVnZXIob2JqLnllYXIpLFxuICAgIHZhbGlkT3JkaW5hbCA9IGludGVnZXJCZXR3ZWVuKG9iai5vcmRpbmFsLCAxLCBkYXlzSW5ZZWFyKG9iai55ZWFyKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRPcmRpbmFsKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwib3JkaW5hbFwiLCBvYmoub3JkaW5hbCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMiksXG4gICAgdmFsaWREYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmouZGF5LCAxLCBkYXlzSW5Nb250aChvYmoueWVhciwgb2JqLm1vbnRoKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNb250aCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1vbnRoXCIsIG9iai5tb250aCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkRGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiZGF5XCIsIG9iai5kYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW52YWxpZFRpbWVEYXRhKG9iaikge1xuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9ID0gb2JqO1xuICBjb25zdCB2YWxpZEhvdXIgPVxuICAgICAgaW50ZWdlckJldHdlZW4oaG91ciwgMCwgMjMpIHx8XG4gICAgICAoaG91ciA9PT0gMjQgJiYgbWludXRlID09PSAwICYmIHNlY29uZCA9PT0gMCAmJiBtaWxsaXNlY29uZCA9PT0gMCksXG4gICAgdmFsaWRNaW51dGUgPSBpbnRlZ2VyQmV0d2VlbihtaW51dGUsIDAsIDU5KSxcbiAgICB2YWxpZFNlY29uZCA9IGludGVnZXJCZXR3ZWVuKHNlY29uZCwgMCwgNTkpLFxuICAgIHZhbGlkTWlsbGlzZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihtaWxsaXNlY29uZCwgMCwgOTk5KTtcblxuICBpZiAoIXZhbGlkSG91cikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImhvdXJcIiwgaG91cik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWludXRlKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkU2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgRHVyYXRpb24sIHsgZnJpZW5kbHlEdXJhdGlvbiB9IGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5pbXBvcnQgSW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCBTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vaW5mby5qc1wiO1xuaW1wb3J0IEZvcm1hdHRlciBmcm9tIFwiLi9pbXBsL2Zvcm1hdHRlci5qc1wiO1xuaW1wb3J0IEZpeGVkT2Zmc2V0Wm9uZSBmcm9tIFwiLi96b25lcy9maXhlZE9mZnNldFpvbmUuanNcIjtcbmltcG9ydCBMb2NhbGUgZnJvbSBcIi4vaW1wbC9sb2NhbGUuanNcIjtcbmltcG9ydCB7XG4gIGlzVW5kZWZpbmVkLFxuICBtYXliZUFycmF5LFxuICBpc0RhdGUsXG4gIGlzTnVtYmVyLFxuICBiZXN0QnksXG4gIGRheXNJbk1vbnRoLFxuICBkYXlzSW5ZZWFyLFxuICBpc0xlYXBZZWFyLFxuICB3ZWVrc0luV2Vla1llYXIsXG4gIG5vcm1hbGl6ZU9iamVjdCxcbiAgcm91bmRUbyxcbiAgb2JqVG9Mb2NhbFRTXG59IGZyb20gXCIuL2ltcGwvdXRpbC5qc1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplWm9uZSB9IGZyb20gXCIuL2ltcGwvem9uZVV0aWwuanNcIjtcbmltcG9ydCBkaWZmIGZyb20gXCIuL2ltcGwvZGlmZi5qc1wiO1xuaW1wb3J0IHsgcGFyc2VSRkMyODIyRGF0ZSwgcGFyc2VJU09EYXRlLCBwYXJzZUhUVFBEYXRlLCBwYXJzZVNRTCB9IGZyb20gXCIuL2ltcGwvcmVnZXhQYXJzZXIuanNcIjtcbmltcG9ydCB7IHBhcnNlRnJvbVRva2VucywgZXhwbGFpbkZyb21Ub2tlbnMgfSBmcm9tIFwiLi9pbXBsL3Rva2VuUGFyc2VyLmpzXCI7XG5pbXBvcnQge1xuICBncmVnb3JpYW5Ub1dlZWssXG4gIHdlZWtUb0dyZWdvcmlhbixcbiAgZ3JlZ29yaWFuVG9PcmRpbmFsLFxuICBvcmRpbmFsVG9HcmVnb3JpYW4sXG4gIGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhLFxuICBoYXNJbnZhbGlkV2Vla0RhdGEsXG4gIGhhc0ludmFsaWRPcmRpbmFsRGF0YSxcbiAgaGFzSW52YWxpZFRpbWVEYXRhXG59IGZyb20gXCIuL2ltcGwvY29udmVyc2lvbnMuanNcIjtcbmltcG9ydCAqIGFzIEZvcm1hdHMgZnJvbSBcIi4vaW1wbC9mb3JtYXRzLmpzXCI7XG5pbXBvcnQge1xuICBJbnZhbGlkQXJndW1lbnRFcnJvcixcbiAgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IsXG4gIEludmFsaWRVbml0RXJyb3IsXG4gIEludmFsaWREYXRlVGltZUVycm9yXG59IGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuaW1wb3J0IEludmFsaWQgZnJvbSBcIi4vaW1wbC9pbnZhbGlkLmpzXCI7XG5cbmNvbnN0IElOVkFMSUQgPSBcIkludmFsaWQgRGF0ZVRpbWVcIjtcbmNvbnN0IE1BWF9EQVRFID0gOC42NGUxNTtcblxuZnVuY3Rpb24gdW5zdXBwb3J0ZWRab25lKHpvbmUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5zdXBwb3J0ZWQgem9uZVwiLCBgdGhlIHpvbmUgXCIke3pvbmUubmFtZX1cIiBpcyBub3Qgc3VwcG9ydGVkYCk7XG59XG5cbi8vIHdlIGNhY2hlIHdlZWsgZGF0YSBvbiB0aGUgRFQgb2JqZWN0IGFuZCB0aGlzIGludGVybWVkaWF0ZXMgdGhlIGNhY2hlXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xuICB9XG4gIHJldHVybiBkdC53ZWVrRGF0YTtcbn1cblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zLCBcIm1ha2UgYSBuZXcgb2JqZWN0IHdpdGggdGhlc2UgbW9kaWZpY2F0aW9uc1wiLiBhbGwgXCJzZXR0ZXJzXCIgcmVhbGx5IHVzZSB0aGlzXG4vLyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHdoaWxlIG9ubHkgY2hhbmdpbmcgc29tZSBvZiB0aGUgcHJvcGVydGllc1xuZnVuY3Rpb24gY2xvbmUoaW5zdCwgYWx0cykge1xuICBjb25zdCBjdXJyZW50ID0ge1xuICAgIHRzOiBpbnN0LnRzLFxuICAgIHpvbmU6IGluc3Quem9uZSxcbiAgICBjOiBpbnN0LmMsXG4gICAgbzogaW5zdC5vLFxuICAgIGxvYzogaW5zdC5sb2MsXG4gICAgaW52YWxpZDogaW5zdC5pbnZhbGlkXG4gIH07XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudCwgYWx0cywgeyBvbGQ6IGN1cnJlbnQgfSkpO1xufVxuXG4vLyBmaW5kIHRoZSByaWdodCBvZmZzZXQgYSBnaXZlbiBsb2NhbCB0aW1lLiBUaGUgbyBpbnB1dCBpcyBvdXIgZ3Vlc3MsIHdoaWNoIGRldGVybWluZXMgd2hpY2hcbi8vIG9mZnNldCB3ZSdsbCBwaWNrIGluIGFtYmlndW91cyBjYXNlcyAoZS5nLiB0aGVyZSBhcmUgdHdvIDMgQU1zIGIvYyBGYWxsYmFjayBEU1QpXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXG4gIGxldCB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwO1xuXG4gIC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcbiAgY29uc3QgbzIgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuXG4gIC8vIElmIHNvLCBvZmZzZXQgZGlkbid0IGNoYW5nZSBhbmQgd2UncmUgZG9uZVxuICBpZiAobyA9PT0gbzIpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvXTtcbiAgfVxuXG4gIC8vIElmIG5vdCwgY2hhbmdlIHRoZSB0cyBieSB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgb2Zmc2V0XG4gIHV0Y0d1ZXNzIC09IChvMiAtIG8pICogNjAgKiAxMDAwO1xuXG4gIC8vIElmIHRoYXQgZ2l2ZXMgdXMgdGhlIGxvY2FsIHRpbWUgd2Ugd2FudCwgd2UncmUgZG9uZVxuICBjb25zdCBvMyA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG4gIGlmIChvMiA9PT0gbzMpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvMl07XG4gIH1cblxuICAvLyBJZiBpdCdzIGRpZmZlcmVudCwgd2UncmUgaW4gYSBob2xlIHRpbWUuIFRoZSBvZmZzZXQgaGFzIGNoYW5nZWQsIGJ1dCB0aGUgd2UgZG9uJ3QgYWRqdXN0IHRoZSB0aW1lXG4gIHJldHVybiBbbG9jYWxUUyAtIE1hdGgubWluKG8yLCBvMykgKiA2MCAqIDEwMDAsIE1hdGgubWF4KG8yLCBvMyldO1xufVxuXG4vLyBjb252ZXJ0IGFuIGVwb2NoIHRpbWVzdGFtcCBpbnRvIGEgY2FsZW5kYXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIG9mZnNldFxuZnVuY3Rpb24gdHNUb09iaih0cywgb2Zmc2V0KSB7XG4gIHRzICs9IG9mZnNldCAqIDYwICogMTAwMDtcblxuICBjb25zdCBkID0gbmV3IERhdGUodHMpO1xuXG4gIHJldHVybiB7XG4gICAgeWVhcjogZC5nZXRVVENGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBkLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgIGRheTogZC5nZXRVVENEYXRlKCksXG4gICAgaG91cjogZC5nZXRVVENIb3VycygpLFxuICAgIG1pbnV0ZTogZC5nZXRVVENNaW51dGVzKCksXG4gICAgc2Vjb25kOiBkLmdldFVUQ1NlY29uZHMoKSxcbiAgICBtaWxsaXNlY29uZDogZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICB9O1xufVxuXG4vLyBjb252ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgZXBvY2ggdGltZXN0YW1wXG5mdW5jdGlvbiBvYmpUb1RTKG9iaiwgb2Zmc2V0LCB6b25lKSB7XG4gIHJldHVybiBmaXhPZmZzZXQob2JqVG9Mb2NhbFRTKG9iaiksIG9mZnNldCwgem9uZSk7XG59XG5cbi8vIGNyZWF0ZSBhIG5ldyBEVCBpbnN0YW5jZSBieSBhZGRpbmcgYSBkdXJhdGlvbiwgYWRqdXN0aW5nIGZvciBEU1RzXG5mdW5jdGlvbiBhZGp1c3RUaW1lKGluc3QsIGR1cikge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZHVyLnZhbHVlcyk7XG4gIGlmIChrZXlzLmluZGV4T2YoXCJtaWxsaXNlY29uZHNcIikgPT09IC0xKSB7XG4gICAga2V5cy5wdXNoKFwibWlsbGlzZWNvbmRzXCIpO1xuICB9XG5cbiAgZHVyID0gZHVyLnNoaWZ0VG8oLi4ua2V5cyk7XG5cbiAgY29uc3Qgb1ByZSA9IGluc3QubyxcbiAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBkdXIueWVhcnMsXG4gICAgbW9udGggPSBpbnN0LmMubW9udGggKyBkdXIubW9udGhzICsgZHVyLnF1YXJ0ZXJzICogMyxcbiAgICBjID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdC5jLCB7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXk6IE1hdGgubWluKGluc3QuYy5kYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgKyBkdXIuZGF5cyArIGR1ci53ZWVrcyAqIDdcbiAgICB9KSxcbiAgICBtaWxsaXNUb0FkZCA9IER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgICAgaG91cnM6IGR1ci5ob3VycyxcbiAgICAgIG1pbnV0ZXM6IGR1ci5taW51dGVzLFxuICAgICAgc2Vjb25kczogZHVyLnNlY29uZHMsXG4gICAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHNcbiAgICB9KS5hcyhcIm1pbGxpc2Vjb25kc1wiKSxcbiAgICBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKGMpO1xuXG4gIGxldCBbdHMsIG9dID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSk7XG5cbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7XG4gICAgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcbiAgfVxuXG4gIHJldHVybiB7IHRzLCBvIH07XG59XG5cbi8vIGhlbHBlciB1c2VmdWwgaW4gdHVybmluZyB0aGUgcmVzdWx0cyBvZiBwYXJzaW5nIGludG8gcmVhbCBkYXRlc1xuLy8gYnkgaGFuZGxpbmcgdGhlIHpvbmUgb3B0aW9uc1xuZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCkge1xuICBjb25zdCB7IHNldFpvbmUsIHpvbmUgfSA9IG9wdHM7XG4gIGlmIChwYXJzZWQgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCBpbnRlcnByZXRhdGlvblpvbmUgPSBwYXJzZWRab25lIHx8IHpvbmUsXG4gICAgICBpbnN0ID0gRGF0ZVRpbWUuZnJvbU9iamVjdChcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYXJzZWQsIG9wdHMsIHtcbiAgICAgICAgICB6b25lOiBpbnRlcnByZXRhdGlvblpvbmUsXG4gICAgICAgICAgLy8gc2V0Wm9uZSBpcyBhIHZhbGlkIG9wdGlvbiBpbiB0aGUgY2FsbGluZyBtZXRob2RzLCBidXQgbm90IGluIGZyb21PYmplY3RcbiAgICAgICAgICBzZXRab25lOiB1bmRlZmluZWRcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgcmV0dXJuIHNldFpvbmUgPyBpbnN0IDogaW5zdC5zZXRab25lKHpvbmUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFxuICAgICAgbmV3IEludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzICR7Zm9ybWF0fWApXG4gICAgKTtcbiAgfVxufVxuXG4vLyBpZiB5b3Ugd2FudCB0byBvdXRwdXQgYSB0ZWNobmljYWwgZm9ybWF0IChlLmcuIFJGQyAyODIyKSwgdGhpcyBoZWxwZXJcbi8vIGhlbHBzIGhhbmRsZSB0aGUgZGV0YWlsc1xuZnVuY3Rpb24gdG9UZWNoRm9ybWF0KGR0LCBmb3JtYXQsIGFsbG93WiA9IHRydWUpIHtcbiAgcmV0dXJuIGR0LmlzVmFsaWRcbiAgICA/IEZvcm1hdHRlci5jcmVhdGUoTG9jYWxlLmNyZWF0ZShcImVuLVVTXCIpLCB7XG4gICAgICAgIGFsbG93WixcbiAgICAgICAgZm9yY2VTaW1wbGU6IHRydWVcbiAgICAgIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KVxuICAgIDogbnVsbDtcbn1cblxuLy8gdGVjaG5pY2FsIHRpbWUgZm9ybWF0cyAoZS5nLiB0aGUgdGltZSBwYXJ0IG9mIElTTyA4NjAxKSwgdGFrZSBzb21lIG9wdGlvbnNcbi8vIGFuZCB0aGlzIGNvbW1vbml6ZXMgdGhlaXIgaGFuZGxpbmdcbmZ1bmN0aW9uIHRvVGVjaFRpbWVGb3JtYXQoXG4gIGR0LFxuICB7XG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0LFxuICAgIGluY2x1ZGVab25lID0gZmFsc2UsXG4gICAgc3BhY2Vab25lID0gZmFsc2UsXG4gICAgZm9ybWF0ID0gXCJleHRlbmRlZFwiXG4gIH1cbikge1xuICBsZXQgZm10ID0gZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcIkhIbW1cIiA6IFwiSEg6bW1cIjtcblxuICBpZiAoIXN1cHByZXNzU2Vjb25kcyB8fCBkdC5zZWNvbmQgIT09IDAgfHwgZHQubWlsbGlzZWNvbmQgIT09IDApIHtcbiAgICBmbXQgKz0gZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcInNzXCIgOiBcIjpzc1wiO1xuICAgIGlmICghc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgZHQubWlsbGlzZWNvbmQgIT09IDApIHtcbiAgICAgIGZtdCArPSBcIi5TU1NcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpICYmIHNwYWNlWm9uZSkge1xuICAgIGZtdCArPSBcIiBcIjtcbiAgfVxuXG4gIGlmIChpbmNsdWRlWm9uZSkge1xuICAgIGZtdCArPSBcInpcIjtcbiAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgZm10ICs9IGZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJaWlpcIiA6IFwiWlpcIjtcbiAgfVxuXG4gIHJldHVybiB0b1RlY2hGb3JtYXQoZHQsIGZtdCk7XG59XG5cbi8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xuY29uc3QgZGVmYXVsdFVuaXRWYWx1ZXMgPSB7XG4gICAgbW9udGg6IDEsXG4gICAgZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMFxuICB9LFxuICBkZWZhdWx0V2Vla1VuaXRWYWx1ZXMgPSB7XG4gICAgd2Vla051bWJlcjogMSxcbiAgICB3ZWVrZGF5OiAxLFxuICAgIGhvdXI6IDAsXG4gICAgbWludXRlOiAwLFxuICAgIHNlY29uZDogMCxcbiAgICBtaWxsaXNlY29uZDogMFxuICB9LFxuICBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XG4gICAgb3JkaW5hbDogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDBcbiAgfTtcblxuLy8gVW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnMsIHNvcnRlZCBieSBiaWduZXNzXG5jb25zdCBvcmRlcmVkVW5pdHMgPSBbXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl0sXG4gIG9yZGVyZWRXZWVrVW5pdHMgPSBbXG4gICAgXCJ3ZWVrWWVhclwiLFxuICAgIFwid2Vla051bWJlclwiLFxuICAgIFwid2Vla2RheVwiLFxuICAgIFwiaG91clwiLFxuICAgIFwibWludXRlXCIsXG4gICAgXCJzZWNvbmRcIixcbiAgICBcIm1pbGxpc2Vjb25kXCJcbiAgXSxcbiAgb3JkZXJlZE9yZGluYWxVbml0cyA9IFtcInllYXJcIiwgXCJvcmRpbmFsXCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdO1xuXG4vLyBzdGFuZGFyZGl6ZSBjYXNlIGFuZCBwbHVyYWxpdHkgaW4gdW5pdHNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICBjb25zdCBub3JtYWxpemVkID0ge1xuICAgIHllYXI6IFwieWVhclwiLFxuICAgIHllYXJzOiBcInllYXJcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIGRheTogXCJkYXlcIixcbiAgICBkYXlzOiBcImRheVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBtaW51dGU6IFwibWludXRlXCIsXG4gICAgbWludXRlczogXCJtaW51dGVcIixcbiAgICBxdWFydGVyOiBcInF1YXJ0ZXJcIixcbiAgICBxdWFydGVyczogXCJxdWFydGVyXCIsXG4gICAgc2Vjb25kOiBcInNlY29uZFwiLFxuICAgIHNlY29uZHM6IFwic2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmQ6IFwibWlsbGlzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZHM6IFwibWlsbGlzZWNvbmRcIixcbiAgICB3ZWVrZGF5OiBcIndlZWtkYXlcIixcbiAgICB3ZWVrZGF5czogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3NudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtudW1iZXJzOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVreWVhcjogXCJ3ZWVrWWVhclwiLFxuICAgIHdlZWt5ZWFyczogXCJ3ZWVrWWVhclwiLFxuICAgIG9yZGluYWw6IFwib3JkaW5hbFwiXG4gIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTtcblxuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuXG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5mdW5jdGlvbiBxdWlja0RUKG9iaiwgem9uZSkge1xuICAvLyBhc3N1bWUgd2UgaGF2ZSB0aGUgaGlnaGVyLW9yZGVyIHVuaXRzXG4gIGZvciAoY29uc3QgdSBvZiBvcmRlcmVkVW5pdHMpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgb2JqW3VdID0gZGVmYXVsdFVuaXRWYWx1ZXNbdV07XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XG4gIGlmIChpbnZhbGlkKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gIH1cblxuICBjb25zdCB0c05vdyA9IFNldHRpbmdzLm5vdygpLFxuICAgIG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KSxcbiAgICBbdHMsIG9dID0gb2JqVG9UUyhvYmosIG9mZnNldFByb3Zpcywgem9uZSk7XG5cbiAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgdHMsXG4gICAgem9uZSxcbiAgICBvXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykge1xuICBjb25zdCByb3VuZCA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmQpID8gdHJ1ZSA6IG9wdHMucm91bmQsXG4gICAgZm9ybWF0ID0gKGMsIHVuaXQpID0+IHtcbiAgICAgIGMgPSByb3VuZFRvKGMsIHJvdW5kIHx8IG9wdHMuY2FsZW5kYXJ5ID8gMCA6IDIsIHRydWUpO1xuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZW5kLmxvYy5jbG9uZShvcHRzKS5yZWxGb3JtYXR0ZXIob3B0cyk7XG4gICAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChjLCB1bml0KTtcbiAgICB9LFxuICAgIGRpZmZlciA9IHVuaXQgPT4ge1xuICAgICAgaWYgKG9wdHMuY2FsZW5kYXJ5KSB7XG4gICAgICAgIGlmICghZW5kLmhhc1NhbWUoc3RhcnQsIHVuaXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGVuZFxuICAgICAgICAgICAgLnN0YXJ0T2YodW5pdClcbiAgICAgICAgICAgIC5kaWZmKHN0YXJ0LnN0YXJ0T2YodW5pdCksIHVuaXQpXG4gICAgICAgICAgICAuZ2V0KHVuaXQpO1xuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGlmIChvcHRzLnVuaXQpIHtcbiAgICByZXR1cm4gZm9ybWF0KGRpZmZlcihvcHRzLnVuaXQpLCBvcHRzLnVuaXQpO1xuICB9XG5cbiAgZm9yIChjb25zdCB1bml0IG9mIG9wdHMudW5pdHMpIHtcbiAgICBjb25zdCBjb3VudCA9IGRpZmZlcih1bml0KTtcbiAgICBpZiAoTWF0aC5hYnMoY291bnQpID49IDEpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0KDAsIG9wdHMudW5pdHNbb3B0cy51bml0cy5sZW5ndGggLSAxXSk7XG59XG5cbi8qKlxuICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOlxuICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC5cbiAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLlxuICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOlxuICpcbiAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBsb2NhbH0sIHtAbGluayB1dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBmcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBmcm9tSVNPfSwge0BsaW5rIGZyb21IVFRQfSwgYW5kIHtAbGluayBmcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIGZyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBmcm9tSlNEYXRlfS5cbiAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayB0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayB5ZWFyfSwge0BsaW5rIG1vbnRofSxcbiAqIHtAbGluayBkYXl9LCB7QGxpbmsgaG91cn0sIHtAbGluayBtaW51dGV9LCB7QGxpbmsgc2Vjb25kfSwge0BsaW5rIG1pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuXG4gKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgd2Vla1llYXJ9LCB7QGxpbmsgd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgd2Vla2RheX0gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBsb2NhbGV9IGFuZCB7QGxpbmsgbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBzZXR9LCB7QGxpbmsgcmVjb25maWd1cmV9LCB7QGxpbmsgc2V0Wm9uZX0sIHtAbGluayBzZXRMb2NhbGV9LCB7QGxpbmsgcGx1c30sIHtAbGluayBtaW51c30sIHtAbGluayBlbmRPZn0sIHtAbGluayBzdGFydE9mfSwge0BsaW5rIHRvVVRDfSwgYW5kIHtAbGluayB0b0xvY2FsfS5cbiAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayB0b1JlbGF0aXZlfSwge0BsaW5rIHRvUmVsYXRpdmVDYWxlbmRhcn0sIHtAbGluayB0b0pTT059LCB7QGxpbmsgdG9JU099LCB7QGxpbmsgdG9IVFRQfSwge0BsaW5rIHRvT2JqZWN0fSwge0BsaW5rIHRvUkZDMjgyMn0sIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0xvY2FsZVN0cmluZ30sIHtAbGluayB0b0Zvcm1hdH0sIHtAbGluayB0b01pbGxpc30gYW5kIHtAbGluayB0b0pTRGF0ZX0uXG4gKlxuICogVGhlcmUncyBwbGVudHkgb3RoZXJzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uLCB0aW1lIHpvbmVzLCBhbHRlcm5hdGl2ZSBjYWxlbmRhcnMsIHZhbGlkaXR5LCBhbmQgc28gb24sIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVRpbWUge1xuICAvKipcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25zdCB6b25lID0gY29uZmlnLnpvbmUgfHwgU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG5cbiAgICBsZXQgaW52YWxpZCA9XG4gICAgICBjb25maWcuaW52YWxpZCB8fFxuICAgICAgKE51bWJlci5pc05hTihjb25maWcudHMpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbCkgfHxcbiAgICAgICghem9uZS5pc1ZhbGlkID8gdW5zdXBwb3J0ZWRab25lKHpvbmUpIDogbnVsbCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy50cyA9IGlzVW5kZWZpbmVkKGNvbmZpZy50cykgPyBTZXR0aW5ncy5ub3coKSA6IGNvbmZpZy50cztcblxuICAgIGxldCBjID0gbnVsbCxcbiAgICAgIG8gPSBudWxsO1xuICAgIGlmICghaW52YWxpZCkge1xuICAgICAgY29uc3QgdW5jaGFuZ2VkID0gY29uZmlnLm9sZCAmJiBjb25maWcub2xkLnRzID09PSB0aGlzLnRzICYmIGNvbmZpZy5vbGQuem9uZS5lcXVhbHMoem9uZSk7XG5cbiAgICAgIGlmICh1bmNoYW5nZWQpIHtcbiAgICAgICAgW2MsIG9dID0gW2NvbmZpZy5vbGQuYywgY29uZmlnLm9sZC5vXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG90ID0gem9uZS5vZmZzZXQodGhpcy50cyk7XG4gICAgICAgIGMgPSB0c1RvT2JqKHRoaXMudHMsIG90KTtcbiAgICAgICAgaW52YWxpZCA9IE51bWJlci5pc05hTihjLnllYXIpID8gbmV3IEludmFsaWQoXCJpbnZhbGlkIGlucHV0XCIpIDogbnVsbDtcbiAgICAgICAgYyA9IGludmFsaWQgPyBudWxsIDogYztcbiAgICAgICAgbyA9IGludmFsaWQgPyBudWxsIDogb3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fem9uZSA9IHpvbmU7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmludmFsaWQgPSBpbnZhbGlkO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMud2Vla0RhdGEgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuYyA9IGM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5vID0gbztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmlzTHV4b25EYXRlVGltZSA9IHRydWU7XG4gIH1cblxuICAvLyBDT05TVFJVQ1RcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgbG9jYWwoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgdHM6IFNldHRpbmdzLm5vdygpIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVpY2tEVChcbiAgICAgICAge1xuICAgICAgICAgIHllYXIsXG4gICAgICAgICAgbW9udGgsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIGhvdXIsXG4gICAgICAgICAgbWludXRlLFxuICAgICAgICAgIHNlY29uZCxcbiAgICAgICAgICBtaWxsaXNlY29uZFxuICAgICAgICB9LFxuICAgICAgICBTZXR0aW5ncy5kZWZhdWx0Wm9uZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgaW4gVVRDXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeWVhcl0gLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYHV0YygpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNzY1WlxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyB1dGMoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IFNldHRpbmdzLm5vdygpLFxuICAgICAgICB6b25lOiBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVpY2tEVChcbiAgICAgICAge1xuICAgICAgICAgIHllYXIsXG4gICAgICAgICAgbW9udGgsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIGhvdXIsXG4gICAgICAgICAgbWludXRlLFxuICAgICAgICAgIHNlY29uZCxcbiAgICAgICAgICBtaWxsaXNlY29uZFxuICAgICAgICB9LFxuICAgICAgICBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhc2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YXNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSlNEYXRlKGRhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRzID0gaXNEYXRlKGRhdGUpID8gZGF0ZS52YWx1ZU9mKCkgOiBOYU47XG4gICAgaWYgKE51bWJlci5pc05hTih0cykpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgIHRzOiB0cyxcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21NaWxsaXMobWlsbGlzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzTnVtYmVyKG1pbGxpc2Vjb25kcykpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcbiAgICAgICAgYGZyb21NaWxsaXMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXQsIGJ1dCByZWNlaXZlZCBhICR7dHlwZW9mIG1pbGxpc2Vjb25kc30gd2l0aCB2YWx1ZSAke21pbGxpc2Vjb25kc31gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAobWlsbGlzZWNvbmRzIDwgLU1BWF9EQVRFIHx8IG1pbGxpc2Vjb25kcyA+IE1BWF9EQVRFKSB7XG4gICAgICAvLyB0aGlzIGlzbid0IHBlcmZlY3QgYmVjYXVzZSBiZWNhdXNlIHdlIGNhbiBzdGlsbCBlbmQgdXAgb3V0IG9mIHJhbmdlIGJlY2F1c2Ugb2YgYWRkaXRpb25hbCBzaGlmdGluZywgYnV0IGl0J3MgYSBzdGFydFxuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXCJUaW1lc3RhbXAgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSB0aGUgZXBvY2ggKG1lYW5pbmcgc2luY2UgMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Vjb25kcyAtIGEgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgMTk3MCBVVENcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0aW9ucy56b25lPSdsb2NhbCddIC0gdGhlIHpvbmUgdG8gcGxhY2UgdGhlIERhdGVUaW1lIGludG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVNlY29uZHMoc2Vjb25kcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFpc051bWJlcihzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbVNlY29uZHMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogc2Vjb25kcyAqIDEwMDAsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YXNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXInIGFuZCAnaG91cicgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyIC0gYSB5ZWFyLCBzdWNoIGFzIDE5ODdcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aCAtIGEgbW9udGgsIDEtMTJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXkgLSBhIGRheSBvZiB0aGUgbW9udGgsIDEtMzEsIGRlcGVuZGluZyBvbiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5vcmRpbmFsIC0gZGF5IG9mIHRoZSB5ZWFyLCAxLTM2NSBvciAzNjZcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrWWVhciAtIGFuIElTTyB3ZWVrIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrTnVtYmVyIC0gYW4gSVNPIHdlZWsgbnVtYmVyLCBiZXR3ZWVuIDEgYW5kIDUyIG9yIDUzLCBkZXBlbmRpbmcgb24gdGhlIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrZGF5IC0gYW4gSVNPIHdlZWtkYXksIDEtNywgd2hlcmUgMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yM1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb2JqLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyLCBtb250aDogNSwgZGF5OiAyNX0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB5ZWFyOiAxOTgyIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2IH0pIC8vfj4gdG9kYXkgYXQgMTA6MjY6MDZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYsIHpvbmU6ICd1dGMnIH0pLFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiwgem9uZTogJ2xvY2FsJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiwgem9uZTogJ0FtZXJpY2EvTmV3X1lvcmsnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyB3ZWVrWWVhcjogMjAxNiwgd2Vla051bWJlcjogMiwgd2Vla2RheTogMyB9KS50b0lTT0RhdGUoKSAvLz0+ICcyMDE2LTAxLTEzJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iaikge1xuICAgIGNvbnN0IHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob2JqLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHNOb3cgPSBTZXR0aW5ncy5ub3coKSxcbiAgICAgIG9mZnNldFByb3ZpcyA9IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZVVuaXQsIFtcbiAgICAgICAgXCJ6b25lXCIsXG4gICAgICAgIFwibG9jYWxlXCIsXG4gICAgICAgIFwib3V0cHV0Q2FsZW5kYXJcIixcbiAgICAgICAgXCJudW1iZXJpbmdTeXN0ZW1cIlxuICAgICAgXSksXG4gICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yWWVhciA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLnllYXIpLFxuICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgIGRlZmluaXRlV2Vla0RlZiA9IG5vcm1hbGl6ZWQud2Vla1llYXIgfHwgbm9ybWFsaXplZC53ZWVrTnVtYmVyLFxuICAgICAgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob2JqKTtcblxuICAgIC8vIGNhc2VzOlxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IChub3JtYWxpemVkLndlZWtkYXkgJiYgIWNvbnRhaW5zR3JlZ29yKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmXG4gICAgbGV0IHVuaXRzLFxuICAgICAgZGVmYXVsdFZhbHVlcyxcbiAgICAgIG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFVuaXRWYWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGZvciBtaXNzaW5nIHN0dWZmXG4gICAgbGV0IGZvdW5kRmlyc3QgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgIGNvbnN0IHYgPSBub3JtYWxpemVkW3VdO1xuICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRGaXJzdCkge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gZGVmYXVsdFZhbHVlc1t1XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBvYmpOb3dbdV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSB2YWx1ZXMgd2UgaGF2ZSBhcmUgaW4gcmFuZ2VcbiAgICBjb25zdCBoaWdoZXJPcmRlckludmFsaWQgPSB1c2VXZWVrRGF0YVxuICAgICAgICA/IGhhc0ludmFsaWRXZWVrRGF0YShub3JtYWxpemVkKVxuICAgICAgICA6IGNvbnRhaW5zT3JkaW5hbFxuICAgICAgICAgID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpXG4gICAgICAgICAgOiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShub3JtYWxpemVkKSxcbiAgICAgIGludmFsaWQgPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpO1xuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH1cblxuICAgIC8vIGNvbXB1dGUgdGhlIGFjdHVhbCB0aW1lXG4gICAgY29uc3QgZ3JlZ29yaWFuID0gdXNlV2Vla0RhdGFcbiAgICAgICAgPyB3ZWVrVG9HcmVnb3JpYW4obm9ybWFsaXplZClcbiAgICAgICAgOiBjb250YWluc09yZGluYWxcbiAgICAgICAgICA/IG9yZGluYWxUb0dyZWdvcmlhbihub3JtYWxpemVkKVxuICAgICAgICAgIDogbm9ybWFsaXplZCxcbiAgICAgIFt0c0ZpbmFsLCBvZmZzZXRGaW5hbF0gPSBvYmpUb1RTKGdyZWdvcmlhbiwgb2Zmc2V0UHJvdmlzLCB6b25lVG9Vc2UpLFxuICAgICAgaW5zdCA9IG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiB0c0ZpbmFsLFxuICAgICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICAgIG86IG9mZnNldEZpbmFsLFxuICAgICAgICBsb2NcbiAgICAgIH0pO1xuXG4gICAgLy8gZ3JlZ29yaWFuIGRhdGEgKyB3ZWVrZGF5IHNlcnZlcyBvbmx5IHRvIHZhbGlkYXRlXG4gICAgaWYgKG5vcm1hbGl6ZWQud2Vla2RheSAmJiBjb250YWluc0dyZWdvciAmJiBvYmoud2Vla2RheSAhPT0gaW5zdC53ZWVrZGF5KSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChcbiAgICAgICAgXCJtaXNtYXRjaGVkIHdlZWtkYXlcIixcbiAgICAgICAgYHlvdSBjYW4ndCBzcGVjaWZ5IGJvdGggYSB3ZWVrZGF5IG9mICR7bm9ybWFsaXplZC53ZWVrZGF5fSBhbmQgYSBkYXRlIG9mICR7aW5zdC50b0lTTygpfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJywge3NldFpvbmU6IHRydWV9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycsIHt6b25lOiAndXRjJ30pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtVzA1LTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIklTTyA4NjAxXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzOjEyIEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCdGcmksIDI1IE5vdiAyMDE2IDEzOjIzOjEyICswNjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzIFonKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tUkZDMjgyMih0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiUkZDIDI4MjJcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSFRUUCh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUhUVFBEYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiSFRUUFwiLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLlxuICAgKiBAc2VlIGh0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9kb2NzL21hbnVhbC9wYXJzaW5nLmh0bWwjdGFibGUtb2YtdG9rZW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdHMsXG4gICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgICAgfSksXG4gICAgICBbdmFscywgcGFyc2VkWm9uZSwgaW52YWxpZF0gPSBwYXJzZUZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBgZm9ybWF0ICR7Zm10fWAsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZyh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZVxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVNRTCh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVNRTCh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlNRTFwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbiA9IG51bGwpIHtcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEYXRlVGltZSBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRGF0ZVRpbWVFcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7IGludmFsaWQgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEYXRlVGltZShvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkRhdGVUaW1lKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8vIElORk9cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnbW9udGgnKTsgLy89PiA3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnZGF5Jyk7IC8vPT4gNFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQodW5pdCkge1xuICAgIHJldHVybiB0aGlzW3VuaXRdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEYXRlVGltZSBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb2NhbGUgb2YgYSBEYXRlVGltZSwgc3VjaCAnZW4tR0InLiBUaGUgbG9jYWxlIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEYXRlVGltZSwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG91dHB1dCBjYWxlbmRhciBvZiBhIERhdGVUaW1lLCBzdWNoICdpc2xhbWljJy4gVGhlIG91dHB1dCBjYWxlbmRhciBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvdXRwdXRDYWxlbmRhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdGltZSB6b25lIGFzc29jaWF0ZWQgd2l0aCB0aGlzIERhdGVUaW1lLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIGdldCB6b25lKCkge1xuICAgIHJldHVybiB0aGlzLl96b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHpvbmVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS55ZWFyIC8vPT4gMjAxN1xuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy55ZWFyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcXVhcnRlclxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkucXVhcnRlciAvLz0+IDJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBxdWFydGVyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmNlaWwodGhpcy5jLm1vbnRoIC8gMykgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtb250aCAoMS0xMikuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5tb250aCAvLz0+IDVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtb250aCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1vbnRoIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5IG9mIHRoZSBtb250aCAoMS0zMGlzaCkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5KS5ob3VyIC8vPT4gOVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGhvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5ob3VyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWludXRlIG9mIHRoZSBob3VyICgwLTU5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwKS5taW51dGUgLy89PiAzMFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbnV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbnV0ZSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlY29uZCBvZiB0aGUgbWludXRlICgwLTU5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTJcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBzZWNvbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCwgNTIsIDY1NCkubWlsbGlzZWNvbmQgLy89PiA2NTRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBtaWxsaXNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbGxpc2Vjb25kIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VlayB5ZWFyXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkud2Vla051bWJlciAvLz0+IDIxXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla051bWJlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrLlxuICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDExLCAzMSkud2Vla2RheSAvLz0+IDRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtkYXkgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcmRpbmFsIChtZWFuaW5nIHRoZSBkYXkgb2YgdGhlIHllYXIpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1XG4gICAqIEB0eXBlIHtudW1iZXJ8RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgb3JkaW5hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLm1vbnRoU2hvcnQgLy89PiBPY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBtb250aFNob3J0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcInNob3J0XCIsIHsgbG9jYWxlOiB0aGlzLmxvY2FsZSB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyBtb250aCBuYW1lLCBzdWNoIGFzICdPY3RvYmVyJy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhMb25nIC8vPT4gT2N0b2JlclxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1vbnRoTG9uZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoXCJsb25nXCIsIHsgbG9jYWxlOiB0aGlzLmxvY2FsZSB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgd2Vla2RheSwgc3VjaCBhcyAnTW9uJy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheVNob3J0IC8vPT4gTW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgd2Vla2RheVNob3J0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKFwic2hvcnRcIiwgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkud2Vla2RheUxvbmcgLy89PiBNb25kYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB3ZWVrZGF5TG9uZygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcImxvbmdcIiwgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIFVUQyBvZmZzZXQgb2YgdGhpcyBEYXRlVGltZSBpbiBtaW51dGVzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkub2Zmc2V0IC8vPT4gLTI0MFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvZmZzZXROYW1lU2hvcnQoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb25nIGh1bWFuIG5hbWUgZm9yIHRoZSB6b25lJ3MgY3VycmVudCBvZmZzZXQsIGZvciBleGFtcGxlIFwiRWFzdGVybiBTdGFuZGFyZCBUaW1lXCIgb3IgXCJFYXN0ZXJuIERheWxpZ2h0IFRpbWVcIi5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgb2Zmc2V0TmFtZUxvbmcoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB0aGlzIHpvbmUncyBvZmZzZXQgZXZlciBjaGFuZ2VzLCBhcyBpbiBhIERTVC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNPZmZzZXRGaXhlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy56b25lLnVuaXZlcnNhbCA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIERhdGVUaW1lIGlzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc0luRFNUKCkge1xuICAgIGlmICh0aGlzLmlzT2Zmc2V0Rml4ZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7IG1vbnRoOiAxIH0pLm9mZnNldCB8fCB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDUgfSkub2Zmc2V0XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuaXNJbkxlYXBZZWFyIC8vPT4gZmFsc2VcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNJbkxlYXBZZWFyKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIG1vbnRoXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDIpLmRheXNJbk1vbnRoIC8vPT4gMjlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXNJbk1vbnRoKCkge1xuICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmRheXNJblllYXIgLy89PiAzNjZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuZGF5c0luWWVhciAvLz0+IDM2NVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXNJblllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMDQpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla3NJbldlZWtZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgSW50bCBvcHRpb25zIGZvciB0aGlzIERhdGVUaW1lLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiB1bmRlcnN0YW5kaW5nIHRoZSBiZWhhdmlvciBvZiBmb3JtYXR0aW5nIG1ldGhvZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSB0aGUgc2FtZSBvcHRpb25zIGFzIHRvTG9jYWxlU3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHJlc29sdmVkTG9jYWxlT3B0cyhvcHRzID0ge30pIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gRm9ybWF0dGVyLmNyZWF0ZShcbiAgICAgIHRoaXMubG9jLmNsb25lKG9wdHMpLFxuICAgICAgb3B0c1xuICAgICkucmVzb2x2ZWRPcHRpb25zKHRoaXMpO1xuICAgIHJldHVybiB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcjogY2FsZW5kYXIgfTtcbiAgfVxuXG4gIC8vIFRSQU5TRk9STVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gVVRDLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8ge0BsaW5rIHNldFpvbmV9KCd1dGMnKVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldD0wXSAtIG9wdGlvbmFsbHksIGFuIG9mZnNldCBmcm9tIFVUQyBpbiBtaW51dGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV0gLSBvcHRpb25zIHRvIHBhc3MgdG8gYHNldFpvbmUoKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICB0b1VUQyhvZmZzZXQgPSAwLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgdG9Mb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gc3BlY2lmaWVkIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHNldHRlciBrZWVwcyB0aGUgdW5kZXJseWluZyB0aW1lIHRoZSBzYW1lIChhcyBpbiwgdGhlIHNhbWUgdGltZXN0YW1wKSwgYnV0IHRoZSBuZXcgaW5zdGFuY2Ugd2lsbCByZXBvcnQgZGlmZmVyZW50IGxvY2FsIHRpbWVzIGFuZCBjb25zaWRlciBEU1RzIHdoZW4gbWFraW5nIGNvbXB1dGF0aW9ucywgYXMgd2l0aCB7QGxpbmsgcGx1c30uIFlvdSBtYXkgd2lzaCB0byB1c2Uge0BsaW5rIHRvTG9jYWx9IGFuZCB7QGxpbmsgdG9VVEN9IHdoaWNoIHByb3ZpZGUgc2ltcGxlIGNvbnZlbmllbmNlIHdyYXBwZXJzIGZvciBjb21tb25seSB1c2VkIHpvbmVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIGEgem9uZSBpZGVudGlmaWVyLiBBcyBhIHN0cmluZywgdGhhdCBjYW4gYmUgYW55IElBTkEgem9uZSBzdXBwb3J0ZWQgYnkgdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZml4ZWQtb2Zmc2V0IG5hbWUgb2YgdGhlIGZvcm0gJ1VUQyszJywgb3IgdGhlIHN0cmluZ3MgJ2xvY2FsJyBvciAndXRjJy4gWW91IG1heSBhbHNvIHN1cHBseSBhbiBpbnN0YW5jZSBvZiBhIHtAbGluayBab25lfSBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMua2VlcExvY2FsVGltZT1mYWxzZV0gLSBJZiB0cnVlLCBhZGp1c3QgdGhlIHVuZGVybHlpbmcgdGltZSBzbyB0aGF0IHRoZSBsb2NhbCB0aW1lIHN0YXlzIHRoZSBzYW1lLCBidXQgaW4gdGhlIHRhcmdldCB6b25lLiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRoaXMuXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0Wm9uZSh6b25lLCB7IGtlZXBMb2NhbFRpbWUgPSBmYWxzZSwga2VlcENhbGVuZGFyVGltZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHpvbmUgPSBub3JtYWxpemVab25lKHpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoem9uZS5lcXVhbHModGhpcy56b25lKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmICghem9uZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VFMgPSB0aGlzLnRzO1xuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xuICAgICAgICBjb25zdCBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjb25zdCBhc09iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgW25ld1RTXSA9IG9ialRvVFMoYXNPYmosIG9mZnNldEd1ZXNzLCB6b25lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzOiBuZXdUUywgem9uZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG9yIG91dHB1dENhbGVuZGFyLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHJlY29uZmlndXJlKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xuICAgIGNvbnN0IGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IGxvYyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogSnVzdCBhIGNvbnZlbmllbnQgYWxpYXMgZm9yIHJlY29uZmlndXJlKHsgbG9jYWxlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5zZXRMb2NhbGUoJ2VuLUdCJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoeyBsb2NhbGUgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayByZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgbm9ybWFsaXplVW5pdCwgW10pLFxuICAgICAgc2V0dGluZ1dlZWtTdHVmZiA9XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKSB8fFxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKSB8fFxuICAgICAgICAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KTtcblxuICAgIGxldCBtaXhlZDtcbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oT2JqZWN0LmFzc2lnbihncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgbm9ybWFsaXplZCkpO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHtcbiAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKE9iamVjdC5hc3NpZ24oZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWl4ZWQgPSBPYmplY3QuYXNzaWduKHRoaXMudG9PYmplY3QoKSwgbm9ybWFsaXplZCk7XG5cbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXG4gICAgICBpZiAoaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpKSB7XG4gICAgICAgIG1peGVkLmRheSA9IE1hdGgubWluKGRheXNJbk1vbnRoKG1peGVkLnllYXIsIG1peGVkLm1vbnRoKSwgbWl4ZWQuZGF5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBbdHMsIG9dID0gb2JqVG9UUyhtaXhlZCwgdGhpcy5vLCB0aGlzLnpvbmUpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzLCBvIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqXG4gICAqIEFkZGluZyBob3VycywgbWludXRlcywgc2Vjb25kcywgb3IgbWlsbGlzZWNvbmRzIGluY3JlYXNlcyB0aGUgdGltZXN0YW1wIGJ5IHRoZSByaWdodCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLiBBZGRpbmcgZGF5cywgbW9udGhzLCBvciB5ZWFycyBzaGlmdHMgdGhlIGNhbGVuZGFyLCBhY2NvdW50aW5nIGZvciBEU1RzIGFuZCBsZWFwIHllYXJzIGFsb25nIHRoZSB3YXkuIFRodXMsIGBkdC5wbHVzKHsgaG91cnM6IDI0IH0pYCBtYXkgcmVzdWx0IGluIGEgZGlmZmVyZW50IHRpbWUgdGhhbiBgZHQucGx1cyh7IGRheXM6IDEgfSlgIGlmIHRoZXJlJ3MgYSBEU1Qgc2hpZnQgaW4gYmV0d2Vlbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoMTIzKSAvL34+IGluIDEyMyBtaWxsaXNlY29uZHNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgbWludXRlczogMTUgfSkgLy9+PiBpbiAxNSBtaW51dGVzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGRheXM6IDEgfSkgLy9+PiB0aGlzIHRpbWUgdG9tb3Jyb3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogLTEgfSkgLy9+PiB0aGlzIHRpbWUgeWVzdGVyZGF5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBwbHVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAqL1xuICBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKS5uZWdhdGUoKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGJlZ2lubmluZyBvZiBhIHVuaXQgb2YgdGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgYmVnaW5uaW5nIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCdtb250aCcpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5zdGFydE9mKCd5ZWFyJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDEtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdkYXknKS50b0lTT1RpbWUoKTsgLy89PiAnMDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignaG91cicpLnRvSVNPVGltZSgpOyAvLz0+ICcwNTowMDowMC4wMDAtMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhcnRPZih1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IG8gPSB7fSxcbiAgICAgIG5vcm1hbGl6ZWRVbml0ID0gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KTtcbiAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRVbml0KSB7XG4gICAgICBjYXNlIFwieWVhcnNcIjpcbiAgICAgICAgby5tb250aCA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwicXVhcnRlcnNcIjpcbiAgICAgIGNhc2UgXCJtb250aHNcIjpcbiAgICAgICAgby5kYXkgPSAxO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcIndlZWtzXCI6XG4gICAgICBjYXNlIFwiZGF5c1wiOlxuICAgICAgICBvLmhvdXIgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcImhvdXJzXCI6XG4gICAgICAgIG8ubWludXRlID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJtaW51dGVzXCI6XG4gICAgICAgIG8uc2Vjb25kID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJzZWNvbmRzXCI6XG4gICAgICAgIG8ubWlsbGlzZWNvbmQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaWxsaXNlY29uZHNcIjpcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKVxuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJ3ZWVrc1wiKSB7XG4gICAgICBvLndlZWtkYXkgPSAxO1xuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJxdWFydGVyc1wiKSB7XG4gICAgICBjb25zdCBxID0gTWF0aC5jZWlsKHRoaXMubW9udGggLyAzKTtcbiAgICAgIG8ubW9udGggPSAocSAtIDEpICogMyArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0KG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgZW5kIChtZWFuaW5nIHRoZSBsYXN0IG1pbGxpc2Vjb25kKSBvZiBhIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBlbmQgb2YuIENhbiBiZSAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ21vbnRoJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCd5ZWFyJykudG9JU08oKTsgLy89PiAnMjAxNC0xMi0zMVQyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIGVuZE9mKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IHRoaXMucGx1cyh7IFt1bml0XTogMSB9KVxuICAgICAgICAgIC5zdGFydE9mKHVuaXQpXG4gICAgICAgICAgLm1pbnVzKDEpXG4gICAgICA6IHRoaXM7XG4gIH1cblxuICAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uL2RvY3MvbWFudWFsL2Zvcm1hdHRpbmcuaHRtbCN0YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBzZWUgaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uL2RvY3MvbWFudWFsL2Zvcm1hdHRpbmcuaHRtbCN0YWJsZS1vZi10b2tlbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBBcHIgMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0Zvcm1hdChcIkhIICdob3VycyBhbmQnIG1tICdtaW51dGVzJ1wiKSAvLz0+ICcyMCBob3VycyBhbmQgNTUgbWludXRlcydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Gb3JtYXQoZm10LCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MucmVkZWZhdWx0VG9FTihvcHRzKSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKHRoaXMsIGZtdClcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBkYXRlLiBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgdGhlIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3IgYW5kIGFueSBwcmVzZXRzIGRlZmluZWQgYnkgTHV4b24sIHN1Y2ggYXMgYERhdGVUaW1lLkRBVEVfRlVMTGAgb3IgYERhdGVUaW1lLlRJTUVfU0lNUExFYC5cbiAgICogVGhlIGV4YWN0IGJlaGF2aW9yIG9mIHRoaXMgbWV0aG9kIGlzIGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBpbiBnZW5lcmFsIGl0IHdpbGwgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uXG4gICAqIG9mIHRoZSBEYXRlVGltZSBpbiB0aGUgYXNzaWduZWQgbG9jYWxlLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucyBhbmQgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiA0LzIwLzIwMTdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5zZXRMb2NhbGUoJ2VuLWdiJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAnMjAvMDQvMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyh7IGxvY2FsZTogJ2VuLWdiJyB9KTsgLy89PiAnMjAvMDQvMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSk7IC8vPT4gJzExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVUSU1FX1NIT1JUKTsgLy89PiAnNC8yMC8yMDE3LCAxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTsgLy89PiAnVGh1LCBBcHIgMjAsIDExOjI3IEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JywgaG91cjEyOiBmYWxzZSB9KTsgLy89PiAnMTE6MzInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvTG9jYWxlU3RyaW5nKG9wdHMgPSBGb3JtYXRzLkRBVEVfU0hPUlQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lKHRoaXMpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBmb3JtYXQgXCJwYXJ0c1wiLCBtZWFuaW5nIGluZGl2aWR1YWwgdG9rZW5zIGFsb25nIHdpdGggbWV0YWRhdGEuIFRoaXMgaXMgYWxsb3dzIGNhbGxlcnMgdG8gcG9zdC1wcm9jZXNzIGluZGl2aWR1YWwgc2VjdGlvbnMgb2YgdGhlIGZvcm1hdHRlZCBvdXRwdXQuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0L2Zvcm1hdFRvUGFydHNcbiAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMsIHNhbWUgYXMgYHRvTG9jYWxlU3RyaW5nYC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG4gIHRvTG9jYWxlUGFydHMob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTTygpIC8vPT4gJzE5ODItMDUtMjVUMDA6MDA6MDAuMDAwWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvSVNPKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNy0wNC0yMlQyMDo0NzowNS4zMzUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9JU08oeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMjAxNzA0MjJUMjA0NzA1LjMzNS0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTyhvcHRzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3RoaXMudG9JU09EYXRlKG9wdHMpfVQke3RoaXMudG9JU09UaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyBkYXRlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMTk4MjA1MjUnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPRGF0ZSh7IGZvcm1hdCA9IFwiZXh0ZW5kZWRcIiB9ID0ge30pIHtcbiAgICBsZXQgZm10ID0gZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcInl5eXlNTWRkXCIgOiBcInl5eXktTU0tZGRcIjtcbiAgICBpZiAodGhpcy55ZWFyID4gOTk5OSkge1xuICAgICAgZm10ID0gXCIrXCIgKyBmbXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBmbXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3Mgd2VlayBkYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09XZWVrRGF0ZSgpIC8vPT4gJzE5ODItVzIxLTInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPV2Vla0RhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcImtra2stJ1cnV1ctY1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHRpbWUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoKSAvLz0+ICcwNzozNDoxOS4zNjFaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0LCBzZWNvbmRzOiAwLCBtaWxsaXNlY29uZHM6IDAgfSkudG9JU09UaW1lKHsgc3VwcHJlc3NTZWNvbmRzOiB0cnVlIH0pIC8vPT4gJzA3OjM0WidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBmb3JtYXQ6ICdiYXNpYycgfSkgLy89PiAnMDczNDE5LjM2MVonXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPVGltZSh7XG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBzdXBwcmVzc1NlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgICBmb3JtYXQgPSBcImV4dGVuZGVkXCJcbiAgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRvVGVjaFRpbWVGb3JtYXQodGhpcywge1xuICAgICAgc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICBpbmNsdWRlT2Zmc2V0LFxuICAgICAgZm9ybWF0XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lLCBhbHdheXMgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyBaWlpcIiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1NRTERhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcInl5eXktTU0tZGRcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUxUaW1lKHsgaW5jbHVkZU9mZnNldCA9IHRydWUsIGluY2x1ZGVab25lID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRvVGVjaFRpbWVGb3JtYXQodGhpcywge1xuICAgICAgaW5jbHVkZU9mZnNldCxcbiAgICAgIGluY2x1ZGVab25lLFxuICAgICAgc3BhY2Vab25lOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUwob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aGlzLnRvU1FMRGF0ZSgpfSAke3RoaXMudG9TUUxUaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuIEFsaWFzIG9mIHtAbGluayB0b01pbGxpc31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy50b01pbGxpcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEJTT04gc2VyaWFsaXphYmxlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIHRvQlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0pTRGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRGF0ZVRpbWUncyB5ZWFyLCBtb250aCwgZGF5LCBhbmQgc28gb24uXG4gICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3Qob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIGNvbnN0IGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmMpO1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YXNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfVxuXG4gIC8vIENPTVBBUkVcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxuICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XG4gICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxuICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFxuICAgICAgICB0aGlzLmludmFsaWQgfHwgb3RoZXJEYXRlVGltZS5pbnZhbGlkLFxuICAgICAgICBcImNyZWF0ZWQgYnkgZGlmZmluZyBhbiBpbnZhbGlkIERhdGVUaW1lXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyT3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGxvY2FsZTogdGhpcy5sb2NhbGUsIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0gfSxcbiAgICAgIG9wdHNcbiAgICApO1xuXG4gICAgY29uc3QgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCksXG4gICAgICBlYXJsaWVyID0gb3RoZXJJc0xhdGVyID8gdGhpcyA6IG90aGVyRGF0ZVRpbWUsXG4gICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgZGlmZmVkID0gZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuXG4gICAqIFNlZSB7QGxpbmsgZGlmZn1cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmZOb3codW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubG9jYWwoKSwgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bnRpbChvdGhlckRhdGVUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEludGVydmFsLmZyb21EYXRlVGltZXModGhpcywgb3RoZXJEYXRlVGltZSkgOiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgRGF0ZVRpbWUgaXMgaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lIGFzIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5oYXNTYW1lKG90aGVyRFQsICdkYXknKTsgLy9+PiB0cnVlIGlmIGJvdGggdGhlIHNhbWUgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh1bml0ID09PSBcIm1pbGxpc2Vjb25kXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA9PT0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlucHV0TXMgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IHRoaXMuZW5kT2YodW5pdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEYXRlVGltZXMgYXJlIGVxdWFsIGlmZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxuICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVmFsaWQgJiZcbiAgICAgIG90aGVyLmlzVmFsaWQgJiZcbiAgICAgIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKCkgJiZcbiAgICAgIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiZcbiAgICAgIHRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdGhpcyB0aW1lIHJlbGF0aXZlIHRvIG5vdywgc3VjaCBhcyBcImluIHR3byBkYXlzXCIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91clxuICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5sb2NhbCgpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc3R5bGU9XCJsb25nXCJdIC0gdGhlIHN0eWxlIG9mIHVuaXRzLCBtdXN0IGJlIFwibG9uZ1wiLCBcInNob3J0XCIsIG9yIFwibmFycm93XCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBvciBcInNlY29uZHNcIlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJvdW5kPXRydWVdIC0gd2hldGhlciB0byByb3VuZCB0aGUgbnVtYmVycyBpbiB0aGUgb3V0cHV0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiaW4gMSBkYXlcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnNldExvY2FsZShcImVzXCIpLnRvUmVsYXRpdmUoeyBkYXlzOiAxIH0pIC8vPT4gXCJkZW50cm8gZGUgMSBkw61hXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5taW51cyh7IGRheXM6IDIgfSkudG9SZWxhdGl2ZSh7IHVuaXQ6IFwiaG91cnNcIiB9KSAvLz0+IFwiNDggaG91cnMgYWdvXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHsgem9uZTogdGhpcy56b25lIH0pLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/ICh0aGlzIDwgYmFzZSA/IC1vcHRpb25zLnBhZGRpbmcgOiBvcHRpb25zLnBhZGRpbmcpIDogMDtcbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKFxuICAgICAgYmFzZSxcbiAgICAgIHRoaXMucGx1cyhwYWRkaW5nKSxcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICBudW1lcmljOiBcImFsd2F5c1wiLFxuICAgICAgICB1bml0czogW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBkYXRlIHJlbGF0aXZlIHRvIHRvZGF5LCBzdWNoIGFzIFwieWVzdGVyZGF5XCIgb3IgXCJuZXh0IG1vbnRoXCIuXG4gICAqIE9ubHkgaW50ZXJuYXRpb25hbGl6ZXMgb24gcGxhdGZvcm1zIHRoYXQgc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubG9jYWwoKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0OyBpZiBvbWl0dGVkLCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgdW5pdC4gVXNlIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBvciBcImRheXNcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSBvdmVycmlkZSB0aGUgbnVtYmVyaW5nU3lzdGVtIG9mIHRoaXMgRGF0ZVRpbWUuIFRoZSBJbnRsIHN5c3RlbSBtYXkgY2hvb3NlIG5vdCB0byBob25vciB0aGlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcInRvbW9ycm93XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5zZXRMb2NhbGUoXCJlc1wiKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcIlwibWHDsWFuYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRlbWFpblwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICovXG4gIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKFxuICAgICAgb3B0aW9ucy5iYXNlIHx8IERhdGVUaW1lLmZyb21PYmplY3QoeyB6b25lOiB0aGlzLnpvbmUgfSksXG4gICAgICB0aGlzLFxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgIG51bWVyaWM6IFwiYXV0b1wiLFxuICAgICAgICB1bml0czogW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCJdLFxuICAgICAgICBjYWxlbmRhcnk6IHRydWVcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1pbiBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWluaW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1pbiBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWluKC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBpID0+IGkudmFsdWVPZigpLCBNYXRoLm1pbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cbiAgc3RhdGljIG1heCguLi5kYXRlVGltZXMpIHtcbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWF4IHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgaSA9PiBpLnZhbHVlT2YoKSwgTWF0aC5tYXgpO1xuICB9XG5cbiAgLy8gTUlTQ1xuXG4gIC8qKlxuICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsIH0gPSBvcHRpb25zLFxuICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgICBsb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgZGVmYXVsdFRvRU46IHRydWVcbiAgICAgIH0pO1xuICAgIHJldHVybiBleHBsYWluRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdEV4cGxhaW4gaW5zdGVhZFxuICAgKi9cbiAgc3RhdGljIGZyb21TdHJpbmdFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBGT1JNQVQgUFJFU0VUU1xuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlIDEwLzE0LzE5ODNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9TSE9SVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFX1NIT1JUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9NRUQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9NRUQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9GVUxMKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVfRlVMTDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0hVR0UoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURV9IVUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfU0lNUExFKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfU0lNUExFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfV0lUSF9MT05HX09GRlNFVCgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5USU1FX1dJVEhfTE9OR19PRkZTRVQ7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9TSU1QTEUoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLlRJTUVfMjRfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX01FRDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgMTQgT2N0IDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSgpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9NRURfV0lUSF9XRUVLREFZO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0ZVTEwoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfRlVMTDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gRm9ybWF0cy5EQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0hVR0UoKSB7XG4gICAgcmV0dXJuIEZvcm1hdHMuREFURVRJTUVfSFVHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmlkYXksIE9jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTKCkge1xuICAgIHJldHVybiBGb3JtYXRzLkRBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyaWVuZGx5RGF0ZVRpbWUoZGF0ZVRpbWVpc2gpIHtcbiAgaWYgKERhdGVUaW1lLmlzRGF0ZVRpbWUoZGF0ZVRpbWVpc2gpKSB7XG4gICAgcmV0dXJuIGRhdGVUaW1laXNoO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIGRhdGVUaW1laXNoLnZhbHVlT2YgJiYgaXNOdW1iZXIoZGF0ZVRpbWVpc2gudmFsdWVPZigpKSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tSlNEYXRlKGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiB0eXBlb2YgZGF0ZVRpbWVpc2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdChkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgYFVua25vd24gZGF0ZXRpbWUgYXJndW1lbnQ6ICR7ZGF0ZVRpbWVpc2h9LCBvZiB0eXBlICR7dHlwZW9mIGRhdGVUaW1laXNofWBcbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9