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
const HandWaving = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-waving-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216.71 102 199.4 72a24 24 0 0 0-43.57 4.52L134.74 40a24 24 0 0 0-43.69 4.9A24 24 0 0 0 51.61 72l5.31 9.19a24 24 0 0 0-25.71 35.47l40 69.32a83.4 83.4 0 0 0 51 39.14 84.45 84.45 0 0 0 21.88 2.9 84 84 0 0 0 72.6-126Zm.67 61.67A76 76 0 0 1 78.16 182l-40-69.32a16 16 0 0 1 27.71-16L85.09 130a4 4 0 0 0 6.91-4L58.54 68a16 16 0 1 1 27.71-16l31.17 54a4 4 0 1 0 6.93-4L100.1 60a16 16 0 0 1 27.72-16l35 60.63a44 44 0 0 0-7.28 57.61 4 4 0 1 0 6.62-4.49 36 36 0 0 1 8.22-49 4 4 0 0 0 1.07-5.2L164.76 92a16 16 0 1 1 27.71-16l17.31 30a75.52 75.52 0 0 1 7.6 57.65ZM188.12 32.74A4 4 0 0 1 193 29.9 55.65 55.65 0 0 1 227.11 56l.33.58A4 4 0 0 1 226 62a4 4 0 0 1-5.47-1.46l-.33-.57A47.62 47.62 0 0 0 191 37.63a4 4 0 0 1-2.88-4.89ZM77.75 234.48a4 4 0 0 1-3.14 1.52 4 4 0 0 1-2.47-.86A115.55 115.55 0 0 1 43.53 202a4 4 0 1 1 6.92-4 107.72 107.72 0 0 0 26.64 30.86 4 4 0 0 1 .66 5.62Z"
}));
var _default = exports.default = HandWaving;