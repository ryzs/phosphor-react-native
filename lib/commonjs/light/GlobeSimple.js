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
const GlobeSimple = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "globe-simple-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.8 96h-43.91c-1.54-40.77-18.48-68.23-30.43-82.67A90.19 90.19 0 0 1 217.8 122ZM128 215.83a110 110 0 0 1-15.19-19.45A128.37 128.37 0 0 1 94.13 134h67.74a128.37 128.37 0 0 1-18.68 62.38A110 110 0 0 1 128 215.83ZM94.13 122a128.37 128.37 0 0 1 18.68-62.38A110 110 0 0 1 128 40.17a110 110 0 0 1 15.19 19.45A128.37 128.37 0 0 1 161.87 122Zm18.41-82.67c-12 14.44-28.89 41.9-30.43 82.67H38.2a90.19 90.19 0 0 1 74.34-82.67ZM38.2 134h43.91c1.54 40.77 18.48 68.23 30.43 82.67A90.19 90.19 0 0 1 38.2 134Zm105.26 82.67c11.95-14.44 28.89-41.9 30.43-82.67h43.91a90.19 90.19 0 0 1-74.34 82.67Z"
}));
var _default = exports.default = GlobeSimple;