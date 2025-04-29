import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Players from './components/Players'
import Playoffs from './components/Series'

import PlayerForm from './components/PlayerForm'

const baseUrl = '/playoff'

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

  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'header'
    'divisions'
    'players';

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
  const [series, setSeries] = useState(false)
  const [players, setPlayers] = useState(false)

  useEffect(() => {
    axios.get(baseUrl).then(
      (response) => {
        setSeries(response.data.series)
      },
      (reason) => {
        console.log(reason)
        setSeries('error')
      }
    )
    axios.get('/anari/players').then((response) => {
      setPlayers(response.data)
    })
  }, [])

  return (
    <Wrapper>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/NHL_Logo_former.svg"
          alt="-"
        />
        <h1>PLAYOFFS</h1>
      </header>

      {!series && <h1>Loading...</h1>}
      {series === 'error' && <h1>Error in nhl.com</h1>}
      {series && (
        <>
          <Playoffs series={series}></Playoffs>
        </>
      )}

      {series && players && (
        <Players series={series} players={players}></Players>
      )}
      {/* {<PlayerForm standings={standings} />} */}
    </Wrapper>
  )
}

export default App
