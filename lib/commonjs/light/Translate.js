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
const Translate = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "translate-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m245.37 213.32-56-112a6 6 0 0 0-10.74 0l-22.3 44.6A90 90 0 0 1 105 127.19 101.73 101.73 0 0 0 133.82 62H160a6 6 0 0 0 0-12h-58V32a6 6 0 0 0-12 0v18H32a6 6 0 0 0 0 12h89.79A89.71 89.71 0 0 1 96 119.23 89.81 89.81 0 0 1 75.11 86a6 6 0 1 0-11.31 4A101.66 101.66 0 0 0 87 127.2 89.56 89.56 0 0 1 32 146a6 6 0 0 0 0 12 101.55 101.55 0 0 0 64-22.63 102.11 102.11 0 0 0 54.53 22.17l-27.89 55.78a6 6 0 0 0 10.74 5.36L147.71 190h72.58l14.34 28.68A6 6 0 0 0 240 222a5.87 5.87 0 0 0 2.68-.64 6 6 0 0 0 2.69-8.04ZM153.71 178 184 117.42 214.29 178Z"
}));
var _default = exports.default = Translate;