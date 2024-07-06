import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Citrus, Compass, Globe, User } from "lucide-react"
import { TSingleUser } from "./UserProfile"


const UserAbout = ({singleUser}: {singleUser: TSingleUser}) => {
    const {image, name, designation, company, city, country, date, bio} = singleUser
    return (
        <Card className="">
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>To add all information, please update your profile.</CardDescription>
          </CardHeader>
          <hr />
          <CardContent className="mt-5">
                <div className="">
                    <div className="flex place-content-center">
                      <img className="z-10  p-1 max-h-[100px] max-w-[100px] rounded-full border-2 image-border-color stroke-2"
                        src={image} alt=""/>
                    </div>
                    <div className="text-center mt-2">
                        <h1 className="text-xl font-semibold">{name}</h1>
                        <p className="">{bio}</p>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex gap-3">
                    <User/>
                    <h1>Designation: {designation}</h1>
                    </div>
                    <div className="flex gap-3 my-4">
                        <Compass/>
                        <h1>Company: {company}</h1>
                    </div>
                    <div className="flex gap-3">
                        <Citrus/>
                        <h1>City: {city}</h1>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <Globe/>
                        <h1>Country: {country}</h1>
                    </div>

                </div>


            
          </CardContent>
          <CardFooter className="">

          </CardFooter>
        </Card>
    );
};

export default UserAbout;