import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { useGetCommentsByEmailQuery } from "@/redux/features/comments/commentsApi";
import moment from "moment";
import Lottie from "lottie-react";
import emptySupply from "../../../assets/animation/empty.json"

export type TReview = {
    _id: string,
    name: string,
    date: string,
    comment: string
}


const MyReviews = () => {
    const currentUser = useAppSelector(useCurrentUser)
    const {data: userReviews} = useGetCommentsByEmailQuery(currentUser?.email)

    return (
        <div>
            <h1 className="text-center text-xl font-bold my-5">My Reviews</h1>
            <div className=" my-3 mr-5 flex items-end justify-end">
              {/* <Link to="/dashboard/create-supply"><Button>Add New Supply</Button></Link> */}
            </div>

            <Table>
              <TableCaption>A list of your recent items.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">#</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {userReviews?.data?.length ? (
                userReviews?.data?.map((item: TReview, index: string) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{item?.name}</TableCell>
                    <TableCell>{moment(new Date(`${item?.date}`)).format('DD MMMM YYYY')}</TableCell>
                    <TableCell className="text-justify max-w-[82ch]">{item?.comment}</TableCell>
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
                  <TableCell className="text-right">{userReviews?.data?.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            

        </div>
    );
};

export default MyReviews;