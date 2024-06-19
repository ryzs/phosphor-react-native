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
const HandPeace = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "hand-peace-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M210.51 31a26 26 0 0 0-47.63 6.27L148 92.82l-14.88-55.54a26 26 0 0 0-50.23 13.46L93.1 88.82l-11.89-2.29a26 26 0 0 0-21.37 45.85 25.81 25.81 0 0 0-9.31 15.15 26.66 26.66 0 0 0-.53 5.32V160a78 78 0 0 0 78 78h.6c42.68-.32 77.4-35.71 77.4-78.9v-3.34a53.86 53.86 0 0 0-12-33.82l19.07-71.2A25.83 25.83 0 0 0 210.51 31ZM95.88 37a14 14 0 0 1 25.65 3.38L137 98a26 26 0 0 0-17.23 5.71c-.38-.7-.79-1.39-1.24-2.07a25.72 25.72 0 0 0-12.18-9.85L94.48 47.63A13.94 13.94 0 0 1 95.88 37Zm-33.59 72.2a14 14 0 0 1 16.58-10.9l20.74 4A14 14 0 1 1 94 129.71l-12-2.31-.72-.14-.4-.07-7.63-1.47a14 14 0 0 1-10.89-16.51Zm0 40.72A14 14 0 0 1 78.66 139l1 .2 9.14 1.8a14 14 0 1 1-5.63 27.42l-10-2a14 14 0 0 1-10.9-16.51ZM194 159.1c0 36.62-29.39 66.63-65.5 66.9a66.06 66.06 0 0 1-64.61-50.26 25.69 25.69 0 0 0 6.92 2.46l10 2a26.79 26.79 0 0 0 5.25.53 26 26 0 0 0 21.64-40.34l-.42-.6a26.26 26.26 0 0 0 5.81-3.52q.57 1.06 1.23 2.07a25.86 25.86 0 0 0 16.52 11.15l8.34 1.66A34.3 34.3 0 0 0 138 160a33.85 33.85 0 0 0 9.71 23.8 6 6 0 0 0 8.57-8.4 22 22 0 0 1-3.64-25.86 6 6 0 0 0-4.1-8.75l-15.34-3.07a14 14 0 1 1 5.63-27.42l21.4 4.27A42.12 42.12 0 0 1 194 155.76Zm7.51-111.47-17.36 64.79a53.6 53.6 0 0 0-21.57-9.61l-4.59-.92 16.48-61.5a14 14 0 0 1 27 7.24Z"
}));
var _default = exports.default = HandPeace;