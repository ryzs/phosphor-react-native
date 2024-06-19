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
const BowlSteam = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "bowl-steam__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 112H32a8 8 0 0 0-8 8 104.35 104.35 0 0 0 56 92.28V216a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-3.72A104.35 104.35 0 0 0 232 120a8 8 0 0 0-8-8Zm-59.34 88a8 8 0 0 0-4.66 7.27V216H96v-8.71a8 8 0 0 0-4.66-7.29 88.29 88.29 0 0 1-51-72h175.29a88.29 88.29 0 0 1-50.97 72ZM81.77 55c5.35-6.66 6.67-11.16 6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.11 8.11 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76 2.46 8.07-.55 17.45-8.94 27.89-5.35 6.66-6.67 11.16-6.12 13.14.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.11 8.11 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76-2.46-8.07.55-17.45 8.94-27.88Zm40 0c5.35-6.66 6.67-11.16 6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 128 24a8.11 8.11 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76 2.46 8.07-.55 17.45-8.94 27.89-5.35 6.66-6.67 11.16-6.12 13.14.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 128 96a8.11 8.11 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76-2.46-8.07.55-17.45 8.94-27.88Zm40 0c5.35-6.66 6.67-11.16 6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 168 24a8.11 8.11 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76 2.46 8.07-.55 17.45-8.94 27.89-5.35 6.66-6.67 11.16-6.12 13.14.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 168 96a8.11 8.11 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76-2.46-8.07.55-17.45 8.94-27.88Z"
}));
var _default = exports.default = BowlSteam;