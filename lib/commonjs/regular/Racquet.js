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
const Racquet = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "racquet__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M230 26.05C202-1.88 151.53 3.16 117.4 37.3c-31.79 31.79-38.33 77.77-16.51 106.49l-29.56 29.56-.68-.68a16 16 0 0 0-22.64 0L20.69 200a16 16 0 0 0 0 22.64l12.69 12.69a16 16 0 0 0 22.63 0L83.34 208a16 16 0 0 0 0-22.63l-.69-.69 29.56-29.56c11.29 8.58 25.24 12.79 40 12.79 22.72 0 47.25-10 66.54-29.3C252.83 104.47 257.88 54 230 26.05ZM44.7 224 32 211.31 59.33 184l6.33 6.34 6.34 6.33Zm179.53-120h-24.17V72h32a72.45 72.45 0 0 1-7.83 32ZM136 149.61A44.15 44.15 0 0 1 106.39 120H136ZM104 104a72.24 72.24 0 0 1 7.86-32H136v32Zm48-32h32v32h-32Zm77.67-16h-29.61V26.28a44.23 44.23 0 0 1 29.66 29.66Zm-45.82-32h.16v32h-32V31.76a72.47 72.47 0 0 1 31.89-7.86ZM136 42.06v13.88h-13.84a89.72 89.72 0 0 1 6.56-7.32 93.17 93.17 0 0 1 7.28-6.56Zm16 109.92V120h32v24.16a72.24 72.24 0 0 1-31.95 7.84Zm48-18.14V120h14a91.62 91.62 0 0 1-6.56 7.32 89.64 89.64 0 0 1-7.38 6.52Z"
}));
var _default = exports.default = Racquet;