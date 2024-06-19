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
const ChatsCircle = props => /*#__PURE__*/React.createElement(_reactNativeSvg.default, _extends({
  className: "chats-circle-bold__svg-icon-phosphor",
  fill: "currentColor",
  viewBox: "0 0 256 256",
  width: props.size,
  height: props.size
}, props), /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
  d: "M236.34 187.09A84 84 0 0 0 172.29 68.9a84 84 0 0 0-152.63 70.19l-6.84 23.26a20 20 0 0 0 24.83 24.83l23.26-6.84a83.94 83.94 0 0 0 22.76 6.74 84.06 84.06 0 0 0 111.42 41.26l23.26 6.84a20 20 0 0 0 24.83-24.83ZM62 155.5a11.88 11.88 0 0 0-3.39.49l-20.72 6.09L44 141.35a12 12 0 0 0-.93-9 60 60 0 1 1 24.63 24.57 12 12 0 0 0-5.7-1.42Zm150.89 24.8a12 12 0 0 0-.93 9l6.09 20.73-20.69-6.03a12 12 0 0 0-9.06.93 60 60 0 0 1-77.3-18.3 83.93 83.93 0 0 0 68.55-91.37 60 60 0 0 1 33.38 85Z"
}));
var _default = exports.default = ChatsCircle;