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
const Crown = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "crown-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M246 80a26 26 0 1 0-46.6 15.84l-29.83 36.72-26-59.76a26 26 0 1 0-31.16 0l-26 59.76L56.6 95.84a26 26 0 1 0-22.36 10.09L49 194.3A14 14 0 0 0 62.78 206h130.44A14 14 0 0 0 207 194.3l14.73-88.37A26 26 0 0 0 246 80ZM128 38a14 14 0 1 1-14 14 14 14 0 0 1 14-14ZM22 80a14 14 0 1 1 14 14 14 14 0 0 1-14-14Zm173.2 112.33a2 2 0 0 1-2 1.67H62.78a2 2 0 0 1-2-1.67L46.08 104l1.22-.55 36 44.36A6 6 0 0 0 88 150a5.52 5.52 0 0 0 .81-.06 6 6 0 0 0 4.69-3.55l29.92-68.8a25.79 25.79 0 0 0 9.16 0l29.92 68.8a6 6 0 0 0 4.69 3.55 5.52 5.52 0 0 0 .81.06 6 6 0 0 0 4.66-2.22l36-44.36 1.22.55ZM220 94a14 14 0 1 1 14-14 14 14 0 0 1-14 14Z"
}));
var _default = exports.default = Crown;