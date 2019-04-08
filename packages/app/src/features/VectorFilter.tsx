/**
 * @file this is used for applying `filter: url(#id)`
 */
import * as React from 'react'
import styled from 'styled-components'

export const VectorFilter = (
  props: React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement>
) => (
  <svg {...props}>
    <filter
      id="green-tint"
      colorInterpolationFilters="sRGB"
      x="0"
      y="0"
      height="100%"
      width="100%"
    >
      <feColorMatrix
        type="matrix"
        values="0.36 0 0 0  0.02
              0.56 0 0 0  0.06
              0.40 0 0 0  0.16
                0  0 0 1  0"
      />
    </filter>
  </svg>
)

/**
 * @description this takes it out of the flow
 */
const StyledVectorFilter = styled(VectorFilter)`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
`
