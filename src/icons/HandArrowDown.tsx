/* GENERATED FILE */
import React, { useContext, useMemo } from 'react'
import { IconProps, IconContext } from '../lib'

import bold from '../bold/HandArrowDown'
import duotone from '../duotone/HandArrowDown'
import fill from '../fill/HandArrowDown'
import light from '../light/HandArrowDown'
import regular from '../regular/HandArrowDown'
import thin from '../thin/HandArrowDown'

function HandArrowDown({ weight, color, size, style, mirrored }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    weight: contextWeight = 'regular',
    mirrored: contextMirrored = false,
    style: contextStyle,
  } = useContext(IconContext)

  const IconComponent = useMemo(() => {
    const iconWeight = weight ?? contextWeight

    const weightMap = {
      bold,
      duotone,
      fill,
      light,
      regular,
      thin,
    }

    return weightMap[iconWeight]
  }, [weight, contextWeight])

  const mirroredValue = mirrored ?? contextMirrored

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={[
        contextStyle,
        style,
        {
          ...(mirroredValue && {
            transform: [{ scaleX: -1 }],
          }),
        },
      ]}
    />
  )
}

export default HandArrowDown
  