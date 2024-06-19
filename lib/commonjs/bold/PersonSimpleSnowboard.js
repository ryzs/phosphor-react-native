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
const PersonSimpleSnowboard = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-snowboard-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 80a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-40a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm51.38 68.48-136-40a12 12 0 0 0-6.77 23L112.25 102l-28.64 43L44 133.27a30.79 30.79 0 0 0-27.38 4.94A31.18 31.18 0 0 0 4 163.39a31.53 31.53 0 0 0 22.43 30.11L180 238.71a31.23 31.23 0 0 0 40-30.11 31.52 31.52 0 0 0-22.44-30.11l-39.74-11.7L170 148.68a12 12 0 0 0-6.62-18.21l-34.56-10 7.58-11.38 76.25 22.43a12 12 0 1 0 6.77-23ZM196 208.6a7.36 7.36 0 0 1-3 6 6.92 6.92 0 0 1-6.23 1.13L33.21 170.48A7.46 7.46 0 0 1 31 157.42a7 7 0 0 1 6.23-1.13l153.59 45.22a7.39 7.39 0 0 1 5.18 7.09ZM140.88 149l-7.2 10.73-26-7.64 7.1-10.64Z"
}));
var _default = exports.default = PersonSimpleSnowboard;