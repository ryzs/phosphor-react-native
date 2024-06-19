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
const SolarRoof = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "solar-roof-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m245.37 125.32-40-80A6 6 0 0 0 200 42H56a6 6 0 0 0-5.37 3.32l-40 80A6.07 6.07 0 0 0 10 128v56a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14v-56a6.07 6.07 0 0 0-.63-2.68ZM99.71 122l-14-28h34.58l14 28Zm.58-68 14 28H79.71l-14-28Zm48 0 14 28h-34.58l-14-28Zm-.58 68-14-28h34.58l14 28Zm48 0-14-28h34.58l14 28Zm14.58-40h-34.58l-14-28h34.58ZM22 184v-54.58l34-68 34 68V186H24a2 2 0 0 1-2-2Zm210 2H102v-52h132v50a2 2 0 0 1-2 2Z"
}));
var _default = exports.default = SolarRoof;