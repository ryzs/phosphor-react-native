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
const City = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "city-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M240 212h-12V88a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v44h-56V40a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v172H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8ZM164 92h56v120h-56Zm-8 48v72h-56v-72ZM36 44h56v168H36Zm32 28v16a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0Zm0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0Zm0 48v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0Zm56 16v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0Zm64 0v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0Zm0-48v-16a4 4 0 0 1 8 0v16a4 4 0 0 1-8 0Z"
}));
var _default = exports.default = City;