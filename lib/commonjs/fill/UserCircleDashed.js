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
  className: "user-circle-dashed-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M96.26 37a8 8 0 0 1 5.74-9.71 104.11 104.11 0 0 1 52 0 8 8 0 0 1-2 15.75 8.15 8.15 0 0 1-2-.26 88 88 0 0 0-44 0A8 8 0 0 1 96.26 37Zm-62.91 73a8 8 0 0 0 9.85-5.57 88 88 0 0 1 22-38.09 8 8 0 0 0-11.41-11.2 104.05 104.05 0 0 0-26 45 8 8 0 0 0 5.56 9.86Zm179.44-5.56a8 8 0 0 0 15.42-4.28 104 104 0 0 0-26-45 8 8 0 1 0-11.41 11.22 88 88 0 0 1 21.99 38.07Zm9.87 41.56a8 8 0 0 0-9.85 5.58 87.61 87.61 0 0 1-19 34.83 79.75 79.75 0 0 0-21.81-21.3 4 4 0 0 0-4.83.31 59.81 59.81 0 0 1-78.27 0 4 4 0 0 0-4.84-.31 79.52 79.52 0 0 0-22 21.12 87.7 87.7 0 0 1-18.83-34.67 8 8 0 0 0-15.42 4.28 104.07 104.07 0 0 0 200.46 0 8 8 0 0 0-5.61-9.84ZM128 164a44 44 0 1 0-44-44 44.05 44.05 0 0 0 44 44Z"
}));
var _default = exports.default = UserCircleDashed;