import styled from 'styled-components'
import PlayerSeries from './PlayerSeries'

const Wrapper = styled.div`
  display: grid;
  border-bottom: 3px solid white;
  padding-bottom: 8px;
`

const NameWrapper = styled.div`
  display: flex;
  h2,
  .statleader {
    color: hsl(27.1, 87.7%, 58.4%);
    text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    text-transform: uppercase;
  }
  span {
    color: white;
  }

  .statleader {
    margin-left: auto;
    align-self: flex-end;
    padding-bottom: 4px;
  }
`

const Player = ({ player, playerRank, playerSeries, series }) => {
  return (
    <Wrapper>
      <NameWrapper>
        <h2>
          <span>{playerRank}.</span> {player.points} {player.name}{' '}
        </h2>
        <h4 className="statleader">{player.connsmythe}</h4>
      </NameWrapper>
      <PlayerSeries series={playerSeries}></PlayerSeries>
    </Wrapper>
  )
}

export default Player
