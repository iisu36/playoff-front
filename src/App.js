import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Standings from './Table'
import Tilanne from './Tilanne'

const baseUrl = '/anari'

const App = (props) => {

  const [stats, setStats] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get(baseUrl)
      .then(response => {
        console.log('promise fulfilled')
        setStats(response.data)
      })
  }, [])

  return (
    <div>

      <h1>Änäriveikkaus</h1>

      <Tilanne stats={stats} />

    </div>
  )
}

export default App 
