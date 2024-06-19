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
  className: "person-simple-snowboard__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M164 80a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm54.25 72.32-136-40a8 8 0 1 0-4.52 15.35l40.85 12L85.07 150l-44.73-13a25.18 25.18 0 1 0-14.13 48.34L183.65 231a25.88 25.88 0 0 0 7.14 1 25.17 25.17 0 0 0 7-49.36l-50.89-14.75 19.75-29.44a8 8 0 0 0-4.42-12.14l-35.33-10.23 7.78-11.67 79.07 23.26a8 8 0 0 0 4.51-15.35ZM200 206.81a9.07 9.07 0 0 1-3.67 7.3 9.27 9.27 0 0 1-8.22 1.5L30.67 170a9.24 9.24 0 0 1-6.67-8.8 9.06 9.06 0 0 1 3.66-7.3 9.26 9.26 0 0 1 8.23-1.5L193.33 198a9.23 9.23 0 0 1 6.67 8.81Zm-52.75-68.18-16.49 24.59-29.58-8.58 16.4-24.6Z"
}));
var _default = exports.default = PersonSimpleSnowboard;