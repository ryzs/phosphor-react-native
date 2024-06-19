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
const Globe = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm81.57 64h-40.38a132.58 132.58 0 0 0-25.73-50.67A90.29 90.29 0 0 1 209.57 90Zm8.43 38a89.7 89.7 0 0 1-3.83 26h-42.36a155.43 155.43 0 0 0 0-52h42.36a89.7 89.7 0 0 1 3.83 26Zm-90 87.83a110 110 0 0 1-15.19-19.45A124.24 124.24 0 0 1 99.35 166h57.3a124.24 124.24 0 0 1-13.46 30.38A110 110 0 0 1 128 215.83ZM96.45 154a139.18 139.18 0 0 1 0-52h63.1a139.18 139.18 0 0 1 0 52ZM38 128a89.7 89.7 0 0 1 3.83-26h42.36a155.43 155.43 0 0 0 0 52H41.83A89.7 89.7 0 0 1 38 128Zm90-87.83a110 110 0 0 1 15.19 19.45A124.24 124.24 0 0 1 156.65 90h-57.3a124.24 124.24 0 0 1 13.46-30.38A110 110 0 0 1 128 40.17Zm-15.46-.84A132.58 132.58 0 0 0 86.81 90H46.43a90.29 90.29 0 0 1 66.11-50.67ZM46.43 166h40.38a132.58 132.58 0 0 0 25.73 50.67A90.29 90.29 0 0 1 46.43 166Zm97 50.67A132.58 132.58 0 0 0 169.19 166h40.38a90.29 90.29 0 0 1-66.11 50.67Z"
}));
var _default = exports.default = Globe;