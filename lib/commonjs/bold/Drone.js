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
const Drone = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drone-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M42.06 109.94a48 48 0 1 1 67.88-67.88A12 12 0 0 1 93 59a24 24 0 1 0-34 34 12 12 0 1 1-17 17ZM163 59a24 24 0 1 1 34 34 12 12 0 1 0 17 17 48 48 0 1 0-67.88-67.88 12 12 0 0 0 17 17Zm33.94 87a12 12 0 0 0 0 17A24 24 0 1 1 163 197a12 12 0 0 0-17 17 48 48 0 1 0 67.88-67.88 12 12 0 0 0-16.88-.06ZM93 197a24 24 0 1 1-34-34 12 12 0 0 0-17-17 48 48 0 1 0 67.88 67.88 12 12 0 1 0-17-17Zm71-88v38l24.49 24.48a12 12 0 0 1-17 17L147 164h-38l-24.51 24.49a12 12 0 0 1-17-17L92 147v-38L67.51 84.49a12 12 0 0 1 17-17L109 92h38l24.48-24.49a12 12 0 0 1 17 17Zm-48 31h24v-24h-24Z"
}));
var _default = exports.default = Drone;