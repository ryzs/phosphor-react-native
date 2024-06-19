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
const PixLogo = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "pix-logo-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m235.34 139.28-19.56 19.55A4 4 0 0 1 213 160h-41.68l-32-32 32-32H213a4 4 0 0 1 2.82 1.17l19.56 19.55a16 16 0 0 1-.04 22.56ZM67.05 80H88a8 8 0 0 1 5.65 2.34L128 116.68l34.35-34.34A8 8 0 0 1 168 80h21a4 4 0 0 0 2.83-6.83l-52.5-52.51a16 16 0 0 0-22.56 0L64.22 73.17A4 4 0 0 0 67.05 80ZM189 176h-21a8 8 0 0 1-5.65-2.34L128 139.31l-34.35 34.35A8 8 0 0 1 88 176H67a4 4 0 0 0-2.83 6.83l52.5 52.51a16 16 0 0 0 22.56 0l52.5-52.51A4 4 0 0 0 189 176Zm-72.26-48-32-32H43a4 4 0 0 0-2.82 1.17l-19.52 19.55a16 16 0 0 0 0 22.56l19.56 19.55A4 4 0 0 0 43 160h41.68Z"
}));
var _default = exports.default = PixLogo;