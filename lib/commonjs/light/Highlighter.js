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
const Highlighter = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "highlighter-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M252.24 107.76a6 6 0 0 0-8.48 0l-50.35 50.34a2 2 0 0 1-2.82 0L105.9 73.41a2 2 0 0 1 0-2.82l50.34-50.35a6 6 0 0 0-8.48-8.48L97.41 62.1a14 14 0 0 0-1.71 17.71L73.41 102.1a14 14 0 0 0 0 19.8l6.1 6.1-59.75 59.76a6 6 0 0 0 2.34 9.93l72 24a6 6 0 0 0 6.14-1.45L136 184.49l6.1 6.1a14 14 0 0 0 19.8 0l22.28-22.29a14 14 0 0 0 17.72-1.71l50.34-50.35a6 6 0 0 0 0-8.48ZM94.38 209.14l-59.27-19.76L88 136.49 127.51 176Zm59-27a2 2 0 0 1-2.82 0l-10.35-10.34-48-48-10.31-10.39a2 2 0 0 1 0-2.82l22.1-22.1L175.51 160Z"
}));
var _default = exports.default = Highlighter;