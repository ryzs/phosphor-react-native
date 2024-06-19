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
const Link = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "link-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236 88.12a50.44 50.44 0 0 1-14.81 34.31l-34.75 34.74A50.33 50.33 0 0 1 150.62 172h-.05A50.63 50.63 0 0 1 100 120a4 4 0 0 1 4-3.89h.11a4 4 0 0 1 3.89 4.11A42.64 42.64 0 0 0 150.58 164a42.32 42.32 0 0 0 30.14-12.49l34.75-34.74a42.63 42.63 0 1 0-60.29-60.28l-11 11a4 4 0 0 1-5.66-5.65l11-11A50.64 50.64 0 0 1 236 88.12ZM111.78 188.49l-11 11A42.33 42.33 0 0 1 70.6 212a42.63 42.63 0 0 1-30.11-72.77l34.75-34.74A42.63 42.63 0 0 1 148 135.82a4 4 0 0 0 8 .23 50.64 50.64 0 0 0-86.45-37.22L34.8 133.57A50.63 50.63 0 0 0 70.56 220a50.33 50.33 0 0 0 35.81-14.83l11-11a4 4 0 1 0-5.65-5.66Z"
}));
var _default = exports.default = Link;