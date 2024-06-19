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
const Tire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tire-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M168 174c14.44 0 22-23.14 22-46s-7.56-46-22-46-22 23.14-22 46 7.56 46 22 46Zm0-80c2.57 0 10 11.69 10 34s-7.43 34-10 34-10-11.69-10-34 7.43-34 10-34Zm64 124h-40.29c18.18-17 30.29-50.57 30.29-90 0-57.2-25.48-102-58-102H92c-32.52 0-58 44.8-58 102s25.48 102 58 102h140a6 6 0 0 0 0-12Zm-22-90c0 48.79-21.07 90-46 90s-46-41.21-46-90 21.07-90 46-90 46 41.21 46 90Zm-164 0c0-2.86.08-5.69.22-8.5L80 95.37l26.5 18.93c-.33 4.47-.5 9-.5 13.7a175.72 175.72 0 0 0 4 38.08l-26.55-19a6 6 0 0 0-7 0l-26.1 18.64A160.24 160.24 0 0 1 46 128Zm46-90h44.29c-13.8 12.92-24.09 35.35-28.29 62.65L83.49 83.12a6 6 0 0 0-7 0l-28.7 20.51C53.37 66.24 71.36 38 92 38Zm0 180c-15.58 0-29.64-16.08-38-40l26-18.58 35.53 25.39c5.22 13.92 12.34 25.35 20.76 33.24Z"
}));
var _default = exports.default = Tire;