import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tilanne from './Tilanne'

const baseUrl = '/anari'

const App = (props) => {

  const [stats, setStats] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        setStats(response.data)
      })
    axios
      .get('/anari/pelaajat')
      .then(response => {
        setPlayers(response.data)
      })
  }, [])

  return (
    <div>

      <h1 className="text-center">Änäri<img src="https://upload.wikimedia.org/wikipedia/en/e/e4/NHL_Logo_former.svg" alt="-" width="100" height="100"/>veikkaus</h1>

      <Tilanne stats={stats} players={players} />

    </div>
  )
}

export default App 
