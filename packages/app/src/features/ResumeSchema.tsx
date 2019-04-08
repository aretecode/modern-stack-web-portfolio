/**
 * could also make schema per component
 * but that wasn't needed here
 */
import * as React from 'react'
import { ResumeContext, ResumeContextType } from './ResumeContext'
import { Script } from './Script'

/**
 * could do this with a sealed obj
 * could also
 *  - nest the json for smaller js
 *  - but more in the request due to additional req
 *  - and also bigger cache...
 *
 * @see https://schema.org/PostalAddress
 * @see https://schema.org/Person
 *
 * @todo https://schema.org/knowsAbout for skills
 * @see http://blog.schema.org/2014/06/introducing-role.html
 * @see https://schema.org/Role
 * @see https://schema.org/OrganizationRole
 * @see https://schema.org/EmployeeRole
 */
function fromContextToSchema(context: ResumeContextType) {
  const { basics, work } = context

  const personSchema = {
    '@type': 'Person',
    name: basics.name,
    sameAs: basics.profiles.map(profile => profile.url),
    url: basics.website,
    email: basics.email,
    telephone: basics.telephone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: basics.city,
      addressRegion: basics.region,
      postalCode: basics.postalCode,
      streetAddress: basics.address,
    },
  }

  return {
    '@context': 'http://schema.org',
    '@graph': [
      personSchema,
      ...work.map(workItem => {
        return {
          '@type': 'Organization',
          name: workItem.company,
          member: {
            '@type': 'OrganizationRole',
            member: personSchema,
            startDate: workItem.startDate,
            endDate: workItem.endDate,
            roleName: workItem.position,
          },
        }
      }),
    ],
  }
}

export class ResumeSchema extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const schemaData = fromContextToSchema(this.context)
    return <Script children={schemaData} />
  }
}
