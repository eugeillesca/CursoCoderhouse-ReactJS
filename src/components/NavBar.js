import CartWidget from './CartWidget';
import Brand from './Brand';
import Menu from './Menu';

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Brand name="todo moda"/>
                <CartWidget cant="3"/>
            </nav>
            <Menu />
        </>
        )
    
}


export default NavBar;