import { useEffect, useState } from "react";


const AllJewellery = () => {
    const [allJewellers, setAllJeweller] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/allJewellers`);
            if (response.ok) {
                const data = await response.json();
                setAllJeweller(data);
            } else {
                // Error occurred while fetching data
                console.error('Error fetching data!');
            }
        };

        fetchData();
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
        {
            allJewellers?.map(allJeweller => <>
            
                <div>

                    <div className="card w-96 h-auto bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={allJeweller.photo} alt="toy img" className="rounded-xl h-32" />
                        </figure>

                        <div className="card-body items-center text-center ">
                            <h2 className="card-title text-orange-500 className='font-bold font-serif'">{allJeweller.toys_name}</h2>
                            <p className='font-bold font-serif'>Seller-Name: {allJeweller.seller_name}</p>
                            <p className='font-bold font-serif'>Sub-category: {allJeweller.sub_category}</p>
                            <p className='font-bold font-serif'>Price: $ {allJeweller.price}</p>
                            <p className='font-bold font-serif'>Available-Quantity: {allJeweller.quantity}</p>
                            <div className="card-actions">
                                <button className="btn bg-amber-300 className='font-bold font-serif'">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>)
        }
    </div>
    );
};

export default AllJewellery;