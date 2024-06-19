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
  className: "panorama-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244.18 48.15a19.82 19.82 0 0 0-17.32-3.46l-3.49.94C204.74 50.65 170.08 60 128 60s-76.74-9.35-95.37-14.37l-3.49-.94A20 20 0 0 0 4 64v128a20 20 0 0 0 19.94 20 20.42 20.42 0 0 0 5.23-.69l3.19-.87C51 205.39 85.7 196 128 196s77 9.4 95.64 14.45l3.19.87A20 20 0 0 0 252 192V64a19.85 19.85 0 0 0-7.82-15.85ZM128 84c44 0 81.14-9.69 100-14.77v107.85l-51.23-51.22a20 20 0 0 0-28.28 0L131.31 143l-41.17-41.14a20 20 0 0 0-28.28 0L28 135.71V69.23C46.86 74.31 84 84 128 84Zm20.28 76 14.35-14.35 33.46 33.46c-10.09-2-21.52-3.93-33.94-5.25ZM28 186.76v-17.11l48-48L126.35 172c-43.23.24-79.61 9.7-98.35 14.76ZM184 108a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z"
}));
var _default = exports.default = Panorama;