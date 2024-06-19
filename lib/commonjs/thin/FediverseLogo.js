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
const FediverseLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "fediverse-logo-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M212 100a23.78 23.78 0 0 0-11.65 3L165.9 60a24 24 0 1 0-41.28-10.56L72.29 71.21A24 24 0 1 0 49 107.8l2.11 52.71a24 24 0 1 0 26.59 33.72l54.43 15.24c-.08.83-.13 1.68-.13 2.53a24 24 0 1 0 40.07-17.81l30.6-48.08A23.78 23.78 0 0 0 212 148a24 24 0 0 0 0-48Zm-23.82 21.13-55.06 2.62 13.29-55.81q.79.06 1.59.06a23.78 23.78 0 0 0 11.65-3l34.45 43a23.91 23.91 0 0 0-5.92 13.13Zm-116 45.19a23.9 23.9 0 0 0-13.16-6.12l-2.11-52.71a24.05 24.05 0 0 0 13.52-8.18l50.4 29.18ZM148 28a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm-20.29 28.79a24 24 0 0 0 10.92 9.3l-13.28 55.76-50.87-29.46A23.83 23.83 0 0 0 76 84a24.12 24.12 0 0 0-.62-5.41ZM36 84a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm20 116a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm23.87-13.47c.08-.83.13-1.68.13-2.53a23.86 23.86 0 0 0-2.87-11.37l48.86-38 18.73 56.19a24.17 24.17 0 0 0-10.42 11ZM156 228a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm9.33-38.11A23.78 23.78 0 0 0 156 188a24.94 24.94 0 0 0-3.69.28l-18.85-56.54 55.1-2.62a23.92 23.92 0 0 0 7.37 12.69ZM212 140a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z"
}));
var _default = exports.default = FediverseLogo;