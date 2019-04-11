import * as React from 'react'
import ResumePage from '../pages/ResumePage'
import AboutPage from '../pages/AboutPage'
import Footer from './features/Footer'
import Header from './features/Header'
import AppWrap from './AppWrap'
import { ResumeSchema } from './features/ResumeSchema'
import GoogleDocument from './features/GoogleDocument'
import { StyledVectorFilter } from './features/VectorFilter'
import { AppStyles, BelowTheFoldStyles } from './AppStyles'
/**
 * currently am importing from here @@HACK
 * as a way to load data and put it in ls
 * before we have a UI for doing the mutation
 *
 * @example
 *    import { resumeKeyValStore } from './storage'
 *    resumeKeyValStore.set('resume', resume)
 */
// import './__resume'
import './apolloStateRehydrate'

/**
 * @todo can also overlay the image as absolute with filter and opacity
 */
export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <AppStyles />
        <GoogleDocument />
        <AppWrap>
          <Header />
          <ResumeSchema />
          {this.props.children}
          <ResumePage />
          <AboutPage />
          <Footer />
          <StyledVectorFilter />
        </AppWrap>
        <BelowTheFoldStyles />
      </>
    )
  }
}
