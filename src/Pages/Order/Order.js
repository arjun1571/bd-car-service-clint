import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from '../OrderRow/OrderRow';

const Order = () => {
    const {user}=useContext(AuthContext)
    const [order,setOrder]=useState([])
    useEffect(()=>{
        fetch(`https://bd-car-service-server.vercel.app/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    }, [user?.email])

    const deleteOrder =(id)=>{
        const proced = window.confirm("are you sure delete thid item");
        if(proced){
            fetch(`https://bd-car-service-server.vercel.app/orders/${id}`,{
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
const handoleStatusUpdate = id =>{
    fetch(`https://bd-car-service-server.vercel.app/orders/${id}`,{
        method: "PATCH",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({status:"APProved"})
        
    })
    .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = order.filter(odr => odr._id !== id)
                const approving = order.find(odr => odr._id === id)
                approving.status = "Approved"

                const newOrders = [approving,...remaining];
                setOrder(newOrders)
            }
        })
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
                            order?.map(od=><OrderRow od={od} key={od._id} deleteOrder={deleteOrder} handoleStatusUpdate={handoleStatusUpdate}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;