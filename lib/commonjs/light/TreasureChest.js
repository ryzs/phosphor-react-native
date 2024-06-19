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
const TreasureChest = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "treasure-chest-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 42H72a54.06 54.06 0 0 0-54 54v96a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V96a54.06 54.06 0 0 0-54-54Zm42 54v10h-36V54.44A42.05 42.05 0 0 1 226 96Zm-88 42h-20v-36h20Zm-26 12h32a6 6 0 0 0 6-6v-26h28v76H78v-76h28v26a6 6 0 0 0 6 6Zm38-44V96a6 6 0 0 0-6-6h-32a6 6 0 0 0-6 6v10H78V54h100v52ZM66 54.44V106H30V96a42.05 42.05 0 0 1 36-41.56ZM30 192v-74h36v76H32a2 2 0 0 1-2-2Zm194 2h-34v-76h36v74a2 2 0 0 1-2 2Z"
}));
var _default = exports.default = TreasureChest;