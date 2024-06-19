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
const GlobeX = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-x-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 20a108 108 0 0 0 0 216 12 12 0 0 0 7.49-21.37c-.25-.2-17.55-14.39-27.9-42.63H128a12 12 0 0 0 0-24h-26.52a135.88 135.88 0 0 1 0-40h53a133.77 133.77 0 0 1 1.52 20 12 12 0 0 0 24 0 159 159 0 0 0-1.25-20h30.82a83.49 83.49 0 0 1 2.43 20 12 12 0 0 0 24 0A108.12 108.12 0 0 0 128 20ZM97.79 49.64A140.82 140.82 0 0 0 82.29 84H56.48a84.46 84.46 0 0 1 41.31-34.36Zm0 156.72A84.46 84.46 0 0 1 56.48 172h25.81a140.82 140.82 0 0 0 15.5 34.36ZM77.25 148H46.43a83.52 83.52 0 0 1 0-40h30.82a160.63 160.63 0 0 0 0 40Zm30.34-64a116.61 116.61 0 0 1 10-20.77A107.75 107.75 0 0 1 128 49a113.2 113.2 0 0 1 20.39 35Zm66.12 0a140.82 140.82 0 0 0-15.5-34.36A84.46 84.46 0 0 1 199.52 84Zm50.78 92.49L209 192l15.52 15.51a12 12 0 0 1-17 17L192 209l-15.51 15.52a12 12 0 0 1-17-17L175 192l-15.52-15.51a12 12 0 0 1 17-17L192 175l15.51-15.52a12 12 0 0 1 17 17Z"
}));
var _default = exports.default = GlobeX;