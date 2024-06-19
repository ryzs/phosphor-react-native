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
const Asclepius = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "asclepius-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M136 128v72h11.62A12.25 12.25 0 0 0 160 188.53a12 12 0 0 0-5.93-10.87 4.08 4.08 0 0 1-2.06-3.49v-8.79a4 4 0 0 1 5.25-3.81A28.06 28.06 0 0 1 176 187.71c.16 15.56-13 28.29-28.59 28.29H136v16a8 8 0 0 1-16 0v-16H96a8 8 0 0 1-8-8.53 8.17 8.17 0 0 1 8.27-7.47H120v-72h-15.54c-8.6 0-16 6.6-16.44 15.19a16 16 0 0 0 12.87 16.51 3.94 3.94 0 0 1 3.11 3.89V172a4 4 0 0 1-4 4 36 36 0 0 1-36-36.87c.47-19.65 17-35.13 36.68-35.13H120V24a8 8 0 0 1 16 0v80h32a16 16 0 0 0 16-16.81C183.56 78.6 176.14 72 167.54 72H156a4 4 0 0 1-4-4V44a4 4 0 0 1 4-4h15.22c24.62 0 45.2 20.15 44.77 44.76A44 44 0 0 1 172 128ZM92.66 72H100a4 4 0 0 0 4-4V44a4 4 0 0 0-4-4H64a40 40 0 0 0-40 40v8a8 8 0 0 0 8 8h24a40 40 0 0 0 36.66-24Z"
}));
var _default = exports.default = Asclepius;