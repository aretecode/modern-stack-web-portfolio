// tslint:disable
/**
 * @file @todo split styled pieces
 */
import * as React from 'react'
import Head from 'next/head'
import {
  ResumeContext,
  ResumeContextType,
} from '../../src/features/ResumeContext'
import { StyledCard } from '../../src/features/Card'
import { StyledMain } from '../../src/features/Main'
import { StyledLink } from '../../src/features/Link'
import { WorkType } from '../../src/typings'
import { StyledGrid, StyledCardImage, StyledCardFigure } from './styled'
import { TimeRange } from './TimeRange'

function renderWork(work: WorkType) {
  return (
    <StyledCard key={work.company + work.startDate + work.endDate}>
      <StyledCardFigure>
        <StyledCardImage
          src={work.picture}
          alt={`work picture for ${work.company}`}
        />
        <figcaption>
          <header>{work.company}</header>
          <section>
            <strong>{work.position}</strong>
            <p>{work.highlights}</p>
            <p>{work.summary}</p>
            <StyledLink to={work.website}>{work.website}</StyledLink>
          </section>
          <section>
            <TimeRange startDate={work.startDate} endDate={work.endDate} />
          </section>
        </figcaption>
      </StyledCardFigure>
    </StyledCard>
  )
}

/**
 * @todo now Provide `work` & `basics` ?
 *
 * @todo could provide a cool graph to sort resumes too and highlight
 *       like build your own github
 */
export class ResumePage extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const { name, summary } = this.context.basics
    const titleText = `${name}'s Resume`

    return (
      <>
        <Head>
          <title>{titleText}</title>
          <meta name="description" content={summary || titleText} />
          <meta name="theme-color" content={'#6200ee'} />
          <meta property="og:site_name" content={titleText} />
          <meta property="og:locale" content="en_CA" />
        </Head>
        <StyledMain>
          <StyledGrid>{this.context.work.map(renderWork)}</StyledGrid>
        </StyledMain>
      </>
    )
  }
}
