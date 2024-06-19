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
const PersonSimpleSwim = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-swim-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M144 72a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm66.89 112.19c-31.83 26.39-53.72 14.51-79.07.74-26.61-14.44-56.76-30.81-96.93 2.49a8 8 0 1 0 10.22 12.31c31.83-26.39 53.72-14.5 79.07-.74 15.11 8.2 31.35 17 49.93 17 14.14 0 29.64-5.11 47-19.5a8 8 0 0 0-10.22-12.32Zm-176-36.76a8 8 0 1 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74 15.11 8.2 31.35 17 49.93 17 14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31 75.79 75.79 0 0 1-19.28 12.06l-53.84-53.82A103.34 103.34 0 0 0 64.24 72H40a8 8 0 0 0 0 16h24.24a87.66 87.66 0 0 1 41.88 10.56l-29.63 29.61c-12.67 1.19-26.42 6.67-41.6 19.25Z"
}));
var _default = exports.default = PersonSimpleSwim;