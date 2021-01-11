import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Popper from 'popper.js'

import './tilanne.css'

import React, { useState } from 'react'

const Tilanne = ({ stats }) => {

    let veikkaajat = [
        {
            standing: 0,
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
                    points: 0,
                },
                {
                    name: "Washington Capitals",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Calgary Flames",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Toronto Maple Leafs",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Dallas Stars",
                    division: "Central",
                    points: 0,
                },
                {
                    name: "Tamba Bay Lightning",
                    division: "Central",
                    points: 0,
                }
            ],
            points: 0,
            pisteporssi: 86
        },
        {
            standing: 0,
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
            points: 0,
            pisteporssi: 0
        },
        {
            standing: 0,
            name: "Huida",
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
                    name: "Boston Bruins",
                    division: "East",
                    points: 0,
                },
                {
                    name: "New York Islanders",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Toronto Maple Leafs",
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
            points: 0,
            pisteporssi: 80
        },
        {
            standing: 0,
            name: "Pääjoki",
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
                    name: "Washington Capitals",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Toronto Maple Leafs",
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
            points: 0,
            pisteporssi: 76
        },
        {
            standing: 0,
            name: "Samppa",
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
                    name: "Washington Capitals",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Calgary Flames",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Toronto Maple Leafs",
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
            points: 0,
            pisteporssi: 81
        },
        {
            standing: 0,
            name: "Saku",
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
                    name: "Pittsburgh Penguins",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Calgary Flames",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Montreal Canadiens",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Chicago Blackhawks",
                    division: "Central",
                    points: 0,
                },
                {
                    name: "Dallas Stars",
                    division: "Central",
                    points: 0,
                }
            ],
            points: 0,
            pisteporssi: 81
        },
        {
            standing: 0,
            name: "Halminen",
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
                    points: 0,
                },
                {
                    name: "Washington Capitals",
                    division: "East",
                    points: 0,
                },
                {
                    name: "Edmonton Oilers",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Toronto Maple Leafs",
                    division: "North",
                    points: 0,
                },
                {
                    name: "Carolina Hurricanes",
                    division: "Central",
                    points: 0,
                },
                {
                    name: "Florida Panthers",
                    division: "Central",
                    points: 0,
                }
            ],
            points: 0,
            pisteporssi: 81
        },
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

    if (!stats.league || !stats.divisions) {
        return null
    }

    stats.league.map(team => {
        veikkaajat.map(veikkaaja => {
            veikkaaja.teams.map(joukkue => {
                if (team.team === joukkue.name) {
                    joukkue.points = team.points
                }
            })
        })
    })

    pointCounter()

    veikkaajat = veikkaajat.sort((a, b) => {

        if (a.points < b.points) return 1
        if (a.points > b.points) return -1

        if (a.points === b.points) {
            if (a.name.toUpperCase() < b.name.toUpperCase()) return -1
            else return 1
        }
    })

    let index = 1

    veikkaajat.map(veikkaaja => {
        veikkaaja.standing = index++
    })

    const updateStyle = {
        fontSize: 7
    }

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-6"> {/* veikkaustaulu */}

                    {veikkaajat.map(veikkaaja => {

                        return (
                            <div key={veikkaaja.name} className="row border border-dark rounded mt-2 bg-light"> {/* veikkaajalaatikko */}
                                <div className="col-1 mx-n2 font-weight-bolder"> {/* sijoitus */}
                                    <p>{veikkaaja.standing}.</p>
                                </div>
                                <div className="col-2 mr-3 font-weight-bolder"> {/* nimi */}
                                    <p>{veikkaaja.name}</p>
                                </div>
                                <div className="col-8"> {/* joukkuelaatikko */}

                                    {veikkaaja.teams.map(team => {

                                        const key = `${veikkaaja.name}${team.name}`

                                        const div = team.division.substring(0, 1)

                                        return (
                                            <div key={key} className="row border-bottom">
                                                <div className="col-1"> {/* divisioona */}
                                                    <p>{div}</p>
                                                </div>
                                                <div className="col-10 mr-n4"> {/* joukkue */}
                                                    <p>{team.name}</p>
                                                </div>
                                                <div className="col-1 mx-n1"> {/* joukkueen pisteet */}
                                                    <p>{team.points}</p>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className="col-1 mx-n2"> {/* yhteispisteet */}
                                    <h4>{veikkaaja.points}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="col-md-3"> {/* divisioonat */}

                    {stats.divisions.map(division => {

                        return (
                            <div className="row border border-dark rounded mt-2 bg-secondary"> {/* divisioona */}
                                <div className="col-12">
                                    <div key={division.division} className="row"> {/* divisioona otsikko */}
                                        <div className="col-12 text-center text-light">
                                            <h3>{division.division}</h3>
                                        </div>
                                    </div>


                                    {division.teams.map(team => {

                                        const key = `league${team.team}`

                                        return (
                                            <div key={key} className="row border-bottom border-dark font-weight-bold"> {/* joukkue */}
                                                <div className="col-1">
                                                    <p>{team.divisionRank}.</p>
                                                </div>
                                                <div className="col-10 mr-n4">
                                                    <p>{team.team}</p>
                                                </div>
                                                <div className="col-1 mr-2">
                                                    <p>{team.points}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="col-md-3 border border-dark rounded mt-2 bg-dark text-white font-weight-bold pr-0">
                    <h3>NHL</h3>

                    {stats.league.map(team => {

                        let date = team.lastUpdated.toString().substring(5, 16)

                        const key = `league${team.team}`
                        return (
                            <div key={key} className="row border-bottom">
                                <div className="col-1">
                                    <p>{team.leagueRank}.</p>
                                </div>
                                <div className="col-7">
                                    <p>{team.team}</p>
                                </div>
                                <div className="col-1 mx-n2">
                                    <p>{team.points}</p>
                                </div>
                                <div className="col-3 font-weight-light">
                                    <p style={updateStyle}>{date}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tilanne