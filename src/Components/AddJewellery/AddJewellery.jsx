// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

const AddJeweller = () => {
    // const { user } = useContext(AuthContext);

    const handleAddJeweller = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller_name = form.seller_name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value
        const email = form.seller_email.value


        const jewellers = {
            toys_name: name,
            photo,
            seller_name,
            email,
            sub_category,
            price,
            rating,
            quantity
        }

        console.log(jewellers);

        fetch(`http://localhost:5000/api/jewellers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jewellers)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
              
            })

    }


    return (
        <div>
             <div className="hero  bg-base-200">
                <div className="w-2/3 hero-content flex-col lg:flex-col">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center text-amber-300 font-bold">Add Jewellery</h1>
                            <form onSubmit={handleAddJeweller}>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input type="text" name='seller_name' placeholder="seller name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Seller Email</span>
                                        </label>
                                        <input type="email" name='seller_email'  placeholder="seller email" className="input input-bordered "  />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold'>
                                    <div className="form-control w-1/2">

                                        <label className='mt-2' htmlFor="category">Sub-Category</label>
                                        <select className='h-12 mt-2 input input-bordered' name="sub_category" id='sub-category' >

                                            <option value="Diamond">Diamond</option>
                                            <option value="Gold">Gold</option>
                                            <option value="Silver">Silver</option>
                                        </select>

                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex gap-6 font-bold '>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="number" name='rating' placeholder="rating" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-1/2">
                                        <label className="label">
                                            <span className="label-text">Available quantity</span>
                                        </label>
                                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />
                                    </div>
                                </div>
                                <div className='flex justify-center mt-6'>
                                    <button className="btn btn-wide bg-amber-300  font-bold font-serif ">Details description</button>
                                </div>
                                <button type='submit' className=" my-9 btn btn-block bg-amber-300 font-serif font-bold">
                                    ADD A Jewellery</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJeweller;