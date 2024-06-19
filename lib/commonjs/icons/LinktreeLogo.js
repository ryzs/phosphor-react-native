"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lib = require("../lib");
var _LinktreeLogo = _interopRequireDefault(require("../bold/LinktreeLogo"));
var _LinktreeLogo2 = _interopRequireDefault(require("../duotone/LinktreeLogo"));
var _LinktreeLogo3 = _interopRequireDefault(require("../fill/LinktreeLogo"));
var _LinktreeLogo4 = _interopRequireDefault(require("../light/LinktreeLogo"));
var _LinktreeLogo5 = _interopRequireDefault(require("../regular/LinktreeLogo"));
var _LinktreeLogo6 = _interopRequireDefault(require("../thin/LinktreeLogo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* GENERATED FILE */

function LinktreeLogo(_ref) {
  let {
    weight,
    color,
    size,
    style,
    mirrored
  } = _ref;
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false,
    style: contextStyle
  } = (0, _react.useContext)(_lib.IconContext);
  const IconComponent = (0, _react.useMemo)(() => {
    const iconWeight = weight ?? contextWeight;
    const weightMap = {
      bold: _LinktreeLogo.default,
      duotone: _LinktreeLogo2.default,
      fill: _LinktreeLogo3.default,
      light: _LinktreeLogo4.default,
      regular: _LinktreeLogo5.default,
      thin: _LinktreeLogo6.default
    };
    return weightMap[iconWeight];
  }, [weight, contextWeight]);
  const mirroredValue = mirrored ?? contextMirrored;
  return /*#__PURE__*/_react.default.createElement(IconComponent, {
    color: color ?? contextColor,
    size: size ?? contextSize,
    style: [contextStyle, style, {
      ...(mirroredValue && {
        transform: [{
          scaleX: -1
        }]
      })
    }]
  });
}
var _default = exports.default = LinktreeLogo;