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
const Cigarette = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cigarette-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M88 136v48H32a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 128H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16ZM32 144h48v32H32Zm192 32H96v-32h128v32ZM201 60.08c8-14.23 7.42-21.71 6.36-24.91a7.79 7.79 0 0 0-2.64-3.86 8 8 0 1 1 6.5-14.62 22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79-8 14.23-7.42 21.72-6.36 24.92a7.79 7.79 0 0 0 2.64 3.85 8 8 0 1 1-6.5 14.62 22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79Zm-40 0c8-14.23 7.42-21.71 6.36-24.91a7.79 7.79 0 0 0-2.64-3.86 8 8 0 1 1 6.5-14.62 22.57 22.57 0 0 1 11.32 13.44c3.36 10.14.81 22.85-7.6 37.79-8 14.23-7.42 21.72-6.36 24.92a7.79 7.79 0 0 0 2.64 3.85 8 8 0 1 1-6.5 14.62 22.53 22.53 0 0 1-11.32-13.44c-3.33-10.14-.78-22.87 7.6-37.79Z"
}));
var _default = exports.default = Cigarette;