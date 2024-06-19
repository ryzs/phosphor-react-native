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
const LampPendant = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lamp-pendant-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M174 76.05V72a14 14 0 0 0-14-14h-26V16a6 6 0 0 0-12 0v42H96a14 14 0 0 0-14 14v4a109.76 109.76 0 0 0-64 100 6 6 0 0 0 6 6h66v2a38 38 0 0 0 76 0v-2h66a6 6 0 0 0 6-6 109.76 109.76 0 0 0-64-99.95ZM154 184a26 26 0 0 1-52 0v-2h52ZM30.18 170a97.76 97.76 0 0 1 60.13-84.49A6 6 0 0 0 94 80v-8a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v8a6 6 0 0 0 3.69 5.54A97.76 97.76 0 0 1 225.82 170Z"
}));
var _default = exports.default = LampPendant;