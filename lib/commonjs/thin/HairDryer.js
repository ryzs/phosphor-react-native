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
const HairDryer = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hair-dryer-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M196 88a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm-28 20a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm-5.15 104a12 12 0 0 0 10.92-7l32-70.39A60 60 0 0 0 168 28a4.89 4.89 0 0 0-.66.05L30 50.94a12 12 0 0 0-10 11.84v50.44a12 12 0 0 0 10 11.84l102 17V200a12 12 0 0 0 12 12h4v4a36 36 0 0 0 36 36h16a4 4 0 0 0 0-8h-16a28 28 0 0 1-28-28v-4ZM28 113.22V62.78a4 4 0 0 1 3.34-4L168.33 36a52 52 0 0 1 0 104l-137-22.83a4 4 0 0 1-3.33-3.95ZM140 200v-56.61l27.34 4.61a4.89 4.89 0 0 0 .66.05 59.62 59.62 0 0 0 25.46-5.69l-27 59.34a4 4 0 0 1-3.64 2.35H144a4 4 0 0 1-4-4.05Z"
}));
var _default = exports.default = HairDryer;