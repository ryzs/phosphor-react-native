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
const ChatsCircle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chats-circle-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M227.79 186.39a76 76 0 0 0-61-110.07 76 76 0 1 0-138.58 62.07L20.5 164.6a12 12 0 0 0 14.9 14.9l26.21-7.71a75.93 75.93 0 0 0 27.6 7.9 76 76 0 0 0 105.18 40.1l26.21 7.71a12 12 0 0 0 14.9-14.9ZM60.9 163.66l-27.76 8.17a4 4 0 0 1-5-5l8.17-27.76a4.07 4.07 0 0 0-.31-3A68 68 0 1 1 63.92 164a4.06 4.06 0 0 0-3.02-.34Zm165.92 55.16a4 4 0 0 1-4 1l-27.76-8.17a4.07 4.07 0 0 0-3 .31A68 68 0 0 1 98 180a76 76 0 0 0 71.5-95.28 68 68 0 0 1 50.5 99.36 4.07 4.07 0 0 0-.31 3l8.17 27.76a4 4 0 0 1-1.04 3.98Z"
}));
var _default = exports.default = ChatsCircle;