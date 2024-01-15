import { divisions } from '../utils'
import Team from './Team'

import styled from 'styled-components'

const colors = {
  Atlantic: 'hsl(354, 71%, 40%)',
  Central: 'hsl(41, 100%, 55%)',
  Metropolitan: 'hsl(17, 98%, 49%)',
  Pacific: 'hsl(220, 67%, 36%)',
}

const Wrapper = styled.div`
  grid-area: divisions;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: white;
  position: sticky;
  top: 8px;
  height: fit-content;
  gap: 4px;

  border: 3px solid white;
  border-radius: 12px;
  overflow: hidden;

  h2 {
    color: hsl(27.1, 87.7%, 58.4%);
    text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    text-transform: uppercase;
  }
`

const DivisionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => colors[props.division]};
`

const TeamsWrapper = styled.div`
  @media (max-width: 450px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
  }
`

const HeaderWrapper = styled.div`
  background-color: hsl(0, 0%, 10%);
  width: 100%;
  text-align: center;
  border-bottom: 3px solid white;
`

const Divisions = ({ standings }) => {
  return (
    <Wrapper>
      {divisions.map((division) => {
        return (
          <DivisionWrapper key={division} division={division}>
            <HeaderWrapper>
              <h2>{division.substring(0, 1)}</h2>
            </HeaderWrapper>
            <TeamsWrapper>
              {Object.values(standings)
                .filter((team) => team.division === division)
                .map((team) => {
                  const key = `${division}${team.teamId}`
                  return <Team key={key} team={team}></Team>
                })}
            </TeamsWrapper>
          </DivisionWrapper>
        )
      })}
    </Wrapper>
  )
}

export default Divisions
