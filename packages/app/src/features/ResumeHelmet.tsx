import * as React from 'react'
import Head from 'next/head'
import { ResumeContext, ResumeContextType } from './ResumeContext'

export default class ResumeHelmet extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const { summary, picture, name, profiles } = this.context.basics
    const description = summary
    const image = picture
    const title = name + ' Resume'

    const foundTwitter = profiles.find(x => x.network === 'twitter')

    if (process.env.NODE_ENV === 'development') {
      if (foundTwitter === undefined) {
        throw new Error('requires twitter for twitter cards')
      }
    }

    const twitter = foundTwitter!.username

    // initialProps.url?
    const domain = ''
    const url = ''

    /**
     * amp?
     */
    const labelValueList = [
      {
        label: '',
        value: '',
      },
    ]

    return (
      <>
        <Head>
          <meta property="og:image:secure_url" content={image} />
          <meta property="og:image" content={image} />
          <meta property="og:title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content={url} />
          <meta name="twitter:site" content={twitter} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:url" content={url} />
          {labelValueList.map((labelValueItem, index) => {
            const { label, value } = labelValueItem
            return (
              <>
                <meta
                  key={label + value + 'label'}
                  name={`twitter:label${index}`}
                  content={label}
                />
                <meta
                  key={label + value + 'value'}
                  name={`twitter:data${index}`}
                  content={value}
                />
              </>
            )
          })}
        </Head>
      </>
    )
  }
}
