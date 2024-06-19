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
const Panorama = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "panorama-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240.53 52.9a13.88 13.88 0 0 0-12.12-2.42l-3.48.94C206 56.51 170.87 66 128 66s-78-9.49-96.93-14.58l-3.48-.94A14 14 0 0 0 10 64v128a13.95 13.95 0 0 0 17.61 13.52l3.18-.85C49.7 199.53 84.91 190 128 190s78.3 9.53 97.21 14.66l3.18.85A14 14 0 0 0 246 192V64a13.93 13.93 0 0 0-5.47-11.1ZM22.78 62.42A2 2 0 0 1 24 62a2.06 2.06 0 0 1 .52.08l3.44.92C47.37 68.24 83.54 78 128 78s80.63-9.76 100.06-15l3.44-.92A2 2 0 0 1 234 64v123.57l-61.47-61.47a14 14 0 0 0-19.8 0l-21.42 21.41L85.9 102.1a14 14 0 0 0-19.8 0L22 146.2V64a2 2 0 0 1 .78-1.58ZM220.41 191a400.39 400.39 0 0 0-56.52-10.86L139.8 156l21.41-21.41a2 2 0 0 1 2.83 0Zm-192.76 2.07-3.15.86A2 2 0 0 1 22 192v-28.83l52.58-52.58a2 2 0 0 1 2.84 0l67.91 67.91c-5.63-.32-11.42-.5-17.33-.5-44.69 0-82.28 10.18-100.35 15.07ZM194 108a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z"
}));
var _default = exports.default = Panorama;