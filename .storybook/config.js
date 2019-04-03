import React, { StrictMode } from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import { toStyledStory } from './StyledStory'
import './addons'

addDecorator(toStyledStory)

function loadStories() {
  function requireNonExamplesInContext(requireContext) {
    return requireContext
      .keys()
      .filter(key => !key.includes('examples'))
      .map(filename => requireContext(filename))
  }

  const list = []
  list.push(require.context('../stories', true, /story.tsx$/))

  // 1. each require context
  // 2. get all files in the context
  // 3. dynamically require them
  list.forEach(requireContext => requireContext.keys().map(requireContext))
}

configure(loadStories, module)
