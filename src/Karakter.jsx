
import { faBirthdayCake, faCakeCandles, faTextHeight, faVenusMars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Karakter({person}) {

    return (
        <>
            <div className="col-md-6">
            <h1>{person.name}</h1>
            <p><FontAwesomeIcon icon={faBirthdayCake} /> Birth Year: {person.birth_year}</p>
            <p><FontAwesomeIcon icon={faVenusMars} /> Gender: {person.gender}</p>
            <p> Height: {person.height}</p>
            <p> Mass: {person.mass}</p>
            </div>
        </>
    )
}

export default Karakter