/**
 * could add non amp fallback
 */
import * as React from 'react'
import Head from 'next/head'
import { ResumeContext, ResumeContextType } from './ResumeContext'

export default class GoogleDocument extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType
  render() {
    const { resumeWebsite } = this.context.basics
    return (
      <>
        <Head>
          <script
            async
            custom-element="amp-google-document-embed"
            src="https://cdn.ampproject.org/v0/amp-google-document-embed-0.1.js"
          />
        </Head>
        <amp-google-document-embed
          src={resumeWebsite}
          width="8.5"
          height="5"
          layout="responsive"
        />
      </>
    )
  }
}
