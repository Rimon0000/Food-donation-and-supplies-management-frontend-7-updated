import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Citrus, Compass, Globe, User } from "lucide-react"
import { TSingleUser } from "./UserProfile"

const UserAbout = ({ singleUser = {} as TSingleUser }: { singleUser: TSingleUser }) => {
  const { image, name, designation, company, city, country, bio } = singleUser;

  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>To add all information, please update your profile.</CardDescription>
      </CardHeader>
      <hr />
      <CardContent className="mt-5">
        <div>
          <div className="flex justify-center">
            <img
              className="z-10 p-1 max-h-[100px] max-w-[100px] rounded-full border-2 image-border-color stroke-2"
              src={image || 'https://i.ibb.co/vqqBpX6/programmer.png'}
              alt={`${name}'s profile`}
            />
          </div>
          <div className="text-center mt-2">
            <h1 className="text-xl font-semibold">{name || 'N/A'}</h1>
            <p>{bio || 'N/A'}</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex gap-3">
            <User />
            <h1>Designation: {designation || 'N/A'}</h1>
          </div>
          <div className="flex gap-3 my-4">
            <Compass />
            <h1>Company: {company || 'N/A'}</h1>
          </div>
          <div className="flex gap-3">
            <Citrus />
            <h1>City: {city || 'N/A'}</h1>
          </div>
          <div className="flex gap-3 mt-4">
            <Globe />
            <h1>Country: {country || 'N/A'}</h1>
          </div>
        </div>
      </CardContent>
      <CardFooter />
    </Card>
  );
};

export default UserAbout;
