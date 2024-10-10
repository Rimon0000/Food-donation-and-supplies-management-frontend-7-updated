import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useRegistrationMutation } from "@/redux/features/auth/registerApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { Eye } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Helmet } from "react-helmet";
import { FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import registrationAnimation from "../../assets/animation/registration.json"


type TRegistrationFormData = {
  name: string
  email: string;
  password: string;
}

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<TRegistrationFormData>();
  const [registration] = useRegistrationMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //handle registration
  const onSubmit : SubmitHandler<TRegistrationFormData> = async (data) => {
    const toastId = toast.loading("Registering in");

    try {
      const registerInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await registration(registerInfo).unwrap();
      dispatch(setUser({ user: registerInfo }));
      toast.success("Registration Done.", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Container className="my-24 flex place-content-center">
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center max-w-7xl mx-auto my-6 px-4 md:px-6 lg:px-8 gap-6 lg:gap-8">
        <div className="w-full lg:w-1/2 px-4 lg:px-8 md:px-6 shadow-md rounded-xl py-5">
          <p className="mb-4 lg:mb-12 text-center lg:text-start text-2xl lg:text-3xl font-semibold">
            Register Your Account
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
            <span className="text-xs font-semibold text-center uppercase text-slate-500">
              Register with email
            </span>
            <span className="w-1/5 border-b border-gray-600 lg:w-1/4"></span>
          </div>
      
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                className="shadow  border rounded w-full py-3 px-3 text-slate-950"
                type="text"
                {...register("name")}
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                className="shadow border rounded w-full py-2 lg:py-3 px-3 text-slate-950"
                type="email"
                {...register("email")}
                name="email"
                placeholder="Email"
                required
              />
            </div>
      
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Password
                </label>
                <a className="text-xs text-gray-500 hover:underline">
                  Forget Password?
                </a>
              </div>
              <div className="relative flex items-center mt-2">
                {showPassword ? (
                  <Eye
                    className="password-toggle mt-2 absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEyeSlash
                    className="password-toggle mt-2 absolute right-3 focus:outline-none rtl:left-0 rtl:right-auto"
                    onClick={togglePasswordVisibility}
                  />
                )}
                <input
                  className="shadow border rounded w-full py-2 lg:py-3 px-3 text-slate-950"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div className="pt-6">
              <Button type="submit" className="uppercase rounded-3xl px-4 lg:px-5 hover:bg-green-700 hover:text-white">
                Register
              </Button>
            </div>
          </form>
      
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/12 border-b border-gray-600 lg:w-2/12 md:w-1/4"></span>
            <span className="text-base text-gray-500">
            Already have an account?{" "}
              <Link
                to="/login"
                className="hover:text-blue-800 font-bold text-[#83b446] text-lg"
              >
                Login
              </Link>
            </span>
            <span className="w-1/12 border-b border-gray-600 lg:w-2/12 md:w-1/4"></span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:border-b lg:border-l lg:border-gray-300">
          <Lottie animationData={registrationAnimation} />
        </div>
      </div>

      
    </Container>
  );
};

export default Register;
