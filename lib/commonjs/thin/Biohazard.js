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
const Biohazard = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "biohazard-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M183 108.08a60.22 60.22 0 0 0-4.94-9.08 56 56 0 0 0-24.21-74.73 4 4 0 1 0-3.7 7.09 48 48 0 0 1 22.37 60.49 59.91 59.91 0 0 0-89.05 0 48 48 0 0 1 22.38-60.5 4 4 0 0 0-3.7-7.1A56 56 0 0 0 77.93 99a60.85 60.85 0 0 0-4.93 9.08A56.07 56.07 0 0 0 20 164a4 4 0 0 0 8 0 48.06 48.06 0 0 1 42.08-47.62 60 60 0 0 0 45.75 74.38 48 48 0 0 1-65.67 13.7 4 4 0 1 0-4.32 6.73 56 56 0 0 0 78.69-19.3c1.15.07 2.3.11 3.47.11s2.32 0 3.47-.11a56 56 0 0 0 78.69 19.3 4 4 0 1 0-4.32-6.73 48 48 0 0 1-65.67-13.7 60 60 0 0 0 45.75-74.38A48.06 48.06 0 0 1 228 164a4 4 0 0 0 8 0 56.07 56.07 0 0 0-53-55.92Zm-8.75.21c-.79.08-1.56.19-2.34.3.5-.63 1-1.28 1.46-1.93.32.54.63 1.08.89 1.63ZM128 80a51.93 51.93 0 0 1 40.57 19.52 48 48 0 0 1-81.15 0A51.94 51.94 0 0 1 128 80Zm8.07 49.33a56.11 56.11 0 0 0-8.07 13.92 55.87 55.87 0 0 0-8.07-13.91 56.43 56.43 0 0 0 8.06.58 55.29 55.29 0 0 0 8.08-.59Zm-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62c.46.65.94 1.33 1.44 1.92ZM76 132a51.78 51.78 0 0 1 2.51-15.93 48 48 0 0 1 41.39 67.3A52.08 52.08 0 0 1 76 132Zm60.1 51.37a48 48 0 0 1 41.39-67.3 52 52 0 0 1-41.39 67.3Z"
}));
var _default = exports.default = Biohazard;