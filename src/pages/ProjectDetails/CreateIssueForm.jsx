import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function CreateIssueForm() {
  const form = useForm({
    defaultValues:{
        issueName:"",
        description:"",
    },
});
const onSubmit = (data) =>{
    console.log("issue details", data);
}
  return (
    <div>
      
      <Form {...form } >
            <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name="issueName"
                // description="description"

                render={({field})=>
                <FormItem>
                    <FormLabel ><p style={{textAlign:"right"}}>Issue name</p></FormLabel>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholer="Project name...."/>
                    </FormControl>
                    <FormDescription>
                        Enter the issue name!
                    </FormDescription>
                    <FormMessage/>
                </FormItem>}
                />
                <FormField control={form.control}
                name="description"
                // description="description"

                render={({field})=>
                <FormItem>
                    <FormLabel ><p style={{textAlign:"right"}}>Description</p></FormLabel>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholer="Project name...."/>
                    </FormControl>
                    <FormDescription>
                        Enter the issue description!
                    </FormDescription>
                    <FormMessage/>
                </FormItem>}
                />
                <DialogClose>
                    <Button variant="" type="submit" className="w-full my-5">
                        Create Issue
                    </Button>
                </DialogClose>
            </form>
        </Form>
    </div>
  );
}