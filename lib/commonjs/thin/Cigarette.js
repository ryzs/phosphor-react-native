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
  className: "cigarette-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M224 132H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12ZM28 176v-32a4 4 0 0 1 4-4h52v40H32a4 4 0 0 1-4-4Zm200 0a4 4 0 0 1-4 4H92v-40h132a4 4 0 0 1 4 4ZM204.51 62c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51 4 4 0 0 1-2-5.26 4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11 3 9 .53 20.66-7.29 34.57-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 208 108a4.09 4.09 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11-2.98-9.06-.52-20.65 7.3-34.65Zm-40 0c8.22-14.61 8.21-23.23 6.75-27.9a10.82 10.82 0 0 0-4.94-6.51 4 4 0 0 1-2-5.26 4 4 0 0 1 5.3-2c.66.29 6.52 3.09 9.16 11 3 9 .53 20.66-7.29 34.57-8.22 14.61-8.21 23.24-6.75 27.91a10.74 10.74 0 0 0 4.94 6.5A4 4 0 0 1 168 108a4.09 4.09 0 0 1-1.63-.35c-.66-.3-6.52-3.09-9.16-11-2.98-9.06-.52-20.65 7.3-34.65Z"
}));
var _default = exports.default = Cigarette;