import { Link } from 'react-router-dom'

const MenuItem = ({name}) => {
    return(
        <li>
             <Link to={`/category/${name}`}>{name}
                </Link>
        </li>
    );
}

export default MenuItem;