import Container from "@/components/Container";
import {  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { useGetAllDonationsQuery } from "@/redux/features/donation/donationApi";
import { Coins } from "lucide-react";
import { Helmet } from "react-helmet";


type TDonationData = {
  name: string;
  totalQuantity: number;
  index: number
}

const DLeaderboard = () => {
    const {data: donationsData} = useGetAllDonationsQuery(undefined)

    return (
        <Container className="mb-16 mt-20">
          <Helmet>
            <title>LeaderBoard</title>
          </Helmet>
            <h1 className="text-5xl text-center font-bold pt-8 border-b w-full lg:max-w-[70%] mx-auto">Donors Leaderboard</h1>
            <p className="text-center font-semibold lg:w-2/3 text-sm lg:text-base mx-auto pb-8 pt-2">
               Donor leaderboard based on contributions. Join us to help make a difference by donating to those in need.
            </p>
            <Table className="w-[50%] mx-auto shadow-2xl rounded-lg text-lg">
              <TableCaption>A list of our Donor's leaderboard based on their donations.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Rank</TableHead>
                  <TableHead className="font-bold">Donor Name</TableHead>
                  <TableHead className="font-bold">Amounts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                { donationsData?.data?.map((item : TDonationData, index: number) => (  
                <TableRow>
                  <TableCell className="font-semibold"><span className="border-2 border-blue-500 rounded-full px-[12px] py-[6px] hover:bg-slate-400 duration-300">{index + 1}</span></TableCell>
                  <TableCell className="font-semibold hover:underline hover:underline-offset-8">{item.name}</TableCell>
                  <TableCell className="font-semibold flex gap-2 items-center"><Coins className="text-slate-500"></Coins><span>{item.totalQuantity}</span></TableCell>
                </TableRow>
                 ))}
              </TableBody>
            </Table>
        </Container>
    )
}

export default DLeaderboard;