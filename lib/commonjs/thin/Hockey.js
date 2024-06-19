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
const Hockey = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hockey-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 156h-94.95l-94-110.59A4 4 0 1 0 29 50.59l133.56 157.18a12 12 0 0 0 9.14 4.23H224a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12Zm-55.35 46.59L135.85 164H196v40h-24.3a4 4 0 0 1-3.05-1.41ZM228 200a4 4 0 0 1-4 4h-20v-40h20a4 4 0 0 1 4 4Zm-124-16.94-16.6 19.53a4 4 0 0 1-3 1.41H60v-40h25.2a4 4 0 0 0 0-8H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h52.3a12 12 0 0 0 9.14-4.23l16.61-19.53a4 4 0 0 0-6.1-5.18ZM28 200v-32a4 4 0 0 1 4-4h20v40H32a4 4 0 0 1-4-4Zm125.41-68.95a4 4 0 0 1-.46-5.64l68-80a4 4 0 1 1 6.1 5.18l-68 80a4 4 0 0 1-5.64.46Z"
}));
var _default = exports.default = Hockey;