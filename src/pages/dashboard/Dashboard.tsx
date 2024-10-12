import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetTotalCommentsByAUserQuery } from '@/redux/features/comments/commentsApi';
import { useGetDonationByEmailQuery } from '@/redux/features/donation/donationApi';
import { useAppSelector } from '@/redux/hook';
import { CircleUserRound, Heart, Radar } from 'lucide-react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { TDonation } from './users/MyDonations';
import Lottie from 'lottie-react';
import emptySupply from "../../assets/animation/empty.json"
import loadingAnimation from "../../assets/animation/loading.json"

type TDonationItem = {
  category: string;
  amount: number;
}

export type TUserData = {
  name: string;
  email: string;

}

export type TDonationAmount = {
  amount: number;
}


const Dashboard = ()=>{
  const currentUser = useAppSelector(useCurrentUser) as unknown as TUserData;
  const { data } = useGetDonationByEmailQuery(currentUser?.email);
  const {data: totalReviewByAUser} = useGetTotalCommentsByAUserQuery(currentUser?.email)


  if(!currentUser){
    return <div><Lottie className="w-2/5" animationData={loadingAnimation} /></div>
  }

  // Calculate total donation amount
  let totalDonationAmount = 0;
  data?.data?.forEach((donation: TDonationAmount) => {
    totalDonationAmount += donation?.amount;
  });

  //for chart
  const chartData = data?.data?.map((item : TDonationItem) => ({
    name: item?.category,
    value: item?.amount
  }));
    
    return (
      <div>
        <h1 className='font-bold text-xl'>Welcome, This is your statistics!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
          <div>
              <Card className="hover:border-blue-800 duration-500">
                <CardHeader>
                </CardHeader>
                <CardContent className='flex items-center justify-between gap-5 px-10'>
                  <Heart className='p-3 w-[60px] h-[60px] border-2 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white duration-300 hover:-translate-y-1'></Heart>
                  <div className='text-xl font-semibold'>
                    <h2 className='mb-2'>Your Donations</h2>
                    <p>{totalDonationAmount} BDT</p>
                  </div>
                </CardContent>
                <CardFooter className="">
                  <p>Thank you for your continued support!</p>
                </CardFooter>
              </Card>
          </div>
          <div>
              <Card className="hover:border-blue-800 duration-500">
                <CardHeader>
                </CardHeader>
                <CardContent className='flex items-center justify-between gap-5 px-10'>
                  <Radar className='p-3 w-[60px] h-[60px] border-2 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white duration-300 hover:-translate-y-1'></Radar>
                  <div className='text-xl font-semibold'>
                    <h2 className='mb-2'>Total Categories</h2>
                    <p className='text-center'>{data?.data?.length}</p>
                  </div>
                </CardContent>
                <CardFooter className="">
                  <p>The categories to which you donate!</p>
                </CardFooter>
              </Card>
          </div>
          <div>
              <Card className=" hover:border-blue-800 duration-500">
                <CardHeader>
                </CardHeader>
                <CardContent className='flex items-center justify-between gap-5 px-10'>
                  <CircleUserRound className='p-3 w-[60px] h-[60px] border-2 rounded-full shadow-2xl hover:bg-blue-600 hover:text-white duration-300 hover:-translate-y-1'></CircleUserRound>
                  <div className='text-xl font-semibold'>
                    <h2 className='mb-2'>Total Reviews</h2>
                    <p className='text-center'>{totalReviewByAUser?.data}</p>
                  </div>
                </CardContent>
                <CardFooter className="">
                  <p>Your feedback on our activities!</p>
                </CardFooter>
              </Card>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-14'>
          <div>
            <h1 className='font-semibold'>Your Donation statistics:</h1>
            {chartData?.length ? (
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
            ) : (
              <div className="flex items-center justify-center">
                <Lottie className="w-2/5" animationData={emptySupply} />
              </div>
            )}
          </div>
          <div>
            <h1 className='font-semibold'>Donations list:</h1>
          <Table>
              <TableCaption>A list of your Donations.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data?.length ? (
                  data?.data?.map((item: TDonation, index: number) => (
                    <TableRow key={item?._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item?.name}</TableCell>
                      <TableCell>{item?.category}</TableCell>
                      <TableCell className="text-right flex items-center justify-end place-content-center mt-7">
                        {item?.amount}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <div className="flex items-center justify-center">
                        <Lottie className="w-2/5" animationData={emptySupply} />
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>

              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">{data?.data?.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    )
}

export default Dashboard;