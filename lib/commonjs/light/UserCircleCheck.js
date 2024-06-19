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
  className: "user-circle-check-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M221.68 106.08a6 6 0 0 0-4.92 6.91A91.66 91.66 0 0 1 218 128a89.65 89.65 0 0 1-24.49 61.64 77.53 77.53 0 0 0-40-31.38 46 46 0 1 0-51 0 77.53 77.53 0 0 0-40 31.38A89.95 89.95 0 0 1 128 38a91.57 91.57 0 0 1 15 1.24 6 6 0 1 0 2-11.83 101.9 101.9 0 1 0 83.6 83.6 6 6 0 0 0-6.92-4.93ZM94 120a34 34 0 1 1 34 34 34 34 0 0 1-34-34Zm-22.56 78a66 66 0 0 1 113.12 0 89.8 89.8 0 0 1-113.12 0Zm164.8-153.76-32 32a6 6 0 0 1-8.48 0l-16-16a6 6 0 0 1 8.48-8.48L200 63.51l27.76-27.75a6 6 0 0 1 8.48 8.48Z"
}));
var _default = exports.default = UserCircleCheck;