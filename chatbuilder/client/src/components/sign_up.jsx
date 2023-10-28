import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear any previous validation errors for the input that is being modified
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const {
      email,
      password,
      confirmPassword,
      phoneNumber,
      firstName,
      lastName,
    } = formData;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      isValid = false;
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      isValid = false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Invalid phone number (10 digits required)",
      }));
      isValid = false;
    }

    if (firstName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "First name is required",
      }));
      isValid = false;
    }

    if (lastName.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Last name is required",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Implement your sign-up logic here
      // This can involve sending the data to a server for user registration.
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form
        className=" p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`border rounded w-full py-2 px-3 ${
              errors.email && "border-red-500"
            }`}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`border rounded w-full py-2 px-3 ${
              errors.password && "border-red-500"
            }`}
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className={`border rounded w-full py-2 px-3 ${
              errors.confirmPassword && "border-red-500"
            }`}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className={`border rounded w-full py-2 px-3 ${
              errors.phoneNumber && "border-red-500"
            }`}
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className={`border rounded w-full py-2 px-3 ${
              errors.firstName && "border-red-500"
            }`}
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className={`border rounded w-full py-2 px-3 ${
              errors.lastName && "border-red-500"
            }`}
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          type="submit"
        >
          Sign Up
        </button>

        <p className="mt-2 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
