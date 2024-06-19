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
const NetworkSlash = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "network-slash-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M98 54V40a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v32a14 14 0 0 1-14 14h-16.39a6 6 0 0 1 0-12H144a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2v14a6 6 0 0 1-12 0Zm114.44 158a6 6 0 0 1-8.88 8.08l-85.49-94H70v36h10a14 14 0 0 1 14 14v32a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V176a14 14 0 0 1 14-14h10v-36H24a6 6 0 0 1 0-12h83.16l-63.6-70a6 6 0 0 1 8.88-8ZM80 174H48a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2v-32a2 2 0 0 0-2-2Zm152-60h-68a6 6 0 0 0 0 12h22v24.83a6 6 0 1 0 12 0V126h34a6 6 0 0 0 0-12Z"
}));
var _default = exports.default = NetworkSlash;