"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
interface IFormInput {
  name: string;
  email: string;
  password: string;
}
const Register = (): JSX.Element => {
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();
  const handleRegister: SubmitHandler<IFormInput> = (data) => {
    setError(""); // Clear previous error
    const { name, email, password } = data;
    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Mock registration function (replace with your authentication logic)
    console.log({ name, email, password });
    reset();
  };

  return (
    <div className="flex items-center text-black justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md sm:w-[90%] md:w-[500px]">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {error && <p>{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-accent rounded-md hover:bg-accent-dark focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
