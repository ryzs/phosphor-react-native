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
  className: "person-simple-ski-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 84a24 24 0 1 0-24-24 24 24 0 0 0 24 24Zm0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16ZM38.88 83.84l112 32.65 6.33 6.33A4 4 0 0 0 160 124h40a4 4 0 0 0 0-8h-38.34l-30.83-30.83a4 4 0 0 0-5.66 0l-12 12-72.05-21a4 4 0 0 0-2.24 7.68ZM128 93.65l11.07 11.08-17.14-5Zm106.22 107.27a65.8 65.8 0 0 1-55 8.43L22.88 163.83a4 4 0 1 1 2.24-7.68l78.27 22.79 33-33-49.49-14.1a4 4 0 1 1 2.2-7.69l56 16a4 4 0 0 1 1.73 6.67l-34.68 34.68 69.28 20.17a57.81 57.81 0 0 0 48.35-7.41 4 4 0 0 1 4.44 6.66Z"
}));
var _default = exports.default = PersonSimpleSki;