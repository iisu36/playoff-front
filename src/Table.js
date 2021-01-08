import React from 'react'

const Table = ({ stats }) => {

    console.log(stats)

    if (!stats.league) {

        return (
            <ul>
                <p>Hello</p>
            </ul>
        )
    }

    return (
        <ul>
            {stats.league.map(team =>
                <p key={team.team}>{team.team}</p>
            )}
        </ul>
    )
}

export default Table