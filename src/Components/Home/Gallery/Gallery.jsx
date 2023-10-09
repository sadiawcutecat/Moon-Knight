

const Gallery = () => {
    return (
        <div>
            <div className='mt-12 mb-12 '>
                <h2 className=' text-4xl text-accent font-serif font-bold text-center my-9'> Toys Gallery By Age</h2>
                <Marquee speed={50} pauseOnClick={true}  >
                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">
                        
                            <img className='h-[250px] w-full' src={kid1} alt="" />
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-500 font-serif">0-18 Months</h2>
                            
                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">
                       
                        <img className='h-[250px] w-full' src={kid2} alt="" />
                        
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-500 font-serif">19-36 Months</h2>
                            
                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-slate-300  shadow-xl ms-5">
                        
                        <img className='h-[250px] w-full' src={kid3} alt="" />
                       
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">3-5 Years</h2>
                        
                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">
                      
                        <img className='h-[250px] w-full' src={kid4} alt="" />
                   
                        <div className="card-body items-center text-center">
                            <h2 className="card-title  text-orange-500 font-serif">6-9 Years</h2>
                        
                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">
                        
                        <img className='h-[250px] w-full' src={kid5} alt="" />
                     
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-orange-500 font-serif">10-11 Years</h2>
                      
                            <div className="card-actions">
                                <button className="btn btn-accent text-white font-bold font-serif">show More Toys</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96  bg-slate-300 shadow-xl ms-5">
                        
                        <img className='h-[250px] w-full' src={kid6} alt="" />
                      
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