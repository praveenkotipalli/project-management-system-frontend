import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import Navbar from "../Navbar/Navbar";
import CommentCard from "./CommentCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function IssueDetails() {
  const {projectId, issueId} = useParams();
  const handleUpdateIssueStatus = (status) =>{
    console.log("updated isssue data ->", status);
  }
  return (
    <>
    
    <Navbar/>
    <div className="px-20  py-10 text-gray-200">
      <div className="flex justify-between border  p-10 rounded-lg">
        <ScrollArea className="h-[70vh] w-[60%]">
          <div>
            <h1 className="text-lg font-semibold text-gray-100">Create navbar</h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-200 ">
                Description
              </h2>
              <p className=" text-gray-300 text-sm mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo distinctio eaque soluta ipsum omnis.
              </p>
            </div>
            <div className="mt-5">
              <h1 className="pb-3">Activity</h1>
              <Tabs defaultValue="comments"  className="w-[400px]">
                <TabsList className="mb-5" >
                  <TabsTrigger  value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="all">all section of the activity</TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm />
                  <div className="mt-8 space-y-6">
                    {[1,1,1,1,1,1,1].map((item)=><CommentCard key={item}/>)}
                  </div>  
                </TabsContent>
                <TabsContent value="history">no history</TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full pr-10 ml-60 lg:w-[30%] space-y-2">
        <Select onValueChange={handleUpdateIssueStatus}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="To Do" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="pending">To Do</SelectItem>
    <SelectItem value="in-progress">In Progress</SelectItem>
    <SelectItem value="done">Done</SelectItem>
  </SelectContent>
</Select>

<div className="border rounded-lg w-[25rem]">
  <p className="border-b py-3 px-5">Details</p>
  <div className="p-5">
    <div className="space-y-7">

      <div className="flex gap-10 items-center">
        <p className="w-[7rem]">Assignee</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 text-xs">
            <AvatarFallback>
              P
            </AvatarFallback>
          </Avatar>
          <p>Praveen</p>
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <p className="w-[7rem]">Labels</p>
        <p>None</p>
      </div>

      <div className="flex gap-10 items-center">
        <p className="w-[7rem]">Status</p>
        <Badge>
          In Progress
        </Badge>
      </div>

      <div className="flex gap-10 items-center">
        <p className="w-[7rem]">Realese</p>
        <p>10-04-2024</p>
      </div>

      <div className="flex gap-10 items-center">
        <p className="w-[7rem]">Reporter</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 text-xs">
            <AvatarFallback>
              S
            </AvatarFallback>
          </Avatar>
          <p> Sahithi</p>
        </div>
      </div>

    </div>
  </div>
</div>



        </div>
      </div>
     
    </div>
    </>
  );
}