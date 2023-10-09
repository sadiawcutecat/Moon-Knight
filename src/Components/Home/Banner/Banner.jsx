

const Banner = () => {
    return (
        <div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">

                    <div className='mt-60 px-20 w-[50vw] h-[600px] '>
                        <h1 className='text-4xl font-serif font-bold'>Flower Diamond Collection</h1>
                        <p className=' text-2xl my-4 font-serif'>Budget Jewellery Starting $140.99 </p>
                        <button className="btn bg-amber-300 sm:btn-sm md:btn-md lg:btn-lg font-serif font-bold">Read more</button>
                    </div>
                    <img src="/public/images/Antikschmuck-1536x1024.jpg.webp" className="w-[50vw] h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='mt-60 px-20 w-[60vw] h-[600px] '>
                        <h1 className='text-4xl font-serif font-bold'>New Diamond & Wedding Rings</h1>
                        <p className=' text-2xl my-4 font-serif'>Avail 15% of on making charges for all Jewellery</p>
                        <button className="btn bg-amber-300 sm:btn-sm md:btn-md lg:btn-lg font-serif font-bold">Read more</button>
                    </div>
                    <img src="/public/images/images.jpeg" className="w-[40vw] h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='mt-60 px-20 w-[60vw] h-[600px] '>
                        <h1 className='text-4xl font-serif font-bold'>Grace Designer Jewellery</h1>
                        <p className=' text-2xl my-4 font-serif'>Rings, Occasion Pieces, Pandora & More </p>
                        <button className="btn bg-amber-300 sm:btn-sm md:btn-md lg:btn-lg font-serif font-bold">Read more</button>
                    </div>
                    <img src="/public/images/images (1).jpeg" className="w-[40vw] h-[600px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;