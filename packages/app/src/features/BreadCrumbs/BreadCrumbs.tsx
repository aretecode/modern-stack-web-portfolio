/**
 * @todo connect to query params
 * @todo put in scroll action of Header
 * @todo schema (data)
 * @todo not sure this is needed for this site
 */
import * as React from 'react'

function toBreadCrumbsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jameswiens.com/',
      },
    ],
  }
}

export default class BreadCrumbs extends React.PureComponent {
  //
}
