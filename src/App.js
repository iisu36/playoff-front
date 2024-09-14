import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Players from './components/Players'
import StatLeader from './components/StatLeader'
import Divisions from './components/Divisions'
import League from './components/League'

const baseUrl = '/anari'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${3 / 4}fr ${1 / 4}fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'header header'
    'players divisions';
  gap: 8px;
  padding: 8px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'header'
      'divisions'
      'players';
  }

  header {
    grid-area: header;
    display: flex;
    align-items: center;
    max-height: 3rem;
  }

  header img {
    width: 3rem;
  }

  header h1,
  header h4 {
    color: hsl(27.1, 87.7%, 58.4%);
    text-shadow: -1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
  }

  header h4 {
    margin-left: auto;
    align-self: flex-end;
  }
`

const App = () => {
  const [standings, setStandings] = useState(false)
  const [players, setPlayers] = useState(false)
  const [statLeader, setStatLeader] = useState(false)

  useEffect(() => {
    axios.get(baseUrl).then(
      (response) => {
        setStandings(response.data)
      },
      (reason) => {
        console.log(reason)
        setStandings('error')
      }
    )
    axios.get('/anari/players').then((response) => {
      setPlayers(response.data)
    })
    axios.get('/anari/statLeader').then(
      (response) => {
        setStatLeader(response.data)
      },
      (reason) => {
        console.log(reason)
        setStatLeader('error')
      }
    )
  }, [])

  return (
    <Wrapper>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e4/NHL_Logo_former.svg"
          alt="-"
        />
        <h1>VEIKKAUS</h1>
        {!statLeader && <h4>Loading...</h4>}
        {statLeader.name && (
          <h4>{`${statLeader.name}: ${statLeader.points}`}</h4>
        )}
        {statLeader === 'error' && <h4>Error in nhl.com</h4>}
      </header>

      {!standings && <h1>Loading...</h1>}
      {standings === 'error' && <h1>Error in nhl.com</h1>}
      {standings['ANA'] && (
        <>
          <Divisions standings={standings}></Divisions>
          {/* <League standings={standings}></League> */}
        </>
      )}

      {standings['ANA'] && players && (
        <Players
          standings={standings}
          players={players}
          statLeader={statLeader}
        ></Players>
      )}
    </Wrapper>
  )
}

export default App
