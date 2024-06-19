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
const PersonSimpleSwim = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "person-simple-swim-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m132.14 108.12 57.45 57.46C147.85 178.63 119.12 134.49 80 136l38.94-38.95a96 96 0 0 1 13.2 11.07ZM176 48a24 24 0 1 0 24 24 24 24 0 0 0-24-24Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M176 104a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm46.16 129.24a8 8 0 0 1-1 11.26c-17.36 14.39-32.86 19.5-47 19.5-18.58 0-34.82-8.82-49.93-17-25.35-13.76-47.24-25.65-79.07.74a8 8 0 1 1-10.22-12.31c40.17-33.29 70.32-16.93 96.93-2.49 25.35 13.77 47.24 25.65 79.07-.74a8 8 0 0 1 11.22 1.04ZM34.89 147.42a8 8 0 1 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74 15.11 8.2 31.35 17 49.93 17 14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31 75.79 75.79 0 0 1-19.28 12.06l-53.84-53.82A103.34 103.34 0 0 0 64.24 72H40a8 8 0 0 0 0 16h24.24a87.66 87.66 0 0 1 41.88 10.56l-29.63 29.61c-12.67 1.18-26.42 6.67-41.6 19.25Zm91.57-33.67 46.13 46.12c-14-.43-26.88-7.39-40.77-14.93-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26a87.14 87.14 0 0 1 6.8 6.12Z"
}));
var _default = exports.default = PersonSimpleSwim;