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
const Tire = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tire__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M149.26 159.26C155.09 173.82 163.5 176 168 176s12.91-2.18 18.74-16.74c3.39-8.48 5.26-19.58 5.26-31.26s-1.87-22.78-5.26-31.26C180.91 82.18 172.5 80 168 80s-12.91 2.18-18.74 16.74c-3.39 8.48-5.26 19.58-5.26 31.26s1.87 22.78 5.26 31.26ZM168 96.2c2.62 2.06 8 13 8 31.8s-5.38 29.74-8 31.8c-2.62-2.06-8-13-8-31.8s5.38-29.74 8-31.8ZM232 216h-35.59c16.71-18.27 27.59-50.53 27.59-88 0-58.32-26.35-104-60-104H92c-33.65 0-60 45.68-60 104s26.35 104 60 104h140a8 8 0 0 0 0-16ZM193.74 63.93C202.93 80.91 208 103.67 208 128s-5.07 47.09-14.26 64.07C185.38 207.5 174.82 216 164 216s-21.38-8.5-29.74-23.93C125.07 175.09 120 152.33 120 128s5.07-47.09 14.26-64.07C142.62 48.5 153.18 40 164 40s21.38 8.5 29.74 23.93ZM48 128c0-2.5.07-5 .17-7.44L80 97.83l24.43 17.45c-.28 4.16-.43 8.41-.43 12.72a179.89 179.89 0 0 0 3.07 33.5l-22.42-16a8 8 0 0 0-9.3 0l-23.74 17A161 161 0 0 1 48 128Zm14.26-64.07C70.62 48.5 81.18 40 92 40h39.59c-11.9 13-20.84 33.12-25 57.16L84.65 81.49a8 8 0 0 0-9.3 0L50.49 99.25C52.85 86 56.83 74 62.26 63.93Zm0 128.14a100.08 100.08 0 0 1-5.94-13.32L80 161.83l33.94 24.24c4.6 12 10.6 22.22 17.65 29.93H92c-10.82 0-21.38-8.5-29.74-23.93Z"
}));
var _default = exports.default = Tire;