import { useContext } from "react";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../providers/AuthProvider"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        
        formState: { errors },
      } = useForm();

      const {createUser, updateUserProfile} = useContext(AuthContext);


      const onSubmit = data =>{
         console.log(data)
         createUser(data.email, data.password)
         .then(result =>{
          const loggedUser = result.user;
          
          Swal.fire({
            title: 'User Login Successful',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
          .then(()=>{
            console.log('user profile info updated')
            reset();

          })
          .catch(error => console.log(error))
         })
      };
    
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required: true })}  placeholder="Name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered"  />
          {errors.photoURL && <span className="text-red-600">Photo URl is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password" , { required: true , minLength:6, maxLength:20})} name="password" placeholder="password" className="input input-bordered" />
          {errors.password?.type==='required' && <span className="text-red-600">Password is required</span>}
          {errors.password?.type==='minLength' && <span className="text-red-600">Password must be 6 characters</span>}
          {errors.password?.type==='minLength' && <span className="text-red-600">Password must less than 20 characters</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        
        </div>
      </form>
      <p><small>Already have an Account <Link to='/login'>Login</Link></small></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;