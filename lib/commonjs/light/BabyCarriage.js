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
const BabyCarriage = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "baby-carriage-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M160 34h-8a14 14 0 0 0-14 14v58H53.52A38.05 38.05 0 0 0 16 74a6 6 0 0 0 0 12 26 26 0 0 1 26 26 78.09 78.09 0 0 0 78 78h40a78 78 0 0 0 0-156Zm65.71 72H161.1l47.82-38.25A65.66 65.66 0 0 1 225.71 106ZM152 46h8a65.67 65.67 0 0 1 40 13.53l-50 40V48a2 2 0 0 1 2-2Zm8 132h-40a66.09 66.09 0 0 1-65.73-60h171.46A66.09 66.09 0 0 1 160 178Zm-58 46a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm104 0a14 14 0 1 1-14-14 14 14 0 0 1 14 14Z"
}));
var _default = exports.default = BabyCarriage;