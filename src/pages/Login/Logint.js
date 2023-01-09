import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../hooks/UseToken';

const Login = () => {
    const {register,formState: {errors}, handleSubmit} = useForm();
    const { signIn, signInPopUp } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = UseToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, { replace: true })
    }

    const onSubmit = data => {
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
            
        })
        .catch(err => {
            console.error(err)
            setLoginError(err.message)
        })
    }

    const googleSignIn = () => {
        signInPopUp(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err))
    }

    const handleEmail = e => {
        console.log(e.target.value)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
            <h2 className='text-2xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full max-w-xs" onChange={handleEmail}/>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer'}})} type="password" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">forget password?</span>
                    </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className='btn btn-accent w-full' value='Login'/>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full' onClick={googleSignIn}>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;