import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useRegistrationMutation } from "@/redux/features/auth/registerApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm();
  const [registration] = useRegistrationMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
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
    <Container className="my-10 flex place-content-center">
      <div className="bg-slate-100 shadow-md rounded px-8 py-5 w-full md:w-3/5 lg:w-2/5">
        <h1 className="text-3xl font-bold pb-7 text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              className="shadow  border rounded w-full py-3 px-3 text-gray-700"
              type="text"
              {...register("name")}
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow  border rounded w-full py-3 px-3 text-gray-700"
              type="email"
              {...register("email")}
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <input
              className="shadow  border rounded w-full py-3 px-3 text-gray-700"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              name="password"
              placeholder="Password"
            />
            <Eye
              className="password-toggle mt-2"
              onClick={togglePasswordVisibility}
            ></Eye>
          </div>
          <div className="pb-7">
            <Button className="uppercase" type="submit">
              SignUp
            </Button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already Have an Account?{" "}
          <Link className="text-orange-800 font-bold text-lg" to="/login">
            Login
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
