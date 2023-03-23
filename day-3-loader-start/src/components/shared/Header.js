import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

    const {cartAmount} = useSelector(state => state.cart);
    // du prøvde først const nyttNavn = useSelector (state => state.cart.cartAmount) så du destructer her og bruker navnet på det med en gang

    return (
        <header className="flex flex-row justify-between items-center p-8 mb-6">
            <NavLink to={'/'}>                  
                <div className="flex flex-row justify-between items-center gap-2">
                    <img className="w-6" src='/hexagon-bold.svg'/>
                    <p className=" font-bold">Shits n stuff</p>
                </div>
            </NavLink>
            <div className="flex flex-row items-center gap-12">
            <NavLink to="/" className={({isActive}) => isActive ? "underline text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800" : "text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800"}>
                All Products
            </NavLink>
            <NavLink to="/contactus" className={({isActive}) => isActive ? "underline text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800" : "text-xs lg:text-sm font-medium text-gray-700 hover:text-gray-800"}>
                Contact Us
            </NavLink>
            <NavLink to={'/cart'}>       
            <div className="flex flex-row justify-between items-center gap-2">
                <img className="w-6" src='/shopping-cart-simple.svg'/>
                <span>{cartAmount}</span>
            </div>
            </NavLink>
            </div>
         
        </header>
    )
}
 
export default Header;