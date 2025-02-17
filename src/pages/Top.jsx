
import { Link } from 'react-router-dom'

function Top() {
  return (
    <div>
      <Link to="/locate">Locate</Link> | <Link to="/sightseeing">Sightseeing</Link> | <Link to="/map">Map</Link>
    </div>
  )
}

export default Top

