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
const Boat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "boat-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m220.43 112.48-14.43-4.8V56a14 14 0 0 0-14-14h-58V24a6 6 0 0 0-12 0v18H64a14 14 0 0 0-14 14v51.68l-14.43 4.8A14 14 0 0 0 26 125.77V152c0 60 96.44 84.79 100.54 85.82a6 6 0 0 0 2.92 0 235.44 235.44 0 0 0 49.4-19.54C212.32 200.15 230 177.24 230 152v-26.23a14 14 0 0 0-9.57-13.29ZM62 56a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v47.68l-64.1-21.37a6 6 0 0 0-3.8 0L62 103.68Zm156 96c0 47.1-78.28 70.54-90 73.79-11.73-3.25-90-26.69-90-73.79v-26.23a2 2 0 0 1 1.37-1.9L122 96.32V168a6 6 0 0 0 12 0V96.32l82.63 27.55a2 2 0 0 1 1.37 1.9Z"
}));
var _default = exports.default = Boat;