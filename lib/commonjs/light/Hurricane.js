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
  className: "hurricane-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 98a30 30 0 1 0 30 30 30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm27.91-99.37 9.89-37.09a6 6 0 0 0-7.06-7.41 193.94 193.94 0 0 0-58 24.82C62.32 51.66 42 86.6 42 128a86.1 86.1 0 0 0 58.09 81.37l-9.89 37.08a6 6 0 0 0 7.06 7.42 193.94 193.94 0 0 0 58-24.82C193.68 204.34 214 169.4 214 128a86.09 86.09 0 0 0-58.09-81.37Zm-6.86 172.13a187.63 187.63 0 0 1-44.55 20.67l8.68-32.57a6 6 0 0 0-4.26-7.34A74.06 74.06 0 0 1 54 128c0-37.53 17.82-68.07 53-90.77a187.93 187.93 0 0 1 44.5-20.66l-8.68 32.57a6 6 0 0 0 4.26 7.34A74.06 74.06 0 0 1 202 128c0 37.53-17.82 68.07-52.95 90.76Z"
}));
var _default = exports.default = Hurricane;