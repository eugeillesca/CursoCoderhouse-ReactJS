import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import Brand from './Brand';

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Brand name="todo moda"/>
                <CartWidget cant="3"/>
            </nav>
            <ItemListContainer />
        </>
        )
    
}


export default NavBar;