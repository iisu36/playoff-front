import styled from 'styled-components'
import { divisions } from '../utils'
import { useReducer, useState } from 'react'
import axios from 'axios'

const Wrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const DivisionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const reducer = (state, action) => {
  if (state.teams.some((team) => team.teamId === action.teamId)) {
    return {
      teams: state.teams.filter((team) => team.teamId !== action.teamId),
    }
  } else {
    return { teams: [...state.teams, action] }
  }
}

const PlayerForm = ({ standings }) => {
  const [state, dispatch] = useReducer(reducer, { teams: [] })
  const [name, setName] = useState('')
  const [statLeader, setStatLeader] = useState('0')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({
      name: name,
      teams: state.teams,
      points: 0,
      statLeader: parseInt(statLeader),
    })
    axios
      .post('/anari/players', {
        name: name,
        teams: state.teams,
        points: 0,
        statLeader: parseInt(statLeader),
      })
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Player Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        {standings && (
          <DivisionWrapper>
            {divisions.map((division) => {
              return (
                <CheckboxWrapper key={division}>
                  <h2 key={division + 'header'}>{division}</h2>
                  {Object.values(standings)
                    .filter((team) => team.division === division)
                    .map((team) => {
                      return (
                        <label key={team.teamId} style={{ color: 'white' }}>
                          <input
                            type="checkbox"
                            onChange={() => dispatch({ teamId: team.teamId })}
                          />
                          {team.teamName}
                        </label>
                      )
                    })}
                </CheckboxWrapper>
              )
            })}
          </DivisionWrapper>
        )}

        <input
          type="text"
          placeholder="Stat Leader"
          value={statLeader}
          onChange={(event) => setStatLeader(event.target.value)}
        />
        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  )
}

export default PlayerForm
