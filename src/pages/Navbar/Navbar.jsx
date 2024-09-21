import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CreateProjectForm from "../Project/CreateProjectForm";
// import {  } from "@radix-ui/react-dropdown-menu";
import { PersonIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <p ><Link className="cursor-pointer navLogo" to="/">Unsplash</Link></p>
            <Dialog>
                <DialogTrigger>
                    
                    <Button className="textCustom" variant="ghost">New Project</Button>
                    
                    
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Project</DialogTitle>
                        <CreateProjectForm/>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Button className="textCustom ">Upgrade</Button>
        </div>
        <div className="flex gap-3 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>PraveenInc</p>
        </div>
    </div>
  );
}