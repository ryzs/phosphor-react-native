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
const PersonSimpleSki = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-ski-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 86a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14ZM38.32 85.76l111.47 32.51 6 6A6 6 0 0 0 160 126h40a6 6 0 0 0 0-12h-37.51l-30.25-30.25a6 6 0 0 0-8.48 0l-11.17 11.17-70.91-20.68a6 6 0 1 0-3.36 11.52ZM128 96.48l4.14 4.14-6.41-1.87Zm107.33 106.1a67.79 67.79 0 0 1-56.7 8.69L22.32 165.75a6 6 0 1 1 3.36-11.52l77.13 22.46L132.55 147l-46.2-13.2a6 6 0 0 1 3.3-11.54l56 16a6 6 0 0 1 2.59 10L116 180.52l66 19.23a55.79 55.79 0 0 0 46.68-7.15 6 6 0 1 1 6.66 10Z"
}));
var _default = exports.default = PersonSimpleSki;