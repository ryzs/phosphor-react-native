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
const DiscoBall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "disco-ball-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M118 66.23V16a6 6 0 0 0-12 0v50.23a86 86 0 1 0 12 0ZM185.74 146h-35.87c-1.3-32.59-13-54.15-22.36-66.35A74.15 74.15 0 0 1 185.74 146Zm-99.6 12h51.72c-1.63 37.69-18.33 58.46-25.86 66-7.54-7.55-24.23-28.33-25.86-66Zm0-12c1.63-37.69 18.33-58.46 25.86-66 7.54 7.51 24.23 28.29 25.86 66Zm10.35-66.35c-9.38 12.2-21.06 33.76-22.36 66.35H38.26a74.15 74.15 0 0 1 58.23-66.35ZM38.26 158h35.87c1.3 32.59 13 54.15 22.36 66.35A74.15 74.15 0 0 1 38.26 158Zm89.25 66.35c9.38-12.2 21.06-33.76 22.36-66.35h35.87a74.15 74.15 0 0 1-58.23 66.35ZM254 88a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6Zm-46-42h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1 0-12h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12Z"
}));
var _default = exports.default = DiscoBall;