const StatLeader = ({ statLeader }) => {
  return (
    <div>
      <h4>
        Pörssi: {statLeader.name} {statLeader.points} p.
      </h4>
    </div>
  )
}

export default StatLeader
