import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import logo from "../../../../public/images/logo_corano_125x.png"
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-amber-300 font-serif font-bold px-4">
                <div className="navbar-start">
                    <img className="h-9 " src={logo} alt="" />

                </div>
                <div className="navbar-center  lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <Link to='/'><li><a>Home</a></li></Link>




                        {user && <Link to='/AllToys'><li><a>All jewelry</a></li></Link>}
                        {user && <Link to='/myToys'> <li><a>My jewelry</a></li></Link>}
                        {user && <Link to='/AddToys'><li><a>Add jewelry</a></li></Link>}
                        <Link to='/blogs'><li><a>Blogs</a></li></Link>


                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {user && <FaUserCircle style={{ fontSize: '2rem' }} className="" />}

                    {user ?
                        <Link to='/SignUp'>
                            <button onClick={() => handleSignOut()} className=" py-2 px-5 border border-white">Sing Out</button>
                        </Link>
                        :
                        <Link to='/login'>
                            <button className=" py-2 px-5 border border-white">login</button>
                        </Link>
                    }







                </div>
            </div>
        </div>
    );
};

export default Navbar;