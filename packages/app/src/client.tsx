import * as React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

/**
 * @todo this file is only for browser, but we need provider on server as well
 * ^ so it is wrapping 2x
 */
hydrate(<App />, document.getElementById('root') as HTMLElement)
