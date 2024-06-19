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
const OpenAiLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "open-ai-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M219.68 114.91A52 52 0 0 0 162.49 42a52 52 0 0 0-91.67 13.15 52 52 0 0 0-34.5 85.94A52 52 0 0 0 70 213.16 52.33 52.33 0 0 0 83.59 215a51.66 51.66 0 0 0 9.93-1 52 52 0 0 0 91.66-13.13 52 52 0 0 0 34.5-85.94Zm-35.8-64.34a44 44 0 0 1 29.66 58.36 51.84 51.84 0 0 0-7-4.89L162 78.35a4 4 0 0 0-4 0l-50 28.87V79.5L150.5 55a43.69 43.69 0 0 1 33.38-4.43Zm-35.88 89-20 11.54-20-11.54v-23.1l20-11.54 20 11.54ZM76 72a44 44 0 0 1 78.25-27.62A52.08 52.08 0 0 0 146.5 48L102 73.73a4 4 0 0 0-2 3.46v57.74l-24-13.86ZM37.4 84.93a43.72 43.72 0 0 1 31.31-21.47A52.26 52.26 0 0 0 68 72v51.38a4 4 0 0 0 2 3.46l50 28.87-24 13.86L53.5 145a44 44 0 0 1-16.1-60.07Zm34.72 120.5a44 44 0 0 1-29.66-58.36 51.84 51.84 0 0 0 7 4.89L94 177.65a4 4 0 0 0 4 0l50-28.87v27.72L105.5 201a43.69 43.69 0 0 1-33.38 4.43ZM180 184a44 44 0 0 1-78.26 27.61 51.66 51.66 0 0 0 7.76-3.61l44.5-25.73a4 4 0 0 0 2-3.46v-57.74l24 13.86Zm38.6-12.93a43.72 43.72 0 0 1-31.31 21.47A52.26 52.26 0 0 0 188 184v-51.38a4 4 0 0 0-2-3.46l-50-28.87 24-13.86L202.5 111a44 44 0 0 1 16.1 60.07Z"
}));
var _default = exports.default = OpenAiLogo;