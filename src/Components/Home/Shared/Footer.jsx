import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaTwitter  } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-amber-300">
                <div>
                   <img src="/public/logo_corano_125x.png" alt="" />
                    <p className="font-bold font-serif my-4">
                    We are a team of designers and developers that <br /> create high quality wordpress, shopify, Opencart 
                    </p>
                    <p className="font-bold font-serif">Copyright © 2023 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                       <Link><FaFacebookF style={{ fontSize: '2rem' }}></FaFacebookF></Link>
                       <Link><FaYoutube style={{ fontSize: '2rem' }}></FaYoutube></Link>
                       <Link><FaTwitter style={{ fontSize: '2rem' }}></FaTwitter></Link>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;