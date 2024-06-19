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
const ChefHat = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chef-hat-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M244 112a60.07 60.07 0 0 0-60-60c-1 0-1.95 0-2.92.08a60 60 0 0 0-106.16 0C74 52 73 52 72 52a60 60 0 0 0-28 113v43a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-43a60 60 0 0 0 32-53Zm-56 92H68v-32.15c1.32.09 2.65.15 4 .15h112c1.35 0 2.68-.06 4-.15Zm-4-56h-8.63l4.27-17.09a12 12 0 0 0-23.28-5.82L150.63 148H140v-20a12 12 0 0 0-24 0v20h-10.63l-5.73-22.91a12 12 0 1 0-23.28 5.82L80.63 148H72a36 36 0 0 1-3.87-71.79C68.05 77.47 68 78.73 68 80a12 12 0 0 0 24 0 36 36 0 0 1 72 0 12 12 0 0 0 24 0c0-1.27-.05-2.53-.13-3.79A36 36 0 0 1 184 148Z"
}));
var _default = exports.default = ChefHat;