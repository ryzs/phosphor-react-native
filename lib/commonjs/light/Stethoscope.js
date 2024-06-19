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
const Stethoscope = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "stethoscope-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M218 160a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm-4.35 37.58A46.05 46.05 0 0 1 168 238h-24a46.06 46.06 0 0 1-46-46v-42.29A62 62 0 0 1 42 88V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12H54v42a50 50 0 0 0 50 50h.67c27.2-.36 49.33-23.16 49.33-50.83V46h-18a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6v47.17c0 32.43-24.68 59.44-56 62.52V192a34 34 0 0 0 34 34h24a34.05 34.05 0 0 0 33.56-28.56 38 38 0 1 1 12.09.14ZM234 160a26 26 0 1 0-26 26 26 26 0 0 0 26-26Z"
}));
var _default = exports.default = Stethoscope;