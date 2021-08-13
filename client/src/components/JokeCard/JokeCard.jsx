import './JokeCard.css';
import { Link } from 'react-router-dom'

const JokeCard = (props) => {
    return (
        <div className="joke-card">
            <Link className="card" to={`/jokes/${props._id}`}>
                <div>View</div>
            </Link>
        </div>
    )
}

export default JokeCard