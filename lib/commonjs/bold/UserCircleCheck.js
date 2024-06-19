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
const UserCircleCheck = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-circle-check-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M220.69 100.17a12 12 0 0 0-9.85 13.83 85 85 0 0 1 1.16 14 83.57 83.57 0 0 1-18 51.94 83.48 83.48 0 0 0-29-23.42 52 52 0 1 0-74 0 83.48 83.48 0 0 0-29 23.42A83.94 83.94 0 0 1 128 44a85 85 0 0 1 14 1.16 12 12 0 0 0 4-23.67A108.1 108.1 0 0 0 20 128a108 108 0 0 0 216 0 109.19 109.19 0 0 0-1.49-18 12 12 0 0 0-13.82-9.83ZM100 120a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm-20.43 76.57a60 60 0 0 1 96.86 0 83.72 83.72 0 0 1-96.86 0ZM240.49 48.49l-32 32a12 12 0 0 1-17 0l-16-16a12 12 0 0 1 17-17L200 55l23.51-23.52a12 12 0 1 1 17 17Z"
}));
var _default = exports.default = UserCircleCheck;