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
  className: "treasure-chest-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M184 44H72a52.06 52.06 0 0 0-52 52v96a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V96a52.06 52.06 0 0 0-52-52Zm44 52v12h-40V52.19A44.06 44.06 0 0 1 228 96Zm-88 44h-24v-40h24Zm-28 8h32a4 4 0 0 0 4-4v-28h32v80H76v-80h32v28a4 4 0 0 0 4 4Zm36-40V96a4 4 0 0 0-4-4h-32a4 4 0 0 0-4 4v12H76V52h104v56ZM68 52.19V108H28V96a44.06 44.06 0 0 1 40-43.81ZM28 192v-76h40v80H32a4 4 0 0 1-4-4Zm196 4h-36v-80h40v76a4 4 0 0 1-4 4Z"
}));
var _default = exports.default = TreasureChest;