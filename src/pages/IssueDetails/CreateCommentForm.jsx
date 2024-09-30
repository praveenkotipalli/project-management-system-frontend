import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

export default function CreateCommentForm() {
    const form = useForm({
        defaultValues:{
            comment:"",
        },
    });

    const onSubmit = (data) =>{
        console.log("comment -->" , data);
        
    }
  return (
    <div>
        <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(onSubmit)} >
                <div className="flex">
                <FormField
                    control={form.control}
                    name="comment"

                    render={({field})=>
                        <FormItem>
                            <div className="flex gap-3">
                            <Avatar className="mt-5">
                                <AvatarFallback >S</AvatarFallback>
                            </Avatar>
                            <div>
                            <FormLabel ><p style={{textAlign:"right",marginBottom:"4px",marginLeft:"2px"}}>Comment</p></FormLabel>
                            <FormControl>
                                <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-4 mr-12 ml-2   pr-44" placeholer="Project name...."/>
                            </FormControl>
                            <FormDescription className="ml-2">
                               Write comment !
                            </FormDescription>
                            </div>
                            </div>
                            
                            
                            <FormMessage/>
                        </FormItem>}
                />
                
                    <Button variant="" type="submit" className="w-[100px] mt-5 ml-8 ">
                        Save
                    </Button>
                </div>
                
            </form>
        </Form>
    </div>
  );
}