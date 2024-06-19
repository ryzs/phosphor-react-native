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
const SpeakerSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "speaker-slash-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M213.92 210.62a8 8 0 1 1-11.84 10.76L160 175.09v48.6a8.29 8.29 0 0 1-3.91 7.18 8 8 0 0 1-9-.56l-65.55-51a4 4 0 0 1-1.54-3.13V87.09L42.08 45.38a8 8 0 1 1 11.84-10.76Zm-27.21-55.46a8 8 0 0 0 11.29-.7 40 40 0 0 0 0-52.88 8 8 0 1 0-12 10.57 24 24 0 0 1 0 31.72 8 8 0 0 0 .71 11.29Zm40.92-80.49a8 8 0 1 0-11.92 10.66 64 64 0 0 1 0 85.34 8 8 0 1 0 11.92 10.66 80 80 0 0 0 0-106.66ZM153 119.87a4 4 0 0 0 7-2.7V32.25a8.27 8.27 0 0 0-2.88-6.4 8 8 0 0 0-10-.16l-43.29 33.64a4 4 0 0 0-.5 5.85ZM60 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h28a4 4 0 0 0 4-4V84a4 4 0 0 0-4-4Z"
}));
var _default = exports.default = SpeakerSlash;