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
const GlobeSimple = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-simple-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm83.13 96h-31.57a144.3 144.3 0 0 0-21.35-66.36A84.22 84.22 0 0 1 211.13 116ZM128 207c-9.36-10.81-24.46-33.13-27.45-67h54.94a119.74 119.74 0 0 1-17.11 52.77A108.61 108.61 0 0 1 128 207Zm-27.45-91a119.74 119.74 0 0 1 17.11-52.77A108.61 108.61 0 0 1 128 49c9.36 10.81 24.46 33.13 27.45 67Zm-2.76-66.36A144.3 144.3 0 0 0 76.44 116H44.87a84.22 84.22 0 0 1 52.92-66.36ZM44.87 140h31.57a144.3 144.3 0 0 0 21.35 66.36A84.22 84.22 0 0 1 44.87 140Zm113.34 66.36A144.3 144.3 0 0 0 179.56 140h31.57a84.22 84.22 0 0 1-52.92 66.36Z"
}));
var _default = exports.default = GlobeSimple;