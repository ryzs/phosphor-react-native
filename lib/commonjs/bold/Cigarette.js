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
const Cigarette = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cigarette-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 124H32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20ZM36 148h40v24H36Zm184 24H100v-24h120ZM201.67 55.89c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 216.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84 26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43Zm-48 0c7.53-12.71 7.12-19.63 5.07-21.1A12 12 0 0 1 168.67 13a25.9 25.9 0 0 1 13.8 15.79c3.6 10.92.86 24.17-8.14 39.38-7.53 12.7-7.12 19.63-5.07 21.1a12 12 0 0 1-9.93 21.84 26 26 0 0 1-13.8-15.79c-3.6-10.98-.86-24.23 8.14-39.43Z"
}));
var _default = exports.default = Cigarette;