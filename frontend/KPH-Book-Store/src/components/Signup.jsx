import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen items-center justify-center border">
      <div className='border-[2px] shadow-md p-5 rounded-md'>
        <div>
          <h3 className="font-bold text-lg">Signup</h3>

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Button */}
          <div className="mt-3">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Signup
            </button>
            <br />
            <span className="mt-1 text-sm">
              {" "}
              Have an account? 
              <Link to="/" className="underline text-blue-500 cursor-pointer">
                Login
              </Link>
            </span>
          </div>

          <div className="modal-action">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn">Close</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
