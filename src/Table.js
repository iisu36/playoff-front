import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Popper from 'popper.js'

import React, { useState} from 'react'

const Standings = ({ stats }) => {

    const veikkaajat = [
        {
            name: "Kuukkeli",
            teams: [
                {
                    name: "Colorado Avalanche",
                    division: "West",
                    points: 0,
                },
                {
                    name: "St. Louis Blues",
                    division: "West",
                    points: 0,
                },
                {
                    name: "Pittsburgh Penguins",
                    division: "East",
                    points: 4,
                },
                {
                    name: "Washington Capitals",
                    division: "East",
                    points: 13,
                },
                {
                    name: "Calgary Flames",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Toronto Maple Leafs",
                    division: "North",
                    points: 3,
                },
                {
                    name: "Dallas Stars",
                    division: "Central",
                    points: 45,
                },
                {
                    name: "Tamba Bay Lightning",
                    division: "Central",
                    points: 87,
                }
            ],
            points: 0
        },
        {
            name: "Karvanen",
            teams: [
                {
                    name: "Colorado Avalanche",
                    division: "West",
                    points: 0,
                },
                {
                    name: "Vegas Golden Knights",
                    division: "West",
                    points: 0,
                },
                {
                    name: "Boston Bruins",
                    division: "East",
                    points: 0,
                },
                {
                    name: "New York Rangers",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Edmonton Oilers",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Vancouver Canucks",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Carolina Hurricanes",
                    division: "Central",
                    points: 0,
                },
                {
                    name: "Tamba Bay Lightning",
                    division: "Central",
                    points: 0,
                }
            ],
            points: 0
        }
    ]

    const pointCounter = () => {

        veikkaajat.map(veikkaaja => {

            let points = 0
            
            veikkaaja.teams.map(team => {
                points += team.points
            })

            veikkaaja.points = points
        })
    }

    pointCounter()

    if (!stats.league || !stats.divisions) {
        return null
    }

    const style = {
        fontSize: 9
    }

    return (
        <div className="d-flex flex-row justify-content-around">

            <div>
                <h3>Pisteet</h3>
                <table>
                    <tbody>

                        {veikkaajat.map(veikkaaja => {

                            return (
                                <>
                                    <tr>
                                        <td rowSpan="8">{veikkaaja.name}</td>
                                        <td rowSpan="2">{veikkaaja.teams[0].division}</td>
                                        <td>{veikkaaja.teams[0].name}</td>
                                        <td>{veikkaaja.teams[0].points}</td>
                                        <td rowSpan="8">Yhteensä {veikkaaja.points}</td>
                                    </tr>
                                    <tr>
                                        <td>{veikkaaja.teams[1].name}</td>
                                        <td>{veikkaaja.teams[1].points}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="2">{veikkaaja.teams[2].division}</td>
                                        <td>{veikkaaja.teams[2].name}</td>
                                        <td>{veikkaaja.teams[2].points}</td>
                                    </tr>
                                    <tr>
                                        <td>{veikkaaja.teams[3].name}</td>
                                        <td>{veikkaaja.teams[3].points}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="2">{veikkaaja.teams[4].division}</td>
                                        <td>{veikkaaja.teams[4].name}</td>
                                        <td>{veikkaaja.teams[4].points}</td>
                                    </tr>
                                    <tr>
                                        <td>{veikkaaja.teams[5].name}</td>
                                        <td>{veikkaaja.teams[5].points}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan="2">{veikkaaja.teams[6].division}</td>
                                        <td>{veikkaaja.teams[6].name}</td>
                                        <td>{veikkaaja.teams[6].points}</td>
                                    </tr>
                                    <tr>
                                        <td>{veikkaaja.teams[7].name}</td>
                                        <td>{veikkaaja.teams[7].points}</td>
                                    </tr>

                                    <br></br>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div>
                {stats.divisions.map(division => {
                    return (
                        <div key={division.division}>
                            <h3>{division.division}</h3>
                            <table>
                                <tbody>
                                    {division.teams.map(team => {

                                        const key = `division${team.id}`

                                        return (
                                            <tr key={key}>
                                                <td>{team.divisionRank}.</td>
                                                <td>{team.team}</td>
                                                <td>{team.points}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                })}
            </div>

            <div>
                <h3>NHL</h3>
                <table>
                    <tbody>
                        {stats.league.map(team => {

                            let date = team.lastUpdated.toString().substring(5, 16)

                            const key = `league${team.id}`
                            return (
                                <tr key={key}>
                                    <td>{team.leagueRank}.</td>
                                    <td>{team.team}</td>
                                    <td>{team.points}</td>
                                    <td style={style}>{date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Standings