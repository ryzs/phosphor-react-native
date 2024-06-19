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
const HandsClapping = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hands-clapping-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M162.21 24V8a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0Zm34.93 15.25a6 6 0 0 0 8.26-2l8-13.11a6 6 0 0 0-10.26-6.25l-8 13.11a6 6 0 0 0 2 8.25Zm44.57 14.91a6 6 0 0 0-7.57-3.87l-15 4.85a6 6 0 0 0 1.84 11.72 5.91 5.91 0 0 0 1.84-.3l15.06-4.84a6 6 0 0 0 3.83-7.56Zm-26.49 44.42a78.2 78.2 0 0 1-10.35 92c-.36 1.87-.76 3.74-1.26 5.6A78.18 78.18 0 0 1 60.49 215l-35.27-61a24 24 0 0 1 20.85-36l-4.61-8a24 24 0 0 1 20.82-36L60 70a24 24 0 0 1 36.11-30.46A24.05 24.05 0 0 1 138.56 38l13.89 24a24 24 0 0 1 41.62 0ZM107.33 56 134 102a24 24 0 0 1 20.8-12l-26.65-46a12 12 0 1 0-20.82 12Zm-37 8 8.08 14a24 24 0 0 1 20.82-12l-8.06-14a12 12 0 0 0-22 2.91 11.9 11.9 0 0 0 1.2 9.09Zm115 79-20.23-35a12 12 0 0 0-21.1 11.27L156.56 141a6 6 0 0 1-10.4 6l-36.51-63a12 12 0 0 0-20.82 12l26 45a6 6 0 0 1-10.4 6L72.68 92a12 12 0 0 0-20.81 12l35.23 61a6 6 0 0 1-10.41 6l-20.25-35a12 12 0 1 0-20.81 12l35.27 61A66.13 66.13 0 0 0 192 193.09a65.53 65.53 0 0 0-6.6-50.09Zm19.41-38.42L183.66 68a12 12 0 0 0-16.42-4.39A12 12 0 0 0 162.82 80l33 57a77.7 77.7 0 0 1 10.14 31.54 66.25 66.25 0 0 0-1.15-63.96Z"
}));
var _default = exports.default = HandsClapping;