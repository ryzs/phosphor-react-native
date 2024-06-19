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
const Globe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24Zm78.36 64h-35.65a135.28 135.28 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm9.64 40a87.61 87.61 0 0 1-3.33 24h-38.51a157.44 157.44 0 0 0 0-48h38.51a87.61 87.61 0 0 1 3.33 24Zm-88-85a115.27 115.27 0 0 1 26 45h-52a115.11 115.11 0 0 1 26-45Zm-26 125h52a115.11 115.11 0 0 1-26 45 115.27 115.27 0 0 1-26-45Zm-3.9-16a140.84 140.84 0 0 1 0-48h59.88a140.84 140.84 0 0 1 0 48Zm50.35 61.6a135.28 135.28 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-58 45.6Z"
}));
var _default = exports.default = Globe;