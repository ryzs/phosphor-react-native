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
const Drone = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "drone-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188.24 67.76a6 6 0 0 0-8.48 0L149.52 98h-43L76.24 67.76a6 6 0 0 0-8.48 8.48L98 106.48v43l-30.24 30.28a6 6 0 1 0 8.48 8.48L106.48 158h43l30.24 30.24a6 6 0 0 0 8.48-8.48L158 149.52v-43l30.24-30.24a6 6 0 0 0 0-8.52ZM110 110h36v36h-36Zm30.39-48A42 42 0 1 1 194 115.61a6.09 6.09 0 0 1-2 .34 6 6 0 0 1-2-11.66A30 30 0 1 0 151.71 66a6 6 0 1 1-11.32-4ZM222 180a42 42 0 0 1-81.61 14 6 6 0 0 1 11.32-4A30 30 0 1 0 190 151.71a6 6 0 0 1 4-11.32A42.07 42.07 0 0 1 222 180Zm-106.39 14A42 42 0 1 1 62 140.39a6 6 0 1 1 4 11.32A30 30 0 1 0 104.29 190a6 6 0 0 1 11.32 4ZM34 76a42 42 0 0 1 81.61-14 6 6 0 1 1-11.32 4A30 30 0 1 0 66 104.29 6 6 0 0 1 64 116a6.09 6.09 0 0 1-2-.34A42.07 42.07 0 0 1 34 76Z"
}));
var _default = exports.default = Drone;