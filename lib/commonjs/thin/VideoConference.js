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
const VideoConference = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "video-conference-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 12v68h-56V52h52a4 4 0 0 1 4 4ZM36 200V56a4 4 0 0 1 4-4h116v152H40a4 4 0 0 1-4-4Zm180 4h-52v-72h56v68a4 4 0 0 1-4 4ZM184 88a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm16 80a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-68.13-1a36.2 36.2 0 0 0-20.43-23.67 28 28 0 1 0-30.88 0A36.28 36.28 0 0 0 60.13 167a4 4 0 0 0 2.87 4.87 3.87 3.87 0 0 0 1 .13 4 4 0 0 0 3.87-3C71 157 83.05 148 96 148s25.06 9 28.13 21a4 4 0 1 0 7.74-2ZM76 120a20 20 0 1 1 20 20 20 20 0 0 1-20-20Z"
}));
var _default = exports.default = VideoConference;