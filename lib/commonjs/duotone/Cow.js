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
const Cow = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cow-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 192a32 32 0 0 1-32 32H80a32 32 0 0 1-32-32 32 32 0 0 1 32-32h96a32 32 0 0 1 32 32ZM64 104a32 32 0 0 1 32-32H63.22a48 48 0 0 0-47.07 38.53A8 8 0 0 0 24 120h40Zm175.85 6.53A48 48 0 0 0 192.78 72H160a32 32 0 0 1 32 32v16h40a8 8 0 0 0 7.85-9.47Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M104 192a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm72-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Zm-76-72a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm56 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm88.39 10.12A16 16 0 0 1 232 128h-32v32a40 40 0 0 1-24 72H80a40 40 0 0 1-24-72v-32H24a16 16 0 0 1-15.69-19 56.13 56.13 0 0 1 54.91-45h1.64A55.83 55.83 0 0 1 48 24a8 8 0 0 1 16 0 40 40 0 0 0 40 40h48a40 40 0 0 0 40-40 8 8 0 0 1 16 0 55.83 55.83 0 0 1-16.86 40h1.64a56.13 56.13 0 0 1 54.91 45 15.82 15.82 0 0 1-3.3 13.12ZM56 112v-8a39.81 39.81 0 0 1 8-24h-.8A40.09 40.09 0 0 0 24 112Zm144 80a24 24 0 0 0-24-24H80a24 24 0 0 0 0 48h96a24 24 0 0 0 24-24Zm-16-39.2V104a24 24 0 0 0-24-24H96a24 24 0 0 0-24 24v48.8a40.57 40.57 0 0 1 8-.8h96a40.57 40.57 0 0 1 8 .8Zm48-40.8a40.08 40.08 0 0 0-39.2-32h-.8a39.81 39.81 0 0 1 8 24v8Z"
}));
var _default = exports.default = Cow;