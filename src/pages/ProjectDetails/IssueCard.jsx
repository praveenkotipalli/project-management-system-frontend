import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

export default function IssueCard() {
  const navigate = useNavigate();
  return (
    <Card className="rounded-md py-1 pb-2 mt-5 ">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle className="cursor-pointer" onClick={()=>navigate("issue/3")}>
            Create Navbar
          </CardTitle>
          <DropdownMenu className="border-none">
            <DropdownMenuTrigger className="border-none">
              <Button className=" hover:bg-transparent rounded-full border-none" size="icon" variant="ghost">
                <DotsVerticalIcon className="border-none"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="mt-3">
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>
          <DropdownMenu className="w-[30rem] border-none ">
            <DropdownMenuTrigger className="border-none">
            <Button size="icon" variant="ghost" className="border-none bg-gray-900 hover:text-black text-white rounded-full">
              <Avatar className="border-none">
                <AvatarFallback className="border-none">
                  <PersonIcon style={{color:"#000"}} className="border-none"/>
                </AvatarFallback>
              </Avatar>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <UserList/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}