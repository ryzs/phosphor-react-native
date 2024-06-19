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
const CigaretteSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cigarette-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M52.44 36a6 6 0 0 0-8.88 8l78.15 86H32a14 14 0 0 0-14 14v32a14 14 0 0 0 14 14h144.25l27.31 30a6 6 0 0 0 8.88-8.08ZM30 176v-32a2 2 0 0 1 2-2h50v36H32a2 2 0 0 1-2-2Zm64 2v-36h38.62l32.73 36Zm144-34v32a14 14 0 0 1-14 14h-1.84a6 6 0 1 1 0-12H224a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2h-45.48a6 6 0 1 1 0-12H224a14 14 0 0 1 14 14Zm-35.23-82.94c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 208 18a5.87 5.87 0 0 1 2.44.52 20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 208 110a5.87 5.87 0 0 1-2.44-.52 20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18Zm-40 0c7.81-13.88 7.91-21.91 6.62-26.2a9 9 0 0 0-3.93-5.42A6 6 0 0 1 168 18a5.87 5.87 0 0 1 2.44.52 20.42 20.42 0 0 1 10.23 12.24c3.18 9.58.68 21.75-7.44 36.18-7.81 13.88-7.91 21.91-6.62 26.2a8.94 8.94 0 0 0 3.88 5.4A6 6 0 0 1 168 110a5.87 5.87 0 0 1-2.44-.52 20.42 20.42 0 0 1-10.23-12.24c-3.18-9.58-.68-21.75 7.44-36.18Z"
}));
var _default = exports.default = CigaretteSlash;