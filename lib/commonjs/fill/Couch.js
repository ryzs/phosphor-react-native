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
const Couch = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "couch-fill__svg-icon-phosphor",
  fill: props.color,
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M16 100V72a16 16 0 0 1 16-16h84a4 4 0 0 1 4 4v76H64a32 32 0 0 0-32-32H20a4 4 0 0 1-4-4Zm208 4h12a4 4 0 0 0 4-4V72a16 16 0 0 0-16-16h-84a4 4 0 0 0-4 4v76h56a32 32 0 0 1 32-32Zm8 16h-8a16 16 0 0 0-16 16v8a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-8a16 16 0 0 0-16-16h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v15.73a8.18 8.18 0 0 0 7.47 8.27 8 8 0 0 0 8.53-8v-16h160v15.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8V184h8a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16Z"
}));
var _default = exports.default = Couch;