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
const Wall = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "wall-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M232 56v32a4 4 0 0 1-4 4h-92V52a4 4 0 0 1 4-4h84a8 8 0 0 1 8 8Zm-4 52h-44v44h44a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4ZM88 152h80v-44H88Zm-60 0h44v-44H28a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4Zm200 16h-92v36a4 4 0 0 0 4 4h84a8 8 0 0 0 8-8v-28a4 4 0 0 0-4-4ZM28 92h92V52a4 4 0 0 0-4-4H32a8 8 0 0 0-8 8v32a4 4 0 0 0 4 4Zm-4 80v28a8 8 0 0 0 8 8h84a4 4 0 0 0 4-4v-36H28a4 4 0 0 0-4 4Z"
}));
var _default = exports.default = Wall;