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
const StarFour = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "star-four-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M228.81 114.89 164.5 91.5l-23.39-64.31a13.95 13.95 0 0 0-26.22 0L91.5 91.5l-64.31 23.39a13.95 13.95 0 0 0 0 26.22L91.5 164.5l23.39 64.31a13.95 13.95 0 0 0 26.22 0l23.39-64.31 64.31-23.39a13.95 13.95 0 0 0 0-26.22Zm-4.1 15-66.94 24.34a6 6 0 0 0-3.59 3.59l-24.34 66.94a2 2 0 0 1-3.68 0l-24.34-66.94a6 6 0 0 0-3.59-3.59l-66.94-24.39a2 2 0 0 1 0-3.68l66.94-24.34a6 6 0 0 0 3.59-3.59l24.34-66.94a2 2 0 0 1 3.68 0l24.34 66.94a6 6 0 0 0 3.59 3.59l66.94 24.34a2 2 0 0 1 0 3.68Z"
}));
var _default = exports.default = StarFour;