import * as React from 'react'
import Helmet from 'react-helmet'

export default class ResumeHelmet extends React.PureComponent {
  render() {
    const description = ''
    const image = ''
    const title = ''
    // initialProps.url?
    const domain = ''
    const twitter = '@name'
    const url = ''
    const labelValueList = [
      {
        label: '',
        value: '',
      },
    ]

    return (
      <>
        <Helmet>
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
        </Helmet>
      </>
    )
  }
}
