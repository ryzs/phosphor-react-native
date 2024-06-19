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
  className: "car-battery-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M188 136a4 4 0 0 1-4 4h-12v12a4 4 0 0 1-8 0v-12h-12a4 4 0 0 1 0-8h12v-12a4 4 0 0 1 8 0v12h12a4 4 0 0 1 4 4Zm-84-4H72a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm132-44v96a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12h20V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h40V56a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v20h20a12 12 0 0 1 12 12Zm-80-12h40V56a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4Zm-96 0h40V56a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4Zm168 12a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4Z"
}));
var _default = exports.default = CarBattery;