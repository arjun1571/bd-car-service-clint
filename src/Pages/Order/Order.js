import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from '../OrderRow/OrderRow';

const Order = () => {
    const {user}=useContext(AuthContext)
    const [order,setOrder]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    }, [user?.email])

    const deleteOrder =(id)=>{
        const proced = window.confirm("are you sure delete thid item");
        if(proced){
            fetch(`http://localhost:5000/orders/${id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert("delete success");
                    const remaning = order.filter(odr => odr._id !== id)
                    setOrder(remaning);
                }
            })
        }
}
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            order?.map(od=><OrderRow od={od} key={od._id} deleteOrder={deleteOrder}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;