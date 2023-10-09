import error from "../../../public/images/404-error.jpg"
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
                 <div className='flex justify-center'>
            <img className='h-[500px] w-[500px] ' src={error} alt="" />
        </div>
     <div className='flex justify-center'>
     <Link to="/"><button className='btn bg-amber-300'>Back to home</button></Link>
     </div>
        </div>
    );
};

export default Error;