import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";

export default function IssueList({title, status}) {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px] mb-12">
          <CardHeader>
            <CardTitle>
              {title}
            </CardTitle>
            <CardContent className="px-2 ">
              <div className="space-y-2">
                {
                  [1,1].map((item)=><IssueCard key={item}/>)
                }
              </div>
            </CardContent>
            <CardFooter>
              <DialogTrigger>
                
                <Button variant="outline" className="w-full flex items-center gap-2"><PlusIcon/> Create Issue</Button>
              </DialogTrigger>
            </CardFooter>
          </CardHeader>
        </Card>
        <DialogContent style={{backgroundColor:"#171717f4"}}>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}