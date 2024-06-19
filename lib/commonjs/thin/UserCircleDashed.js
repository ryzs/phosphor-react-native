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
  className: "user-circle-dashed-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M100.13 36a4 4 0 0 1 2.87-4.83 100.09 100.09 0 0 1 50 0 4 4 0 0 1-1 7.88 4.36 4.36 0 0 1-1-.13 92 92 0 0 0-46 0 4 4 0 0 1-4.87-2.92Zm-65.71 70.16a4 4 0 0 0 4.92-2.79 91.92 91.92 0 0 1 23-39.82 4 4 0 0 0-5.71-5.61 100.15 100.15 0 0 0-25 43.3 4 4 0 0 0 2.79 4.92ZM151 217.09a92 92 0 0 1-46 0 4 4 0 0 0-2 7.75 100 100 0 0 0 50 0 4 4 0 1 0-2-7.74Zm65.65-113.71a4 4 0 1 0 7.7-2.14 100.08 100.08 0 0 0-25-43.31 4 4 0 1 0-5.71 5.61 92 92 0 0 1 23.01 39.84Zm7.73 51.39a99.77 99.77 0 0 1-29.5 47.57 4 4 0 0 1-6.24-1.16 68 68 0 0 0-121.28 0 4 4 0 0 1-2.83 2.12 3.61 3.61 0 0 1-.73.07 4 4 0 0 1-2.68-1 99.8 99.8 0 0 1-29.5-47.58 4 4 0 1 1 7.71-2.13 91.89 91.89 0 0 0 23.47 40.25 75.66 75.66 0 0 1 44.54-34.08 44 44 0 1 1 41.32 0 75.66 75.66 0 0 1 44.54 34.08 91.83 91.83 0 0 0 23.47-40.28 4 4 0 0 1 7.71 2.14ZM128 156a36 36 0 1 0-36-36 36 36 0 0 0 36 36Z"
}));
var _default = exports.default = UserCircleDashed;