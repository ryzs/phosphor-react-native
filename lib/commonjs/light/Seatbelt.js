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
const Seatbelt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "seatbelt-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 110a42 42 0 1 0-42-42 42 42 0 0 0 42 42Zm0-72a30 30 0 1 1-30 30 30 30 0 0 1 30-30Zm78 186a6 6 0 0 1-6 6H56a6 6 0 0 1-4-10.5l100.58-88.75a66 66 0 0 0-89.78 50.72 6 6 0 0 1-5.91 5.05 6.2 6.2 0 0 1-1-.07 6 6 0 0 1-5-6.88A78 78 0 0 1 162.49 122L188 99.5a6 6 0 1 1 7.94 9L71.87 218H200a6 6 0 0 1 6 6Zm-13.92-76.48A77.53 77.53 0 0 1 206 192a6 6 0 0 1-12 0 65.62 65.62 0 0 0-11.77-37.63 6 6 0 0 1 9.85-6.85Z"
}));
var _default = exports.default = Seatbelt;