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
const CastleTurret = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "castle-turret-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M216 218h-18V114.49l11.9-11.91a13.9 13.9 0 0 0 4.1-9.89V48a14 14 0 0 0-14-14h-24a6 6 0 0 0-6 6v26h-20V40a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v26H86V40a6 6 0 0 0-6-6H56a14 14 0 0 0-14 14v44.69a13.9 13.9 0 0 0 4.1 9.89L58 114.49V218H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12ZM68.24 107.76 54.58 94.1a2 2 0 0 1-.58-1.41V48a2 2 0 0 1 2-2h18v26a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V46h20v26a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V46h18a2 2 0 0 1 2 2v44.69a2 2 0 0 1-.58 1.41l-13.66 13.66A6 6 0 0 0 186 112v106h-28v-50a30 30 0 0 0-60 0v50H70V112a6 6 0 0 0-1.76-4.24ZM146 218h-36v-50a18 18 0 0 1 36 0Z"
}));
var _default = exports.default = CastleTurret;