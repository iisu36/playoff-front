import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
  }

  h4 {
    color: white;
  }
`

const Team = ({ team }) => {
  return (
    <Wrapper>
      <img src={team.teamLogo} alt="img" />

      {team.wins === 4 ? (
        <h4 style={{ color: 'hsl(27.1, 87.7%, 58.4%)' }}>{team.wins ?? 0}</h4>
      ) : (
        <h4>{team.wins ?? 0}</h4>
      )}
    </Wrapper>
  )
}

export default Team
