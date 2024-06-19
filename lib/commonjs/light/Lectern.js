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
const Lectern = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lectern-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m244.51 121.74-40-80A13.92 13.92 0 0 0 192 34H64a13.92 13.92 0 0 0-12.52 7.74l-40 80A14 14 0 0 0 24 142h98v68H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-68h98a14 14 0 0 0 12.52-20.26Zm-10.82 7.31a1.93 1.93 0 0 1-1.7.95H24a2 2 0 0 1-1.79-2.89l40-80A2 2 0 0 1 64 46h128a2 2 0 0 1 1.79 1.11l40 80a2 2 0 0 1-.1 1.94ZM190 104a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6Z"
}));
var _default = exports.default = Lectern;