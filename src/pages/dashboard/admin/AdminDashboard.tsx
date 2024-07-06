import { useCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetAllDonationsAmountQuery, useGetDonationByEmailQuery } from '@/redux/features/donation/donationApi';
import { useAppSelector } from '@/redux/hook';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { CircleUserRound, Heart, UserRoundPlus } from 'lucide-react';
import { useGetAllUsersQuery } from '@/redux/features/users/UsersApi';
import { useGetAllCommentsQuery } from '@/redux/features/comments/commentsApi';
import { useGetAllVolunteersQuery } from '@/redux/features/volunteers/VolunteersApi';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type TDonationItem = {
  category: string;
  amount: number;
}

export type TUserData = {
  name: string;
  email: string;

}

export type TVolunteer = {
  _id: string,
  image: string,
  name: string,
  email: string,
  phone: string,
  location: string
}


const AdminDashboard = ()=>{
  const currentUser = useAppSelector(useCurrentUser) as unknown as TUserData;
  const { data } = useGetDonationByEmailQuery(currentUser?.email);
  const {data: allDonationsAmount} = useGetAllDonationsAmountQuery(undefined)
  const {data: allReviews} = useGetAllCommentsQuery(undefined)
  const {data: allUsers} = useGetAllUsersQuery(undefined)
  const {data: allVolunteers} = useGetAllVolunteersQuery(undefined)

  if(!data){
    return <div>loading.........</div>
  }

  const chartData = data?.data?.map((item : TDonationItem) => ({
    name: item?.category || "",
    value: item?.amount || 0
  }));

    
    return (
      <div>
        <h1 className='font-bold text-2xl'>Welcome Back Admin!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
          <div>
              <Card className="">
                <CardHeader>
                </CardHeader>
                <CardContent className='flex items-center justify-between gap-5 px-10'>
                  <Heart className='p-3 w-[60px] h-[60px] border-2 rounded-full shadow-2xl'></Heart>
                  <div className='text-xl font-semibold'>
                    <h2 className='mb-2'>Total Donations</h2>
                    <p>{allDonationsAmount?.totalAmount} BDT</p>
                  </div>
                </CardContent>
                <CardFooter className="">
                  <p>Your activity is loved more each day!</p>
                </CardFooter>
              </Card>
          </div>
          <div>
              <Card className="">
                <CardHeader>
                </CardHeader>
                <CardContent className='flex items-center justify-between gap-5 px-10'>
                  <UserRoundPlus className='p-3 w-[60px] h-[60px] border-2 rounded-full shadow-2xl'></UserRoundPlus>
                  <div className='text-xl font-semibold'>
                    <h2 className='mb-2'>Total Reviews</h2>
                    <p className='text-center'>{allReviews?.data?.length}</p>
                  </div>
                </CardContent>
                <CardFooter className="">
                  <p>These peoples reviews our activity!</p>
                </CardFooter>
              </Card>
          </div>
          <div>
              <Card className="">
                <CardHeader>
                </CardHeader>
                <CardContent className='flex items-center justify-between gap-5 px-10'>
                  <CircleUserRound className='p-3 w-[60px] h-[60px] border-2 rounded-full shadow-2xl'></CircleUserRound>
                  <div className='text-xl font-semibold'>
                    <h2 className='mb-2'>Total Users</h2>
                    <p className='text-center'>{allUsers?.data?.length}</p>
                  </div>
                </CardContent>
                <CardFooter className="">
                  <p>People who are registered!</p>
                </CardFooter>
              </Card>
          </div>
         


        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-14'>
          <div>
            <h1 className='font-semibold'>Your Donation statistics</h1>
            <ResponsiveContainer width="100%" height={400} className="h-screen">
                <PieChart width={400} height={400}>
                <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text x={x} y={y} fill="rgb(100 116 139)" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                        {chartData[index].name}: {value}
                      </text>
                    );
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h1 className='font-semibold'>Volunteers list</h1>
          <Table>
              <TableCaption>A list of your Volunteers.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="text-right">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allVolunteers?.data?.map((item : TVolunteer) => (
                  <TableRow key={item?._id}>
                    <TableCell><img className='rounded-full max-w-[70px] h-[70px]' src={item?.image} alt="" /></TableCell>
                    <TableCell>{item?.name}</TableCell>
                    <TableCell>{item?.phone}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7"> 
                      {item?.location}
                      </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">{allVolunteers?.data?.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    )
}

export default AdminDashboard;