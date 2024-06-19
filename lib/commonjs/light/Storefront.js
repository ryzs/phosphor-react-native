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
const Storefront = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "storefront-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M26.22 94.41A6 6 0 0 0 26 96v16a38 38 0 0 0 16 31v73a6 6 0 0 0 6 6h160a6 6 0 0 0 6-6v-73a38 38 0 0 0 16-31V96a5.91 5.91 0 0 0-.23-1.64l-14.34-50.21A14.07 14.07 0 0 0 202 34H54a14.07 14.07 0 0 0-13.43 10.15Zm25.89-47A2 2 0 0 1 54 46h148a2 2 0 0 1 1.92 1.45L216.05 90H40ZM102 102h52v10a26 26 0 0 1-52 0Zm-64 0h52v10a26 26 0 0 1-38.18 23 6 6 0 0 0-1.65-1A26 26 0 0 1 38 112Zm164 108H54v-61.34a38 38 0 0 0 42-16.21 37.95 37.95 0 0 0 64 0 38 38 0 0 0 42 16.21Zm3.83-76a6 6 0 0 0-1.65 1A26 26 0 0 1 166 112v-10h52v10a26 26 0 0 1-12.17 22Z"
}));
var _default = exports.default = Storefront;