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
const Pipe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pipe-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 108h-28V52h28a4 4 0 0 0 0-8h-28.7a12 12 0 0 0-11.3-8h-16a12 12 0 0 0-11.3 8H144A100.11 100.11 0 0 0 44 144v20.7a12 12 0 0 0-8 11.3v16a12 12 0 0 0 8 11.3V232a4 4 0 0 0 8 0v-28h56v28a4 4 0 0 0 8 0v-28.7a12 12 0 0 0 8-11.3v-16a12 12 0 0 0-8-11.3V144a28 28 0 0 1 28-28h20.7a12 12 0 0 0 11.3 8h16a12 12 0 0 0 11.3-8H232a4 4 0 0 0 0-8Zm-116 84a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-16a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm-8-48v20H52v-20a92.1 92.1 0 0 1 92-92h20v56h-20a36 36 0 0 0-36 36Zm84-28h-16a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v64a4 4 0 0 1-4 4Z"
}));
var _default = exports.default = Pipe;