import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyJewellery = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { user } = useContext(AuthContext);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [myJewellers, setMyJewellers] = useState([]);
    
    
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:5000/api/myJewellers?email=${user?.email}`);
                if (response.ok) {
                    const data = await response.json();
                    setMyJewellers(data);
                } else {
                    // Error occurred while fetching data
                    console.error('Error fetching data!');
                }
            };
    
            fetchData();
        }, [user?.email]);
        
        const handleDelete = id => {
            const proceed = confirm('Are You sure you want to delete');
            if (proceed) {
                fetch(`http://localhost:5000/api/myJewellers/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            alert('deleted successful');
                            const remaining = myJewellers.filter(myJeweller => myJeweller._id !== id);
                            setMyJewellers(remaining);
                        }
                    })
            }
        }
    
        const handleupdate = id => {
            fetch(`http://localhost:5000/api/myJewellers/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'update' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        const remaining = myJewellers.filter(myJeweller => myJeweller._id !== id);
                        const updated = myJewellers.find(myJeweller => myJeweller._id === id);
                        updated.status = 'confirm'
                        const newToys = [updated, ...remaining];
                        setMyJewellers(newToys);
                    }
                })
        }
     console.log(myJewellers);
    
    return (
        <div>
                   <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Toy Photo</th>
                        <th>Toy Name</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Sub_category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myJewellers?.map(myJeweller => <myjewellerRow
                        key={myJeweller._id}
                        // eslint-disable-next-line react/no-unknown-property
                        myJeweller={myJeweller}
                        // eslint-disable-next-line react/no-unknown-property
                        handleDelete={handleDelete}
                        // eslint-disable-next-line react/no-unknown-property
                        handleupdate={handleupdate}
                        ></myjewellerRow>
                        
                        
                        
                        )
                    }
                    

                </tbody>

            </table>
        </div>
        </div>
    );
};

export default MyJewellery;