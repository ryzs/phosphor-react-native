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
const UserCircleDashed = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "user-circle-dashed__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M96.26 37a8 8 0 0 1 5.74-9.71 104.11 104.11 0 0 1 52 0 8 8 0 0 1-2 15.75 8.15 8.15 0 0 1-2-.26 88 88 0 0 0-44 0A8 8 0 0 1 96.26 37Zm-62.91 73a8 8 0 0 0 9.85-5.57 87.88 87.88 0 0 1 22-38.09 8 8 0 0 0-11.4-11.2 103.92 103.92 0 0 0-26 45 8 8 0 0 0 5.55 9.86ZM150 213.22a88 88 0 0 1-44 0 8 8 0 0 0-4 15.49 104.11 104.11 0 0 0 52 0 8 8 0 0 0-4-15.49Zm62.8-108.77a8 8 0 0 0 15.42-4.28 104 104 0 0 0-26-45 8 8 0 1 0-11.41 11.21 88.14 88.14 0 0 1 21.98 38.07Zm15.44 51.39a103.68 103.68 0 0 1-30.68 49.47 8 8 0 0 1-12.49-2.31 64 64 0 0 0-114.14 0 8 8 0 0 1-12.48 2.32 103.74 103.74 0 0 1-30.68-49.49 8 8 0 0 1 15.42-4.27 87.58 87.58 0 0 0 19 34.88 79.57 79.57 0 0 1 36.1-28.77 48 48 0 1 1 59.38 0 79.57 79.57 0 0 1 36.1 28.77 87.58 87.58 0 0 0 19-34.88 8 8 0 1 1 15.42 4.28ZM128 152a32 32 0 1 0-32-32 32 32 0 0 0 32 32Z"
}));
var _default = exports.default = UserCircleDashed;