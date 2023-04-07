import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import{AuthContext} from "../../contexts/AuthProvider/AuthProvider"
const CheakOut = () => {
    const {title,_id,price}=useLoaderData()
    const {user}=useContext(AuthContext)

    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.fastName.value} ${form.lastName.value}`
        const email = user?.email || 'unregister';
        const message = form.message.value;
        const phone= form.yourPhone.value;

        const order = {
            service: _id,
            serviceName:title,
            price ,
            customer:name,
            email,
            phone,
            message
        }
        fetch("https://bd-car-service-server.vercel.app/orders",{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("order placed success")
                form.reset();
            }
        })
        .catch(error => console.error(error))

    }
    return (
        <div>
            <h2>You are about to :{title}</h2>
            <form onSubmit={handleSubmit} className='my-10' >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="fastName" type="text" placeholder="First Name" className="input input-bordered input-accent w-full " />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-accent w-full " />
                <input name="yourPhone" type="text" placeholder="Your Phone" className="input input-bordered input-accent w-full " />
                <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered input-accent w-full " />
                </div>
                <textarea name="message" className="textarea textarea-accent w-full" placeholder="Your message"></textarea>
            <input type="submit"  value="place your order" className="btn " />
            </form>
            
        </div>
    );
};

export default CheakOut;