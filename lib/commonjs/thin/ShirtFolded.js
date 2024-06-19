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
const ShirtFolded = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shirt-folded-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 44h-22.34l-14.83-14.83A4 4 0 0 0 160 28H96a4 4 0 0 0-2.83 1.17L78.34 44H56a12 12 0 0 0-12 12v152a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm-72 28.79L103.47 36h49.06Zm32.62-34.51L172 49.66V104a4 4 0 0 1-2.3 3.63 3.93 3.93 0 0 1-4.21-.51l-32.2-27.82ZM84 49.66l11.38-11.38 27.33 41-32.17 27.8A4 4 0 0 1 84 104ZM52 208V56a4 4 0 0 1 4-4h20v52a11.89 11.89 0 0 0 6.91 10.87A12.08 12.08 0 0 0 88 116a11.88 11.88 0 0 0 7.65-2.8h.06L124 88.74V212H56a4 4 0 0 1-4-4Zm152 0a4 4 0 0 1-4 4h-68V88.74l28.32 24.46A11.9 11.9 0 0 0 168 116a12.08 12.08 0 0 0 5.12-1.15A11.89 11.89 0 0 0 180 104V52h20a4 4 0 0 1 4 4Z"
}));
var _default = exports.default = ShirtFolded;