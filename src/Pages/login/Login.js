import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg"
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {logInUser}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    const from = location.state?.from?.pathname || '/'
    const handleLogin =(event)=>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            logInUser(email,password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true})
                from.reset()
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero w-full my-10 ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt=""  className='w-3/4'/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center my-2">Login!</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="login" />
                    </div>
                    <p className='text-center'>Have a new user ?<Link to="/signin" className='font-bold underline text-red-700'>Signin</Link> </p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;