"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* GENERATED FILE */
const Fish = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fish-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M166 76a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm49 66.67c-19.17 34.54-55.11 53.08-106.85 55.14l-22.53 52.55A6 6 0 0 1 80.1 254h-.38a6 6 0 0 1-5.39-4.34l-15.11-52.89-52.87-15.14a6 6 0 0 1-.71-11.29l52.56-22.49C60.28 96.13 78.81 60.2 113.33 41 159.56 15.34 219 30 222.09 31.78a6 6 0 0 1 2.12 2.11c1.79 3.05 16.46 62.49-9.21 108.76Zm-48 29.64A50.06 50.06 0 0 1 130 126a50.09 50.09 0 0 1-46.29-37c-8.46 16.93-13 38-13.63 63a6 6 0 0 1-3.64 5.38l-40.56 17.36 39.85 11.41a6 6 0 0 1 4.12 4.12l11.38 39.85 17.39-40.56a6 6 0 0 1 5.37-3.64c25.01-.59 46.06-5.16 63.01-13.63Zm51-94.53a171.1 171.1 0 0 0-3.86-35.92A170.78 170.78 0 0 0 178.25 38H178c-18.52 0-45 3.22-66.67 18.47a83.53 83.53 0 0 0-17.16 16.09 38 38 0 0 0 41.47 41.25 6 6 0 0 1 6.54 6.55 38 38 0 0 0 41.28 41.46 83.13 83.13 0 0 0 16.07-17.07C214.87 123 218.05 96.31 218 77.76Z"
}));
var _default = exports.default = Fish;