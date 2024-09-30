

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input"; // Correct input import
import { useForm } from "react-hook-form";

export default function Signup() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
            fullname: "",
        },
    });

    const onSubmit = (data) => {
        console.log("signup details -->", data);
    };

    return (
        <>
            <div className="space-y-5  ">
                <h1>Register</h1>
                <Form {...form}>
                    <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex gap-3">
                                        <div>
                                            <FormLabel>
                                                <p style={{ textAlign: "right", marginBottom: "4px", marginLeft: "2px" }}>
                                                    Email
                                                </p>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    className="border w-full border-gray-700 py-5 px-4 mr-12 ml-2 pr-44"
                                                   
                                                />
                                            </FormControl>
                                            <FormDescription className="ml-2">
                                                Enter your email!
                                            </FormDescription>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex gap-3">
                                        <div>
                                            <FormLabel>
                                                <p style={{ textAlign: "right", marginBottom: "4px", marginLeft: "2px" }}>
                                                    Password
                                                </p>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    className="border w-full border-gray-700 py-5 px-4 mr-12 ml-2 pr-44"
                                                   
                                                />
                                            </FormControl>
                                            <FormDescription className="ml-2">
                                                Enter your password!
                                            </FormDescription>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-[100px] mt-5 ml-8">
                            Register
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
}
