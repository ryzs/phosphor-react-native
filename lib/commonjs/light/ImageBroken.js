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
const ImageBroken = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "image-broken-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h64a6 6 0 0 0 5.69-4.1l15.12-45.36 37.42-15a6 6 0 0 0 3.34-3.34l15-37.42 45.33-15.09A6 6 0 0 0 230 88V56a14 14 0 0 0-14-14Zm-98.23 112.43a6 6 0 0 0-3.46 3.67L99.68 202H40a2 2 0 0 1-2-2v-28.83l52.58-52.58a2 2 0 0 1 2.83 0L126 151.15ZM218 83.68l-43.9 14.63a6 6 0 0 0-3.67 3.46l-15.05 37.61-17.28 6.92-36.2-36.2a14 14 0 0 0-19.8 0L38 154.2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm9.51 33.18a6 6 0 0 0-5.41-.82L198.3 124a6 6 0 0 0-3.67 3.47L180 164l-36.56 14.63a6 6 0 0 0-3.44 3.67l-8 23.8a6 6 0 0 0 5.69 7.9H216a14 14 0 0 0 14-14v-78.27a6 6 0 0 0-2.49-4.87ZM218 200a2 2 0 0 1-2 2h-69.94l4.42-13.26 36.37-14.55a6 6 0 0 0 3.34-3.34l14.55-36.37 13.26-4.42Z"
}));
var _default = exports.default = ImageBroken;