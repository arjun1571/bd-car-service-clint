import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg"

const Login = () => {
    return (
        <div className="hero w-full my-10 ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt=""  className='w-3/4'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center my-2">Login!</h1>
                <div className="card-body">
               
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;