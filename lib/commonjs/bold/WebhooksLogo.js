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
const WebhooksLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "webhooks-logo-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M192 180h-73.29a56 56 0 1 1-104.6-37.46 12 12 0 1 1 21.37 10.92A31.64 31.64 0 0 0 32 168a32 32 0 0 0 64 0 12 12 0 0 1 12-12h84a12 12 0 0 1 0 24Zm0-68a55.9 55.9 0 0 0-18.45 3.12l-35.33-57.41a12 12 0 0 0-20.44 12.58l40.94 66.52a12 12 0 0 0 16.52 3.93 32 32 0 1 1 19.68 59.13 12 12 0 0 0 1.08 23.95 10.05 10.05 0 0 0 1.09 0A56 56 0 0 0 192 112ZM57.71 178.22a12 12 0 0 0 16.51-3.93l40.94-66.52a12 12 0 0 0-3.92-16.51 32 32 0 1 1 45.28-41.8 12 12 0 1 0 21.37-10.92 56 56 0 1 0-88.79 65.78l-35.32 57.39a12 12 0 0 0 3.93 16.51Z"
}));
var _default = exports.default = WebhooksLogo;