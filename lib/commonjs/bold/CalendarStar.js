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
const CalendarStar = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "calendar-star-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M208 28h-20v-4a12 12 0 0 0-24 0v4H92v-4a12 12 0 0 0-24 0v4H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h16a12 12 0 0 0 24 0h72a12 12 0 0 0 24 0h16Zm-27.08-94.35-27.42-2.12L139 83.25a12 12 0 0 0-22 0l-10.5 24.28-27.42 2.12a12 12 0 0 0-6.72 21.22l20.58 17-6.25 25.26a12 12 0 0 0 17.73 13.22L128 172.46l23.58 13.88a12 12 0 0 0 17.73-13.22l-6.25-25.26 20.58-17a12 12 0 0 0-6.72-21.22Zm-35 24.51a12 12 0 0 0-4 12.13l1.21 4.89-5.07-3a12.06 12.06 0 0 0-12.18 0l-5.07 3 1.21-4.89a12 12 0 0 0-4-12.13l-3.47-2.87 5-.39a12 12 0 0 0 10.09-7.21l2.33-5.4 2.33 5.4a12 12 0 0 0 10.09 7.21l5 .39Z"
}));
var _default = exports.default = CalendarStar;