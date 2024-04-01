import { useCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetDonationByEmailQuery } from '@/redux/features/donation/donationApi';
import { useAppSelector } from '@/redux/hook';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

type TDonationItem = {
  category: string;
  quantity: number;
}

export type TUserData = {
  email: string;
}


const Dashboard = ()=>{
  const currentUser = useAppSelector(useCurrentUser) as unknown as TUserData;
  const { data } = useGetDonationByEmailQuery(currentUser?.email);

  if(!data){
    return <div>loading.........</div>
  }

  // const chartData = data?.data && Array.isArray(data?.data)
  // ? data.data.map(item => ({
  //     name: item.category,
  //     value: item.quantity
  //   }))
  // : [];

  const chartData = data?.data?.map((item : TDonationItem) => ({
    name: item.category,
    value: item.quantity
  }));



  console.log("chartData:", chartData)
    
    return (
      <div>
        <h1 className='font-bold text-2xl'>Welcome, This is your supply statistics!</h1>
        <div>
          <ResponsiveContainer width="100%" height={400} className="h-screen">
              <PieChart width={400} height={400}>
              <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text x={x} y={y} fill="#000" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                      {chartData[index].name}: {value}
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
}

export default Dashboard;