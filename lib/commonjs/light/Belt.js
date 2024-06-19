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
const Belt = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "belt-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M248 162h-58V94h58a6 6 0 0 0 0-12h-59.37A14 14 0 0 0 176 74h-64a14 14 0 0 0-12.63 8H62v-2a6 6 0 0 0-12 0v2H8a6 6 0 0 0 0 12h42v68H8a6 6 0 0 0 0 12h42v2a6 6 0 0 0 12 0v-2h37.37a14 14 0 0 0 12.63 8h64a14 14 0 0 0 12.63-8H248a6 6 0 0 0 0-12ZM62 94h36v68H62Zm114 76h-64a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h64a2 2 0 0 1 2 2v34h-34a6 6 0 0 0 0 12h34v34a2 2 0 0 1-2 2Z"
}));
var _default = exports.default = Belt;