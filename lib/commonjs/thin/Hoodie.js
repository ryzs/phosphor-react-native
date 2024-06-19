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
const Hoodie = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hoodie-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "m234 122.75-54.29-81.41a12 12 0 0 0-10-5.34H86.27a12 12 0 0 0-10 5.34L22 122.75a12 12 0 0 0-1.6 9.82l21.44 78.59A12 12 0 0 0 53.43 220H80a12 12 0 0 0 12-12v-20h72v20a12 12 0 0 0 12 12h26.57a12 12 0 0 0 11.57-8.84l21.44-78.59a12 12 0 0 0-1.58-9.82ZM80 180a4 4 0 0 1-4-4V62l32 18.86V136a4 4 0 0 0 8 0V85.57l10 5.88a4 4 0 0 0 4.06 0l10-5.88V128a4 4 0 0 0 8 0V80.85L180 62v114a4 4 0 0 1-4 4Zm2.94-134.22A4 4 0 0 1 86.27 44h83.46a4 4 0 0 1 3.33 1.78l5.27 7.91L128 83.36 77.67 53.69ZM84 208a4 4 0 0 1-4 4H53.43a4 4 0 0 1-3.85-2.95l-21.44-78.59a4 4 0 0 1 .53-3.27L68 68.2V176a12 12 0 0 0 12 12h4Zm143.86-77.54-21.44 78.59a4 4 0 0 1-3.85 2.95H176a4 4 0 0 1-4-4v-20h4a12 12 0 0 0 12-12V68.2l39.33 59a4 4 0 0 1 .53 3.26Z"
}));
var _default = exports.default = Hoodie;