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
const Screwdriver = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "screwdriver-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208.49 47.49a12 12 0 0 1 0 17l-52 52a12 12 0 0 1-17-17l52-52a12 12 0 0 1 17 0ZM252 58.41a54.09 54.09 0 0 1-15.94 38.49l-53.23 53.23a19.86 19.86 0 0 1-14.14 5.87H156v12.83a20.13 20.13 0 0 1-4.06 12.08 11.45 11.45 0 0 1-1.08 1.23l-8 8a20 20 0 0 1-28.28 0L98.7 174.26l-74.21 74.22a12 12 0 1 1-17-17l74.22-74.22-15.85-15.85a20 20 0 0 1 0-28.29l8-8A11.56 11.56 0 0 1 75.1 104a20.08 20.08 0 0 1 12.07-4H100V87.3a19.89 19.89 0 0 1 5.86-14.15l53.23-53.23A54.43 54.43 0 0 1 252 58.41Zm-24 0a30.43 30.43 0 0 0-51.94-21.52L124 89v15a20 20 0 0 1-20 20H88.94l-3.28 3.28 21.52 21.53 21.53 21.52 3.28-3.28V152a20 20 0 0 1 20-20h15l52.06-52.07A30.24 30.24 0 0 0 228 58.41Z"
}));
var _default = exports.default = Screwdriver;