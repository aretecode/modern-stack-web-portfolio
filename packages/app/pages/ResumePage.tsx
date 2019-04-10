// tslint:disable
/**
 * @file @todo split styled pieces
 */
import * as React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { ResumeContext, ResumeContextType } from '../src/features/ResumeContext'
import { StyledCard } from '../src/features/Card'
import { StyledMain } from '../src/features/Main'
import { StyledSeparator } from '../src/features/Separator'
import { StyledLink } from '../src/features/Link'
import { StyledImage } from '../src/features/Image'
import { WorkType } from '../src/typings'

export const StyledGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-gap: 0.5rem;
  grid-auto-rows: auto;
`

/**
 * could use https://amp.dev/documentation/examples/components/amp-timeago/
 */
const StyledTime = styled.time`
  display: inline-flex;
`

/**
 * @see https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
 * @see https://addyosmani.com/blog/lazy-loading/
 *
 * @todo @@styles probably should align the card image to center
 *                and add blur mirror effect to sides for consistency
 */
const StyledCardImage = styled(StyledImage).attrs({
  loading: 'lazy',
})`
  max-width: 100%;
  filter: url(#green-tint);
`

const StyledCardFigure = styled.figure`
  margin: 0;
  padding: 0;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: calc(50vw - 2rem) calc(50vw - 2rem);
    grid-gap: 1rem;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    figcaption {
      padding: 1.25rem 0;
    }
  }
  @media (max-width: 1023px) {
    img {
      max-height: 44vh;
    }
  }
`

/**
 * could use date-fns here
 */
// function TimeRange({startDate, endDate}) {}
class TimeRange extends React.PureComponent<{
  endDate: string
  startDate: string
}> {
  render() {
    const { startDate, endDate } = this.props
    return (
      <>
        <StyledTime datetime={startDate}>{startDate}</StyledTime>
        <StyledSeparator />
        <StyledTime datetime={endDate}>{endDate}</StyledTime>
      </>
    )
  }
}

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
export default class ResumePage extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    return (
      <>
        <Helmet>
          <title>resume</title>
        </Helmet>
        <StyledMain>
          <StyledGrid>{this.context.work.map(renderWork)}</StyledGrid>
        </StyledMain>
      </>
    )
  }
}
