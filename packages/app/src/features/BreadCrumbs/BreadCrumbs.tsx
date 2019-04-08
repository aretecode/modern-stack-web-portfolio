/**
 * @todo connect to query params
 * @todo put in scroll action of Header
 * @todo schema
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
        name: 'Books',
        item: 'https://jameswiens.com/books',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Authors',
        item: 'https://jameswiens.com/books/authors',
      },
    ],
  }
}

export default class BreadCrumbs extends React.PureComponent {
  //
}
