import  { useState } from "react";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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

  const handleForgotPassword = () => {
    const { email } = formData;

    if (email) {
      // Implement your logic to send a password reset email to the user's email address.
      // You can use libraries like Nodemailer for sending email notifications.
      alert(`Password reset instructions have been sent to ${email}`);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter your email to reset the password",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Implement your sign-in logic here
      // This can involve sending the data to a server for authentication.
    }
  };

  const validateForm = () => {
    let isValid = true;
    const { email, password } = formData;
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

    return isValid;
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form
        className=" p-8 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>

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

        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
            type="submit"
          >
            Sign In
          </button>
          <button
            className="text-blue-500 text-sm"
            type="button"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
