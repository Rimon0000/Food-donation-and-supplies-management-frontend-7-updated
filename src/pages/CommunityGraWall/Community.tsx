/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {  Popover,  PopoverContent,  PopoverTrigger,} from "@/components/ui/popover"
import React from "react";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddCommentMutation, useGetAllCommentsQuery } from "@/redux/features/comments/commentsApi";
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import moment from "moment";
import { Heart, UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";


export type TUser = {
    name?: string,
    email: string
}
export type TCommentsData = {
    name: string;
    comment: string;
    date: Date;

}

const Community = () => {
    const [date, setDate] = React.useState<Date>()
    const currentUser = useAppSelector(useCurrentUser);
    const [addComment] = useAddCommentMutation()
    const queryClient = useQueryClient();
    const {data:CommentsData} = useGetAllCommentsQuery(undefined)

     //handle new comment
     const handleAddComment = async(e: any) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;
    
        const newComment = {
          name,
          email: currentUser?.email || email ,
          comment,
          date,
        }
    
        addComment(newComment)
        toast.success("Comment Added successful.");
        queryClient.invalidateQueries("comment");
        form.reset()
    }

    return (
        <Container className="my-5">
            <div className="mb-10 text-white bg-cover bg-center h-[200px] bg-fixed rounded-lg"
              style={{ backgroundImage: "url('https://i.ibb.co/34hbmtq/donald-giannatti-czq-GBa-CVDOc-unsplash.jpg')" }} 
            >
                <h1 className="text-5xl text-center font-bold pt-20">Community Gratitude Wall</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-12">
                <div className="sm:col-span-6 md:col-span-5 lg:col-span-4">
                    <form onSubmit={handleAddComment} className="border shadow-2xl rounded px-6 pt-6 w-full">
                        <h1 className="text-center text-sm text-slate-500">Share your thoughts about our platform! </h1>
                    <div className="mb-2">
                        <Label htmlFor="Name" className="flex text-left py-2 text-base">Name</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="name"
                          type="text"
                          placeholder="Name"
                          required/>
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="Email" className="flex text-left py-2 text-base">Email</Label>
                        <input className="shadow  border rounded w-full py-2 px-3 text-slate-950"
                          name="email"
                          type="email"
                          placeholder="Email"
                          defaultValue={currentUser?.email}
                          required/>
                    </div>
                    <div className="mb-2">
                        <Label htmlFor="Comment" className="flex text-left py-2 text-base">Comment</Label>
                        <textarea className="shadow  border rounded w-full py-2 px-3 h-[120px] text-slate-950"
                          name="comment"
                          placeholder="Write Your Comment"
                          required/>
                    </div>
    
                    <div className="mb-2">
                        <Label htmlFor="Date" className="flex text-left py-2 text-base">Pick a Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                    </div>
                    
                    <div className="pb-3 mt-5">
                      <Button type="submit">Submit</Button>
                    </div>
                </form>
                </div>
                <div className="sm:col-span-6 md:col-span-7 lg:col-span-8">
                    <h1 className="font-semibold">These are people express their gratitude and appreciation for the support they've received during difficult times on our platform.</h1>
                    <hr className="my-6"></hr>
                    <div>
                        {
                            CommentsData?.data?.map((item : TCommentsData) => (
                                <Card className="shadow-xl rounded-xl p-5 mb-8 text-justify">
                                    <p className=" text-slate-500">{moment(new Date(`${item.date}`)).format('DD MMMM YYYY')}</p>
                                    <p className="font-medium my-4 text-sm">{item.comment}</p>
                                    <hr className="mb-4"></hr>
                                    <div className="flex items-center justify-between font-bold">
                                        <div className="flex items-center gap-3">
                                            <UserRound></UserRound>
                                            <p>{item.name}</p>
                                        </div>
                                        <Heart></Heart>
                                    </div>
                                </Card>
                            ))

                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

 export default Community;