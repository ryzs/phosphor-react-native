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
  className: "bowl-steam-duotone__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 120a96 96 0 0 1-56 87.3v8.7a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-8.7A96 96 0 0 1 32 120Z",
  opacity: 0.2
}), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M81.77 55c5.35-6.66 6.67-11.16 6.12-13.14-.42-1.49-2.41-2.26-2.43-2.26A8 8 0 0 1 88 24a8.11 8.11 0 0 1 2.38.36c1 .31 9.91 3.33 12.79 12.76 2.46 8.07-.55 17.45-8.94 27.89-5.35 6.66-6.67 11.16-6.12 13.14.42 1.49 2.37 2.24 2.39 2.25A8 8 0 0 1 88 96a8.11 8.11 0 0 1-2.38-.36c-1-.31-9.91-3.33-12.79-12.76-2.46-8.07.55-17.45 8.94-27.88Zm31.06 27.89c2.88 9.43 11.79 12.45 12.79 12.76A8.11 8.11 0 0 0 128 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14 8.39-10.44 11.4-19.82 8.94-27.89-2.88-9.43-11.78-12.45-12.79-12.76A8.11 8.11 0 0 0 128 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14-8.39 10.44-11.4 19.82-8.94 27.89Zm40 0c2.88 9.43 11.79 12.45 12.79 12.76A8.11 8.11 0 0 0 168 96a8 8 0 0 0 2.5-15.6s-2-.76-2.39-2.25c-.55-2 .77-6.48 6.12-13.14 8.39-10.44 11.4-19.82 8.94-27.89-2.88-9.43-11.78-12.45-12.79-12.76A8.11 8.11 0 0 0 168 24a8 8 0 0 0-2.54 15.59s2 .77 2.43 2.26c.55 2-.77 6.48-6.12 13.14-8.39 10.44-11.4 19.82-8.94 27.89ZM232 120a104.35 104.35 0 0 1-56 92.28V216a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-3.72A104.35 104.35 0 0 1 24 120a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8Zm-16.37 8H40.37a88.29 88.29 0 0 0 51 72 8 8 0 0 1 4.63 7.29V216h64v-8.71a8 8 0 0 1 4.66-7.27A88.29 88.29 0 0 0 215.63 128Z"
}));
var _default = exports.default = BowlSteam;