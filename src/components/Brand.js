import { Link } from 'react-router-dom'

const Brand = ({name}) => {
    let brand = name == null ? "GENERICA" : name;
    return (
        <div className="brand"><Link to='/'>{brand}</Link></div>
        )
}

export default Brand;