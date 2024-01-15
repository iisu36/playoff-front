import { ids } from '../utils'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4px;

  img {
    width: 100%;
  }

  h4 {
    color: black;
  }
`

const Team = ({ team, name = false }) => {
  return (
    <Wrapper>
      <img
        src={`https://assets.nhle.com/logos/nhl/svg/${
          ids[team.teamId]
        }_light.svg`}
        alt="img"
      />

      <h4>
        {name && name} {team.points}
      </h4>
    </Wrapper>
  )
}

export default Team
