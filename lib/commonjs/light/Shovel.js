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
const Shovel = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "shovel-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m244.24 59.76-48-48a6 6 0 0 0-8.48 8.48L207.52 40l-73.86 73.86L97.9 78.1a14 14 0 0 0-19.8 0l-56 56A13.94 13.94 0 0 0 18 144v80a14 14 0 0 0 14 14h80a13.94 13.94 0 0 0 9.9-4.1l56-56a14 14 0 0 0 0-19.8l-35.76-35.76L216 48.48l19.76 19.76a6 6 0 1 0 8.48-8.48Zm-74.83 106.82a2 2 0 0 1 0 2.84l-56 56a2 2 0 0 1-1.41.58H32a2 2 0 0 1-2-2v-80a2 2 0 0 1 .58-1.42l56-56A2 2 0 0 1 88 86a2.07 2.07 0 0 1 1.42.58l35.75 35.76-41.41 41.42a6 6 0 1 0 8.48 8.48l41.42-41.41Z"
}));
var _default = exports.default = Shovel;