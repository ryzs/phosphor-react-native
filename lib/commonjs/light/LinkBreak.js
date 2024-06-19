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
const LinkBreak = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "link-break-light__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M200 56a34 34 0 0 0-48-.05l-11.66 12.19a6 6 0 1 1-8.68-8.28l11.71-12.28.1-.11a46 46 0 0 1 65.06 65.06l-.11.1-12.28 11.71a6 6 0 1 1-8.28-8.68L200.09 104a34 34 0 0 0-.09-48Zm-84.38 131.9L104 200.09A34 34 0 0 1 55.91 152l12.23-11.67a6 6 0 0 0-8.28-8.68l-12.28 11.72-.11.1a46 46 0 0 0 65.06 65.06l.1-.11 11.71-12.28a6 6 0 1 0-8.68-8.28ZM216 154h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12ZM40 102h24a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12Zm120 84a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6ZM96 70a6 6 0 0 0 6-6V40a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6Z"
}));
var _default = exports.default = LinkBreak;