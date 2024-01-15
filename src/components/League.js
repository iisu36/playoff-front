import Team from './Team'
import styled from 'styled-components'

const League = ({ standings }) => {
  const Wrapper = styled.div``
  return (
    <Wrapper>
      <h3>NHL</h3>

      {Object.values(standings).map((team) => {
        const key = `league${team.teamName}`
        return <Team key={key} team={team} name={team.teamName}></Team>
      })}
    </Wrapper>
  )
}

export default League
