import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tilanne from './Tilanne'

const baseUrl = '/anari'

const App = (props) => {

  const [stats, setStats] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get(baseUrl)
      .then(response => {
        console.log('stats')
        setStats(response.data)
      })
    axios
      .get('/anari/pelaajat')
      .then(response => {
        console.log('pelaajat')
        console.log(response.data)
        setPlayers(response.data)
      })
  }, [])

  return (
    <div>

      <h1 className="text-center">Änäriveikkaus</h1>

      <Tilanne stats={stats} players={players} />

    </div>
  )
}

export default App 
