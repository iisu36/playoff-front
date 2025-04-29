import Player from './Player'

import styled from 'styled-components'

const Wrapper = styled.div`
  grid-area: players;
  display: grid;
  gap: 4px;
`

const Players = ({ players, series }) => {
  const countedPlayers = countPoints(players, series)
  let playerRank = 1

  return (
    <Wrapper>
      {countedPlayers.map((player) => {
        return (
          <Player
            key={player.name}
            player={player}
            playerRank={playerRank++}
            series={player.series}
          ></Player>
        )
      })}
    </Wrapper>
  )
}

const countPoints = (players, series) => {
  const countedPlayers = [...players]
  countedPlayers.forEach((player) => {
    player.points = 0
    player.series = structuredClone(series)
    const playerSeries = {}
    player.firstRound.forEach((s) => {
      playerSeries[s.seriesLetter] = {
        topWins: s.topWins,
        bottomWins: s.bottomWins,
      }
    })
    player.series.forEach((s) => {
      if (s.seriesAbbrev !== 'R1') return
      if (
        s.bottomSeedWins + s.topSeedWins === 7 &&
        playerSeries[s.seriesLetter].topWins === s.topSeedWins &&
        playerSeries[s.seriesLetter].bottomWins === s.bottomSeedWins
      ) {
        player.points += 5
      } else if (
        (s.topSeedWins === 4 &&
          playerSeries[s.seriesLetter].topWins === s.topSeedWins) ||
        (s.bottomSeedWins === 4 &&
          playerSeries[s.seriesLetter].bottomWins === s.bottomSeedWins)
      ) {
        player.points += 2
      } else if (
        s.topSeedWins + s.bottomSeedWins === 7 &&
        s.topSeedWins + s.bottomSeedWins ===
          playerSeries[s.seriesLetter].topWins +
            playerSeries[s.seriesLetter].bottomWins
      ) {
        player.points += 1
      }

      s.topSeedWins = playerSeries[s.seriesLetter].topWins
      s.bottomSeedWins = playerSeries[s.seriesLetter].bottomWins
    })
  })

  countedPlayers.sort((a, b) => {
    return b.points - a.points
  })
  return countedPlayers
}

export default Players
