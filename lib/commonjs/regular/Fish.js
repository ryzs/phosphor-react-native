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
  className: "fish__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 76a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm48.72 67.64c-19.37 34.9-55.44 53.76-107.24 56.1l-22 51.41A8 8 0 0 1 80.1 256h-.51a8 8 0 0 1-7.19-5.78l-14.8-51.83-51.8-14.83a8 8 0 0 1-1-15.05l51.41-22c2.35-51.78 21.21-87.84 56.09-107.22 24.75-13.74 52.74-15.84 71.88-15.18 18.64.64 36 4.27 38.86 6a8 8 0 0 1 2.83 2.83c1.69 2.85 5.33 20.21 6 38.85.68 19.1-1.41 47.1-15.15 71.85Zm-55.18 29a52.11 52.11 0 0 1-33.4-44.78 52.09 52.09 0 0 1-44.77-33.39q-10.45 23.79-11.3 57.59a8 8 0 0 1-4.85 7.17l-35.39 15.14 34.45 9.86a8 8 0 0 1 5.49 5.5l9.84 34.44 15.16-35.4a8 8 0 0 1 7.17-4.84q33.77-.81 57.6-11.29Zm50.88-129.07c-14.15-3-64.1-11-100.3 14.75a81.21 81.21 0 0 0-16 15.07 36 36 0 0 0 39.35 38.44 8 8 0 0 1 8.73 8.73 36 36 0 0 0 38.47 39.34 80.81 80.81 0 0 0 15-16c25.75-36.17 17.75-86.16 14.75-100.33Z"
}));
var _default = exports.default = Fish;