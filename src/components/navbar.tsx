// contrl+space chapsi then ash ce
import logo from '../assets/logo.png'
import { BsCoin } from "react-icons/bs";

const Navbar = ({coins}:{coins:number}) => {
    return (

        <nav className="mx-auto container">

            
            <div className="container mx-auto flex justify-between items-center py-4">
                <img src={logo} alt="Logo" />

                <ul className="flex gap-4 items-center">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>

                <strong className="flex gap-2 items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-200 text-gray-800">
                    <BsCoin />{coins}
                </strong>
            </div>

        </nav>

    );
};

export default Navbar;