import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './Table'

const App = (props) => {

  const [stats, setStats] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setStats(response.data)
      })
  }, [])

  return (
    <div>

      <h1>Änäriveikkaus</h1>

      <Table stats={stats} />

    </div>
  )
}

export default App 
