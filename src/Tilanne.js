import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Popper from 'popper.js'

import './tilanne.css'

import React from 'react'

const Tilanne = ({ stats, players, porssi }) => {

    let veikkaajat = players

    if (!stats.league || !stats.divisions || !veikkaajat) {
        return null
    }

    const pointCounter = () => {

        veikkaajat.map(veikkaaja => {

            let points = 0

            veikkaaja.teams.map(team => {
                points += team.points
            })

            veikkaaja.points = points
        })
    }

    stats.league.map(team => {
        veikkaajat.map(veikkaaja => {
            veikkaaja.teams.map(joukkue => {
                if (team.team === joukkue.name) {
                    joukkue.points = team.points
                }
            })

            veikkaaja.teams.sort((a, b) => {
                if (a.points < b.points) return 1
                if (a.points > b.points) return -1

                if (a.points === b.points) {
                    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1
                    else return 1
                }
            })
        })
    })

    pointCounter()

    veikkaajat = veikkaajat.sort((a, b) => {

        if (a.points < b.points) return 1
        if (a.points > b.points) return -1

        if (a.points === b.points) {
            const aPorssi = Math.abs(a.pisteporssi - porssi.points)
            const bPorssi = Math.abs(b.pisteporssi - porssi.points)
            if (aPorssi < bPorssi) return -1
            return 1
        }
    })

    let index = 1

    veikkaajat.map(veikkaaja => {
        veikkaaja.standing = index++
    })

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-sm-4"> {/* veikkaustaulu */}

                    <div key={porssi.name} className="row border border-dark rounded mt-1 bg-warning"> {/* pörssilaatikko */}
                        <div className="col-12 mt-1">
                            <div className="row">
                                <div className="col-9 font-weight-bolder px-1"> {/* nimi */}
                                    <h4>Pörssi: {porssi.name}</h4>
                                </div>
                                <div className="col-3 text-right pr-1"> {/* pisteet */}
                                    <h4>{porssi.points} p.</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    {veikkaajat.map(veikkaaja => {

                        return (
                            <div key={veikkaaja.name} className="row border border-dark rounded mt-1 bg-light"> {/* veikkaajalaatikko */}
                                <div className="col-12 mt-1">
                                    <div className="row">
                                        <div className="col-9 font-weight-bolder px-1"> {/* sijoitus ja nimi */}
                                            <h4>{veikkaaja.standing}. {veikkaaja.name}</h4>
                                        </div>
                                        <div className="col-3 text-right pr-1"> {/* yhteispisteet */}
                                            <h4>{veikkaaja.points}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 px-0"> {/* joukkuelaatikko */}

                                    {veikkaaja.teams.map(team => {

                                        const key = `${veikkaaja.name}${team.name}`

                                        const div = team.division.substring(0, 1)

                                        return (
                                            <div key={key} className="row border-bottom mx-0">
                                                <div className="col-1 px-1">
                                                    <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.teamId}.svg`} alt="img" width="20px" height="20px" />
                                                </div>
                                                <div className="col-10 pr-0 pl-2"> {/* joukkue */}
                                                    <p>{team.name}</p>
                                                </div>
                                                <div className="col-1 pl-0 text-right"> {/* joukkueen pisteet */}
                                                    <p>{team.points}</p>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    <div className="row mx-0 bg-warning rounded-bottom">
                                        <div className="col-9 pl-2">
                                            <p>Pistepörssi:</p>
                                        </div>
                                        <div className="col-3 pr-2 text-right"> {/* joukkueen pisteet */}
                                            <p>{veikkaaja.pisteporssi} p.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="col-sm-4"> {/* divisioonat */}

                    {stats.divisions.map(division => {

                        return (
                            <div key={division.division} className="row border-dark rounded mt-1 bg-secondary"> {/* divisioona */}
                                <div className="col-12 px-0 mx-0">
                                    <div className="row"> {/* divisioona otsikko */}
                                        <div className="col-12 text-center text-light">
                                            <h3>{division.division}</h3>
                                        </div>
                                    </div>


                                    {division.teams.map(team => {

                                        const key = `divisiom${team.team}`

                                        return (
                                            <div key={key} className="row border-bottom border-dark font-weight-bold mx-0"> {/* joukkue */}
                                                <div className="col-1 px-1">
                                                    <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.teamId}.svg`} alt="img" width="20px" height="20px" />
                                                </div>
                                                <div className="col-10 pr-0 pl-2"> {/* joukkue */}
                                                    <p>{team.team}</p>
                                                </div>
                                                <div className="col-1 pl-0 text-right"> {/* joukkueen pisteet */}
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

                <div className="col-sm-4">
                    <div className="row border border-dark rounded mt-1 bg-dark text-white font-weight-bold">
                        <div className="col-12">
                            <h3 className="text-center">NHL</h3>

                            {stats.league.map(team => {

                                const key = `league${team.team}`
                                return (
                                    <div key={key} className="row border-bottom">
                                        <div className="col-1 px-1">
                                            <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.teamId}.svg`} alt="img" width="20px" height="20px" />
                                        </div>
                                        <div className="col-10 pr-0 pl-2"> {/* joukkue */}
                                            <p>{team.team}</p>
                                        </div>
                                        <div className="col-1 pl-0 text-right"> {/* joukkueen pisteet */}
                                            <p>{team.points}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="row">

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tilanne