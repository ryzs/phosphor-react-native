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
const FileHtml = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "file-html-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M214 120V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v80a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v26a6 6 0 0 0 12 0Zm-56-73.52L193.52 82H158ZM66 160v48a6 6 0 0 1-12 0v-18H30v18a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0v18h24v-18a6 6 0 0 1 12 0Zm56 0a6 6 0 0 1-6 6h-10v42a6 6 0 0 1-12 0v-42H84a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6Zm72 0v48a6 6 0 0 1-12 0v-30l-13.2 17.6a6 6 0 0 1-9.6 0L146 178v30a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.8-3.6L164 182l19.2-25.6A6 6 0 0 1 194 160Zm56 48a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-48a6 6 0 0 1 12 0v42h22a6 6 0 0 1 6 6Z"
}));
var _default = exports.default = FileHtml;