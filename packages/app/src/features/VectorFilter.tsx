import * as React from 'react'

export const VectorFilter = () => (
  <svg>
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
