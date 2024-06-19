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
const Tractor = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "tractor-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 164v-30a19.87 19.87 0 0 0-14.25-19.15l-.31-.09-33.44-9.11V76a12 12 0 0 0-24 0v23.15l-16-4.33V60h4a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24h4v24h-4a12 12 0 0 0 0 24h28a64.07 64.07 0 0 1 64 64v12a12 12 0 0 0 12 12h28.8a40 40 0 1 0 71.2-32Zm-112-52.33A87.75 87.75 0 0 0 68 84V60h64ZM175.35 172H156v-52.32L220 137v11.8a40.57 40.57 0 0 0-8-.8 40.06 40.06 0 0 0-36.65 24ZM212 204a16 16 0 1 1 16-16 16 16 0 0 1-16 16ZM64 124a52 52 0 1 0 52 52 52.06 52.06 0 0 0-52-52Zm0 80a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm16-28a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z"
}));
var _default = exports.default = Tractor;