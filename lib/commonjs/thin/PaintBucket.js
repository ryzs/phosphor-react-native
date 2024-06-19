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
const PaintBucket = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "paint-bucket-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M235.33 165.78a4 4 0 0 0-6.66 0C228 166.8 212 191 212 208a20 20 0 0 0 40 0c0-17-16-41.2-16.67-42.22ZM232 220a12 12 0 0 1-12-12c0-10.25 7.49-24.64 12-32.37 4.51 7.73 12 22.1 12 32.37a12 12 0 0 1-12 12Zm3.89-87.6a4 4 0 0 0-1.06-3.74L119.34 13.17a4 4 0 0 0-5.65 0L70.25 56.6 42.82 29.17a4 4 0 0 0-5.65 5.66L64.6 62.26 17.86 109a20 20 0 0 0 0 28.29l84.85 84.85a20 20 0 0 0 28.29 0L210.16 143l23.1-7.7a4 4 0 0 0 2.63-2.9Zm-29.15 3.29a4.06 4.06 0 0 0-1.57 1l-79.83 79.82a12 12 0 0 1-17 0l-84.83-84.88a12 12 0 0 1 0-17l46.74-46.71 34.2 34.2A24 24 0 0 0 141 133a24 24 0 0 0-30.86-36.51l-34.2-34.2 40.61-40.6 108.04 108.05Zm-94.05-31a16 16 0 1 1 0 22.64 16 16 0 0 1 0-22.64Z"
}));
var _default = exports.default = PaintBucket;