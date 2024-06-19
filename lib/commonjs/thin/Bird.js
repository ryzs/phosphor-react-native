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
const Bird = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bird-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M172 68a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm64 12a4 4 0 0 1-1.78 3.33L212 98.14V120a100.11 100.11 0 0 1-100 100H24a12 12 0 0 1-9.37-19.5L100 98.08V76.89c0-31.22 25-56.74 55.72-56.89h.28a55.94 55.94 0 0 1 53.79 40.39l24.43 16.28A4 4 0 0 1 236 80Zm-11.21 0-20.68-13.78a4.08 4.08 0 0 1-1.65-2.33A48 48 0 0 0 156 28h-.24C129.43 28.13 108 50.06 108 76.89v22.63a4 4 0 0 1-.93 2.56L20.84 205.56A4 4 0 0 0 24 212h28.79l72.14-86.56a4 4 0 0 1 6.14 5.12L63.21 212H112a92.1 92.1 0 0 0 92-92V96a4 4 0 0 1 1.78-3.33Z"
}));
var _default = exports.default = Bird;