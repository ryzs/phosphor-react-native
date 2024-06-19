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
const Hurricane = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hurricane-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm25.49-100.06L163.87 9a4 4 0 0 0-4.71-4.94 191.41 191.41 0 0 0-57.32 24.54C64 53 44 87.32 44 128a84.08 84.08 0 0 0 58.51 80.06L92.13 247a4 4 0 0 0 4.71 4.94 191.28 191.28 0 0 0 57.32-24.55C192 203 212 168.68 212 128a84.08 84.08 0 0 0-58.51-80.06ZM150 220.51a190.13 190.13 0 0 1-48.39 21.87l9.61-36a4 4 0 0 0-2.84-4.9A76.06 76.06 0 0 1 52 128c0-38.29 18.16-69.41 54-92.51a190.13 190.13 0 0 1 48.39-21.87l-9.61 36a4 4 0 0 0 2.84 4.9A76.06 76.06 0 0 1 204 128c0 38.29-18.16 69.41-54 92.51Z"
}));
var _default = exports.default = Hurricane;