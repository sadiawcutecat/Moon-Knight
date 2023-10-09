import Marquee from "marquee"
import type1 from "/images/type1.jpg"
import type2 from "/images/type2.jpg"
import type3 from "/images/type3.jpg"
import type4 from "/images/type4.jpg"
import type5 from "/images/type5.jpg"
import type6 from "/images/type6.jpg"
import type7 from "/images/type7.jpg"

const Gallery = () => {
    return (
        <div>
            <div className='mt-12 mb-12 '>
                <h2 className=' text-4xl text-accent font-serif font-bold text-center my-9'> Toys Gallery By Age</h2>
                <Marquee speed={50} pauseOnClick={true}  >
                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type1} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-500 font-serif">Diamond</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type2} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-500 font-serif">Gold</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-slate-300  shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type3} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">3-5 Years</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type4} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">6-9 Years</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type5} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-500 font-serif">10-11 Years</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type6} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">12+ Years</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type6} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">12+ Years</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">

                        <img className='h-[250px] w-full' src={type7} alt="" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">12+ Years</h2>

                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                </Marquee>

            </div>
        </div>
    );
};

export default Gallery;