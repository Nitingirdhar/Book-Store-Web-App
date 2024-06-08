import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login </h3>

          {/*Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })} 
            /><br/>
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/*Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })} 
            /><br/>
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/*Button */}
          <div className="mt-3">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <br />
            <p className="mt-1 text-sm">
              {" "}
              Not registered?
              <Link  to="/signup" className="underline text-blue-500 cursor-pointer" >
                Signup
              </Link>
            </p>
          </div>

          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <button  className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
