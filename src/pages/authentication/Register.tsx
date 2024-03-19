import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () =>{
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const handleRegister = () =>{
        console.log("data");
    }

    return (
        <Container className="my-10 flex place-content-center">
            <div className="bg-slate-100 shadow-md rounded px-8 py-5 w-full md:w-3/5 lg:w-2/5">
                <h1 className="text-3xl font-bold pb-7 text-center">Register</h1>
                <form onSubmit={handleRegister} >
                    <div className="mb-4">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="name"
                        type="text"
                        placeholder="Name"
                        required/>
                    </div>
                    <div className="mb-4">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="email"
                        type="email"
                        placeholder="Email"
                        required/>
                    </div>
                    <div className="mb-5">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        required/>
                         <Eye className="password-toggle mt-2" onClick={togglePasswordVisibility}></Eye>
                    </div>
                    <div className="pb-7">
                      <Button className="uppercase" type="submit">SignUp</Button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already Have an Account? <Link className="text-orange-800 font-bold text-lg" to="/login">Login</Link></p>
            </div>
           
        </Container>
    )
}

export default Register;