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
const Basket = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "basket-thin__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M132 120v56a4 4 0 0 1-8 0v-56a4 4 0 0 1 8 0Zm49.2-4a4 4 0 0 0-4.38 3.58l-5.6 56a4 4 0 0 0 3.58 4.42h.41a4 4 0 0 0 4-3.6l5.6-56a4 4 0 0 0-3.61-4.4Zm-106.4 0a4 4 0 0 0-3.58 4.38l5.6 56a4 4 0 0 0 4 3.6h.41a4 4 0 0 0 3.58-4.38l-5.6-56a4 4 0 0 0-4.41-3.6ZM236 88.53l-15.11 113.06A12 12 0 0 1 209 212H47a12 12 0 0 1-11.89-10.41L20 88.53a4 4 0 0 1 1-3.16A4 4 0 0 1 24 84h46.18L125 21.37a4 4 0 0 1 6 0L185.82 84H232a4 4 0 0 1 3 1.37 4 4 0 0 1 1 3.16ZM80.82 84h94.36L128 30.07Zm146.61 8H28.57L43 200.53a4 4 0 0 0 4 3.47h162a4 4 0 0 0 4-3.47Z"
}));
var _default = exports.default = Basket;