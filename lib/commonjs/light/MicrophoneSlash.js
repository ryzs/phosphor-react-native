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
const MicrophoneSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "microphone-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m212.44 220-160-176a6 6 0 0 0-8.88 8L82 94.32V128a46 46 0 0 0 67.56 40.64l13.75 15.12A65.26 65.26 0 0 1 128 194a66.08 66.08 0 0 1-66-66 6 6 0 0 0-12 0 78.09 78.09 0 0 0 72 77.75V240a6 6 0 0 0 12 0v-34.23a76.93 76.93 0 0 0 37.48-13L203.56 228a6 6 0 0 0 8.88-8.08ZM128 162a34 34 0 0 1-34-34v-20.48l47.12 51.84A33.82 33.82 0 0 1 128 162Zm59.32-5a65.38 65.38 0 0 0 6.68-29 6 6 0 0 1 12 0 77.33 77.33 0 0 1-7.9 34.25 6 6 0 1 1-10.78-5.25ZM85.8 45.67A46 46 0 0 1 174 64v64a45.17 45.17 0 0 1-.25 4.81 6 6 0 0 1-6 5.38h-.63a6 6 0 0 1-5.34-6.59 35.41 35.41 0 0 0 .22-3.6V64a34 34 0 0 0-65.2-13.55 6 6 0 0 1-11-4.78Z"
}));
var _default = exports.default = MicrophoneSlash;