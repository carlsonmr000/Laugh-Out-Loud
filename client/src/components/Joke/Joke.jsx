
import './Joke.css';
import { Link } from 'react-router-dom'

const Joke = (props) => {
    return (
        <>
            <Link className="joke" to={`/jokes/${props._id}`}>
                <div className="joke-title">{props.title}</div>
                <div className="joke-content">{props.name}</div>
            </Link>
        </>
    )
}
export default Joke