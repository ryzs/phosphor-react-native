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
const ApplePodcastsLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "apple-podcasts-logo-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M151 139.2a30 30 0 1 0-46.06 0 22.14 22.14 0 0 0-10.35 7.39 21.68 21.68 0 0 0-3.94 18.77l12.18 48A22.17 22.17 0 0 0 124.44 230h7.12a22.17 22.17 0 0 0 21.58-16.64l12.18-48a21.68 21.68 0 0 0-3.94-18.77A22.14 22.14 0 0 0 151 139.2ZM128 102a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm25.69 60.4-12.18 48a10.19 10.19 0 0 1-9.95 7.6h-7.12a10.19 10.19 0 0 1-10-7.6l-12.18-48a9.75 9.75 0 0 1 1.78-8.44 10.25 10.25 0 0 1 8.16-4h31.5a10.25 10.25 0 0 1 8.16 4 9.75 9.75 0 0 1 1.83 8.44ZM186 128a58 58 0 1 0-113.89 15.58 6 6 0 0 1-11.56 3.21 70 70 0 1 1 134.9 0 6 6 0 0 1-11.56-3.21A58.31 58.31 0 0 0 186 128Zm44 0a101.91 101.91 0 0 1-45.29 84.79 6 6 0 1 1-6.68-10 90 90 0 1 0-100.06 0 6 6 0 0 1-6.68 10A102 102 0 1 1 230 128Z"
}));
var _default = exports.default = ApplePodcastsLogo;