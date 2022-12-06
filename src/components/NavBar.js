import CartWidget from './CartWidget';
import Brand from './Brand';
import Menu from './Menu';

const NavBar = () => {
    return (
        <>
            <nav className='navbar'>
                <Brand name="todo moda"/>
                <CartWidget />
            </nav>
            <Menu />
        </>
        )
    
}


export default NavBar;