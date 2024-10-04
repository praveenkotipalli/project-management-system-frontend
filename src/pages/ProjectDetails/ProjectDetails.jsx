import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { DialogTitle } from "@radix-ui/react-dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";
import Navbar from "../Navbar/Navbar";
import Particles from "@/components/ui/particles";

export default function ProjectDetails() {

  const handleProjectInvitation = () =>{

  }
  return (
    <>
    
    <Navbar/>
      <div className="mt-5 lg:px-10">
      <Particles
        className="absolute inset-0 z-[-1]"
        quantity={100}
        ease={80}
        
        refresh
      />
        <div className="lg:flex  gap-5 justify-between pb-4">
          <ScrollArea className="h-[89vh]  lg:w-[69%] pr-2 ">
            <div className=" p w-full pr-8 pl-8 "  style={{paddingRight:"8px", paddingLeft:"8px"}} >
              <h1 className="text-lg font-bold pb-5 pt-3 customTextColor  "  >Create Ecommerce Website Using React</h1>
              <div className="space-y-5 pb-10 ">
              <p className="w-full  text-gray-400 text-sm" style={{color:"#797A76"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur modi expedita eligendi voluptatem libero dolores odio omnis saepe aut, 
                sint architecto, officia eveniet consequatur aliquam, illum officiis! Tenetur, 
                exercitationem tempora.
              </p>
              <div style={{color:"#e3e3e3"}} className="flex">
                <p className="w-36" style={{color:"#854DFC"}}>Project Lead :</p>
                <p className="customTextColor">Praveen</p>

              </div>
              <div  className="flex">
                <p style={{color:"#854DFC"}} className="w-36">Members :</p>
                <div className="flex items-center gap-2">
                  {[1, 1].map((item)=> <Avatar key={item} className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>)}
                </div>
                <Dialog>
                  <DialogTrigger style={{marginLeft:"35px"}}>
                    <Button className="inviteButton" size="sm"  variant="outline" onClick={handleProjectInvitation} >
                      <span >Invite</span>
                      <PlusIcon  className="w-3 h-3 ml-3"/>
                    </Button>
                  </DialogTrigger>
                  <DialogContent style={{backgroundColor:"#171717f4"}}>
                    <DialogHeader>
                      <DialogTitle className=" customTextColor" >Invite user</DialogTitle>
                      <InviteUserForm/>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <div style={{color:"#e3e3e3"}} className="flex">
                <p className="w-36" style={{color:"#854DFC"}}>Category :</p>
                <p className="customTextColor">Fullstack</p>

              </div>
              <div className="flex">
                <p style={{color:"#854DFC"}} className="w-36">Status :</p>
                <Badge style={{background:"gray"}}><p>Pending</p></Badge>

              </div>
            </div>

            <section>
              <p style={{color:"#e3e3e3"}} className="tasksFont py-5 border-b text-lg -tracking-wider ">Tasks</p>
              <div className="lg:flex md:flex gap-3 justify-between py-5  ">
                <IssueList status="pending" title="Todo List"/>
                <IssueList status="in_progress" title="In progress"/>
                <IssueList status="done" title="Done"/>
              </div>
            </section>
            </div>
            
          </ScrollArea>
          <div className="lg:w-[30%] lg:h-[100%] rounded-md sticky right-5 top-12 mb-10">
            <ChatBox/>
          </div>
        </div>
      </div>
    </>
  );
}