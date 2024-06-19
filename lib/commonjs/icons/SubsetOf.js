"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lib = require("../lib");
var _SubsetOf = _interopRequireDefault(require("../bold/SubsetOf"));
var _SubsetOf2 = _interopRequireDefault(require("../duotone/SubsetOf"));
var _SubsetOf3 = _interopRequireDefault(require("../fill/SubsetOf"));
var _SubsetOf4 = _interopRequireDefault(require("../light/SubsetOf"));
var _SubsetOf5 = _interopRequireDefault(require("../regular/SubsetOf"));
var _SubsetOf6 = _interopRequireDefault(require("../thin/SubsetOf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* GENERATED FILE */

function SubsetOf(_ref) {
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
      bold: _SubsetOf.default,
      duotone: _SubsetOf2.default,
      fill: _SubsetOf3.default,
      light: _SubsetOf4.default,
      regular: _SubsetOf5.default,
      thin: _SubsetOf6.default
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
var _default = exports.default = SubsetOf;