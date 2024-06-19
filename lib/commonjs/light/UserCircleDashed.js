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
  className: "user-circle-dashed-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M98.19 36.54a6 6 0 0 1 4.31-7.31 102 102 0 0 1 51 0 6 6 0 1 1-3 11.61 90 90 0 0 0-45 0 6 6 0 0 1-7.31-4.3Zm-64.3 71.54a5.88 5.88 0 0 0 1.6.22 6 6 0 0 0 5.78-4.4A90 90 0 0 1 63.78 65a6 6 0 1 0-8.56-8.41A102.12 102.12 0 0 0 29.7 100.7a6 6 0 0 0 4.19 7.38ZM150.5 215.15a90 90 0 0 1-45 0 6 6 0 1 0-3 11.61 102 102 0 0 0 51 0 6 6 0 0 0-3-11.62Zm64.22-111.24a6 6 0 0 0 5.78 4.4 5.88 5.88 0 0 0 1.6-.22 6 6 0 0 0 4.18-7.38 102 102 0 0 0-25.49-44.18 6 6 0 0 0-8.55 8.41 90.11 90.11 0 0 1 22.48 38.97Zm11.58 51.39a101.75 101.75 0 0 1-30.08 48.53 6 6 0 0 1-9.37-1.74 66 66 0 0 0-117.7 0 6 6 0 0 1-4.26 3.18 5.74 5.74 0 0 1-1.09.1 6 6 0 0 1-4-1.54 101.74 101.74 0 0 1-30.1-48.53 6 6 0 1 1 11.56-3.21 89.79 89.79 0 0 0 21.2 37.59 77.56 77.56 0 0 1 40-31.43 46 46 0 1 1 51 0 77.56 77.56 0 0 1 40 31.43 89.7 89.7 0 0 0 21.2-37.58 6 6 0 1 1 11.56 3.2ZM128 154a34 34 0 1 0-34-34 34 34 0 0 0 34 34Z"
}));
var _default = exports.default = UserCircleDashed;