import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { DropdownMenu, DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export default function ProjectCard() {
    const navigate = useNavigate();
  return (
    <Card className="customCard p-5 w-full lg:max-w-3xl">
        <div className="space-y-5">
            <div className="space-y-2">
                <div className="flex justify-between">
                    <div className="flex items-center gap-5">
                        <h1 onClick={()=>navigate("/project/3")} className="cursor-pointer font-bold text-black customTextColor text-lg">
                        Create Ecommerce Project
                        </h1>
                        <DotFilledIcon/>
                        <p className="text-sm text-gray-400" style={{color:"gray"}}>Fullstack</p>
                    </div>
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="border-none">
                                <Button  variant="ghost" size="icon" className="border-none">
                                    <DotsVerticalIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <p className="flex  text-gray-500 text-sm" style={{textAlign:"left", color:"#797A76"}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis, ex quae ullam provident maiores officia recusandae non hic sapiente libero, temporibus at consequuntur dolor vitae accusamus velit expedita voluptatibus!
                </p>
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
                
                {[1, 1, 1, 1].map((item)=><Badge key={item} style={{ color:"#854DFC"}}>{"frontend"}</Badge>)}
                {/* <Badge>Angular</Badge>
                <Badge>Spring boot</Badge>
                <Badge>MySql</Badge> */}
            </div>
        </div> 
    </Card>
  );
}