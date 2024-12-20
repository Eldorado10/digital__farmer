import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link  } from 'react-router-dom';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { toast } from 'react-toastify';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError] = useState('');
    const [
        signInWithEmailAndPassword
    ] = useSignInWithEmailAndPassword(auth);

    

    const handleLogin = data => {
        console.log(data);
        // signInWithEmailAndPassword(data.email, data.password);
        toast.success("Login success",data.message)
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-2xl '>
                <h2 className='text-4xl text-center font-bold tracking-widest font-serif hover:text-green-600'>Member Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs my-5">
                        <label className="label"> <span className="label-text ">E-mail</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-outline btn-success w-full text-xl mt-5' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='my-5 text-center tracking-wider'>New to Digital Farm ?<br /><Link className='text-accent font-bold mx-2 hover:text-secondary' to="/signup">Create a new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;