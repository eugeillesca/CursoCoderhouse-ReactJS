import { Link } from 'react-router-dom'

const MenuItem = ({name}) => {
    return(
        <li>
             <Link to={`/category/${name}`}>{name}
                </Link>
            {/* <NavLink to=`/category/${name}`>{name}</NavLink> */}
        </li>
    );
}

export default MenuItem;