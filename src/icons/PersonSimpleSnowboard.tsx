/* GENERATED FILE */
import React, { useContext, useMemo } from 'react'
import { IconProps, IconContext } from '../lib'

import bold from '../bold/PersonSimpleSnowboard'
import duotone from '../duotone/PersonSimpleSnowboard'
import fill from '../fill/PersonSimpleSnowboard'
import light from '../light/PersonSimpleSnowboard'
import regular from '../regular/PersonSimpleSnowboard'
import thin from '../thin/PersonSimpleSnowboard'

function PersonSimpleSnowboard({ weight, color, size, style, mirrored }: IconProps) {
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

export default PersonSimpleSnowboard
  