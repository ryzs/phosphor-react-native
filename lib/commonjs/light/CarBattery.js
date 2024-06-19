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
const CarBattery = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "car-battery-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M190 136a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h10v-10a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6Zm-86-6H72a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm134-42v96a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14V88a14 14 0 0 1 14-14h18V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h36V56a14 14 0 0 1 14-14h32a14 14 0 0 1 14 14v18h18a14 14 0 0 1 14 14Zm-80-14h36V56a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2Zm-96 0h36V56a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2Zm164 14a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v96a2 2 0 0 0 2 2h192a2 2 0 0 0 2-2Z"
}));
var _default = exports.default = CarBattery;