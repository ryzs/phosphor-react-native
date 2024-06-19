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
const Cricket = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "cricket-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M241.9 82.79 189.21 30.1a14 14 0 0 0-19.79 0L62.1 137.42a14 14 0 0 0 0 19.79l22.1 22.1-48.44 48.45a6 6 0 1 0 8.48 8.48l48.45-48.44 22.1 22.1a14 14 0 0 0 19.79 0L241.9 102.58a14 14 0 0 0 0-19.79ZM126.1 201.42a2 2 0 0 1-2.83 0l-22.1-22.11 31.07-31.07a6 6 0 0 0-8.48-8.48l-31.07 31.07-22.11-22.1a2 2 0 0 1 0-2.83l35.9-35.9H162v55.52ZM233.42 94.1 174 153.52V104a6 6 0 0 0-6-6h-49.52l59.42-59.42a2 2 0 0 1 2.83 0l52.69 52.69a2 2 0 0 1 0 2.83ZM60 86a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Z"
}));
var _default = exports.default = Cricket;