import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetDonationByEmailQuery } from "@/redux/features/donation/donationApi";
import { useAppSelector } from "@/redux/hook";
import { TDonationAmount } from "../Dashboard";

export type TDonation = {
    _id: string,
    name: string,
    email: string,
    category: string,
    amount: number,
    message: string
}


const MyDonations = () => {
    const currentUser = useAppSelector(useCurrentUser)
    const {data: userDonations} = useGetDonationByEmailQuery(currentUser?.email)

    // Calculate total donation amount
  let totalDonationAmount = 0;
  userDonations?.data?.forEach((donation: TDonationAmount) => {
    totalDonationAmount += donation?.amount;
  });

    return (
        <div>
            <h1 className="text-center text-xl font-bold my-5">My Donations</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              {/* <Link to="/dashboard/create-supply"><Button>Add New Supply</Button></Link> */}
            </div>

            <Table>
              <TableCaption>A list of your recent items.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userDonations?.data?.map((item: TDonation, index: string) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{item?.category}</TableCell>
                    <TableCell>{item?.email}</TableCell>
                    <TableCell>{item?.amount}</TableCell>
                    <TableCell className="text-right flex items-center justify-end place-content-center mt-7">{item?.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">{totalDonationAmount}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            

        </div>
    );
};

export default MyDonations;