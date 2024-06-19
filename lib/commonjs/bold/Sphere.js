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
const Sphere = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "sphere-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm84 107.86c-.56 1.41-5.7 7.11-22.88 12.33a157.26 157.26 0 0 1-17.57 4.15c.3-5.44.45-10.91.45-16.34 0-27.85-3.95-56.83-12.25-77.75A84.13 84.13 0 0 1 212 127.86ZM127.86 44c1.41.56 7.11 5.7 12.33 22.88 5 16.6 7.81 38.31 7.81 61.12 0 6.56-.24 13-.68 19.32-6.29.44-12.76.68-19.32.68-22.81 0-44.52-2.78-61.12-7.81C49.7 135 44.56 129.27 44 127.86A84.1 84.1 0 0 1 127.86 44ZM50.25 159.75C71.17 168.05 100.15 172 128 172c5.43 0 10.9-.15 16.34-.46a156.93 156.93 0 0 1-4.15 17.58C135 206.3 129.27 211.44 127.86 212a84.13 84.13 0 0 1-77.61-52.25Zm109.5 46c4.19-10.57 7.28-23.2 9.3-36.7 13.5-2 26.13-5.11 36.7-9.3a84.42 84.42 0 0 1-46 46Z"
}));
var _default = exports.default = Sphere;