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
const Sparkle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sparkle-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M196.89 130.94 144.4 111.6l-19.34-52.49a13.92 13.92 0 0 0-26.12 0L79.6 111.6l-52.49 19.34a13.92 13.92 0 0 0 0 26.12L79.6 176.4l19.34 52.49a13.92 13.92 0 0 0 26.12 0l19.34-52.49 52.49-19.34a13.92 13.92 0 0 0 0-26.12Zm-4.15 14.86-55.08 20.3a6 6 0 0 0-3.56 3.56l-20.3 55.08a1.92 1.92 0 0 1-3.6 0l-20.3-55.08a6 6 0 0 0-3.56-3.56l-55.08-20.3a1.92 1.92 0 0 1 0-3.6l55.08-20.3a6 6 0 0 0 3.56-3.56l20.3-55.08a1.92 1.92 0 0 1 3.6 0l20.3 55.08a6 6 0 0 0 3.56 3.56l55.08 20.3a1.92 1.92 0 0 1 0 3.6ZM146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6Zm100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6Z"
}));
var _default = exports.default = Sparkle;