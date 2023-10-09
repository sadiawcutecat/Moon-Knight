


const myjewellerRow = ({ myJeweller, handleDelete, handleupdate }) => {
    const { _id, jewellery_name, photo, seller_name, email, sub_category, price, rating, quantity, status } = myJeweller;
    console.log(myJeweller);

    return (
        <div>
        <tr>


<td>
    <div className="avatar">
        <div className="rounded w-24 h-24">
            <img src={photo} alt="Avatar Tailwind CSS Component" />
        </div>
    </div>
</td>
<td>
    {jewellery_name}
</td>
<td>{seller_name}</td>
<td>{email}</td>
<td>{sub_category}</td>
<td>${price}</td>
<td>{rating}</td>
<td>{quantity}</td>
<th>
    <button onClick={() => handleDelete(_id)} className="btn bg-amber-300 text-white">
        Delete
    </button>
</th>
<th>
    {
        status === 'update' ? <span className="font-bold text-success">Updated</span> :
            <button onClick={() => handleupdate(_id)} className="btn btn-outline bg-amber-300">Update</button>
    }
</th>

</tr>
        </div>
    );
};

export default myjewellerRow;