import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../assets/animation/error.json"
import Lottie from "lottie-react";

type TErrorMessage = {
    message: string
}
type TError = {
    error: TErrorMessage
}

const ErrorPage = () => {
    const { error } = useRouteError() as TError
  return (
    <div className="h-[100vh]">
      <main className="h-screen w-full flex flex-col justify-center items-center ">
      <Lottie animationData={errorAnimation}></Lottie>
        
        <Button className="mb-4 px-12 rounded-3xl hover:bg-green-700 hover:text-white"><Link to="/">Go Home</Link></Button>
        <p className='font-semibold'>
            Please read the ERROR Message:
            <span className="text-red-700 ml-2">{error?.message}</span>
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
