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
const StandardDefinition = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "standard-definition-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 128a32 32 0 0 1-32 32h-8V96h8a32 32 0 0 1 32 32Zm40-72v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-112 92c0-19.88-19.92-25.35-34.47-29.34-12.06-3.31-20-5.84-20-10.66 0-6.73 8.1-12 18.44-12 8 0 14.85 3.13 17.42 8a8 8 0 1 0 14.13-7.51C110.16 86.31 98.07 80 84 80c-19.64 0-34.44 12-34.44 28 0 17.38 17.6 22.21 31.74 26.09 16 4.39 22.7 7.3 22.7 13.91 0 5.68-8.21 12-20 12s-20-6.32-20-12a8 8 0 0 0-16 0c0 15.7 15.81 28 36 28s36-12.3 36-28Zm88-20a48.05 48.05 0 0 0-48-48h-16a8 8 0 0 0-8 8v80a8 8 0 0 0 8 8h16a48.05 48.05 0 0 0 48-48Z"
}));
var _default = exports.default = StandardDefinition;