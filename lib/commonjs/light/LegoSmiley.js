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
const LegoSmiley = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "lego-smiley-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M100 122a10 10 0 1 1 10-10 10 10 0 0 1-10 10Zm56-20a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm-3.2 44.92a47 47 0 0 1-49.6 0 6 6 0 0 0-6.4 10.16 59 59 0 0 0 62.4 0 6 6 0 1 0-6.4-10.16ZM214 80v96a30.05 30.05 0 0 1-24 29.4V224a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14v-18.6A30.05 30.05 0 0 1 42 176V80a30 30 0 0 1 30-30h18V32a14 14 0 0 1 14-14h48a14 14 0 0 1 14 14v18h18a30 30 0 0 1 30 30ZM102 50h52V32a2 2 0 0 0-2-2h-48a2 2 0 0 0-2 2Zm76 174v-18H78v18a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2Zm24-144a18 18 0 0 0-18-18H72a18 18 0 0 0-18 18v96a18 18 0 0 0 18 18h112a18 18 0 0 0 18-18Z"
}));
var _default = exports.default = LegoSmiley;