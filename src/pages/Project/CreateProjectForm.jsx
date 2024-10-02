import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "postcss";
import { useForm } from "react-hook-form";
import { tags } from "../ProjectList/ProjectList";
import { Cross1Icon } from "@radix-ui/react-icons";
// import { useState } from "react";
// import { z } from "zod";

export default function CreateProjectForm() {
    // const [tagsVal, setTagsVal] = useState([]);
    const form = useForm({
        defaultValues:{
            name:"",
            description:"",
            category:"",
            tags:["javascript", "react"]
        }
        
    })

    // const formSchema = z.object({
    //     name: z.string().min(2, {
    //       message: "Project title must be at least 2 characters.",
    //     }),
    //   })

    const onSubmit = (data) =>{
        // data.preventDefault();
        console.log("create project data", data);
    }

    const handleTagsChange=(newValue)=>{
        const currentTags = form.getValues("tags");

        const updatedTags = currentTags.includes(newValue)?
        currentTags.filter(tag=>tag!==newValue):[...currentTags,newValue];
        // setTagsVal([...tagsVal, item]);
        console.log(updatedTags)
        form.setValue("tags", updatedTags);
    }
  return (
    <div>
        <Form {...form } >
            <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control}
                name="name"
                // description="description"

                render={({field})=>
                <FormItem>
                    <FormLabel ><p style={{textAlign:"right", color:"#e3e3e3"}}>Project title</p></FormLabel>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholer="Project name...."/>
                    </FormControl>
                    <FormDescription style={{ color:"#e3e3e3"}}>
                        This is your project display name !
                    </FormDescription>
                    <FormMessage/>
                </FormItem>}
                />
             <FormField control={form.control}
                name="description"
                // description="description"

                render={({field})=>
                <FormItem>
                    <FormLabel ><p style={{textAlign:"right" , color:"#e3e3e3"}}>Project description</p></FormLabel>
                    <FormControl>
                        <Input {...field} type="text" className="border w-full border-gray-700 py-5 px-5" placeholer="Project name...."/>
                    </FormControl>
                    <FormDescription style={{ color:"#e3e3e3"}}>
                        This is your project description !
                    </FormDescription>
                    <FormMessage/>
                </FormItem>}
                />
             <FormField control={form.control}
                name="category"
                // description="description"

                render={({field})=>
                <FormItem>
                    <FormLabel ><p style={{textAlign:"right" , color:"#e3e3e3"}}>Project title</p></FormLabel>
                    <FormControl>
                        <Select 
                         defaultValue="fullstack"
                         value={field.value}
                         onValueChange={(value)=>{
                            field.onChange(value)
                         }}>
                            <SelectTrigger style={{borderBlockColor:"#636363",color:"#e3e3e3"}} className="w-full">
                                <SelectValue  placeholder="Category"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fullstack">Full stack</SelectItem>
                                <SelectItem value="frontend">Frontend</SelectItem>
                                <SelectItem value="backend">Backend</SelectItem>
                            </SelectContent>
                         </Select>
                         
                         
                    </FormControl>
                    
                    <FormMessage/>
                </FormItem>}
                />

<FormField control={form.control}
                name="tags"
                // description="description"

                render={({field})=>
                <FormItem>
                    <FormLabel ><p style={{textAlign:"right", marginTop:"20px", color:"#e3e3e3"}}>Tags</p></FormLabel>
                    <FormControl>
                        <Select 
                        
                        //  defaultValue="fullstack"
                        //  value={field.value}
                         onValueChange={(value)=>{
                            handleTagsChange(value);
                         }}>
                            <SelectTrigger style={{borderBlockColor:"#636363",color:"#e3e3e3"}} className="w-full">
                                <SelectValue placeholder="Tags"></SelectValue>
                            </SelectTrigger>
                            <SelectContent  >
                            { tags.map((a)=><SelectItem style={{color:"#e3e3e3"}} key={a} value={a}>{a}</SelectItem>) }
                            </SelectContent>
                         </Select>
                         
                         
                    </FormControl>
                    { field.value.map((item)=><div key={item} onClick={()=>handleTagsChange(item)} className="flex gap-1 flex-wrap" >
                         <div className="cursor-pointer flex flex-wrap rounded-full items-center border gap-2 px-4 py-1 mt-2">
                            <span className="text-sm">{item}</span>
                            <Cross1Icon className="h-3 w-3"/>
                         </div>
                    </div>) }
                    <FormMessage/>
                </FormItem>}
                />
                <DialogClose style={{color:"#e3e3e3"}}>
                    {false? <div><p>You can create only 3 projects with free plan, 
                        please upgrade your plan</p></div>:<Button style={{backgroundColor:"#454545", color:"#e3e3e3"}} variant="" type="submit" className="w-full my-5">
                            Create Project</Button>}
                </DialogClose>
            </form>
        </Form>
    </div>
  );
}