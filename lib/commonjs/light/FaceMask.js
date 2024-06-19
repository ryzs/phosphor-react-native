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
const FaceMask = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "face-mask-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M174 104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6Zm-6 26H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12Zm86-26v24a30 30 0 0 1-30 30h-6.5c-6.81 15.88-21.28 29.6-42.82 40.37a189 189 0 0 1-45.61 15.53 5.77 5.77 0 0 1-2.14 0 189 189 0 0 1-45.61-15.53C59.78 187.6 45.31 173.88 38.5 158H32a30 30 0 0 1-30-30v-24a30 30 0 0 1 30-30h2.35a14 14 0 0 1 8.87-10.07l80-29.09a14 14 0 0 1 9.56 0l80 29.09A14 14 0 0 1 221.65 74H224a30 30 0 0 1 30 30ZM34.89 146a57 57 0 0 1-.89-10V86h-2a18 18 0 0 0-18 18v24a18 18 0 0 0 18 18ZM210 136V77.09a2 2 0 0 0-1.32-1.88l-80-29.09a2 2 0 0 0-1.36 0l-80 29.09A2 2 0 0 0 46 77.09V136c0 20.7 13.61 38 40.46 51.52A180.79 180.79 0 0 0 128 201.88a181 181 0 0 0 41.54-14.36C196.39 174 210 156.7 210 136Zm32-32a18 18 0 0 0-18-18h-2v50a57 57 0 0 1-.89 10H224a18 18 0 0 0 18-18Z"
}));
var _default = exports.default = FaceMask;