"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { courseupdation } from "@/app/actions/course"

export const updateformSchema = z.object({
    id: z.string().nonempty(),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    coursename: z.string().min(2, {
        message: "CourseName must be at least 2 characters.",
    }),
    email: z.string().email(),
    phone: z.string().min(11, {
        message: "Phone number must be at least 11 characters.",
    }),

})

const Updateform = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof updateformSchema>>({
        resolver: zodResolver(updateformSchema),
        defaultValues: {
            id: "",
            name: "",
            coursename: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof updateformSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        courseupdation(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col  justify-center">
                <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter the Id</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Id" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormLabel className="flex items-center justify-center font-bold text-2xl">Enter the New Details</FormLabel>

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="coursename"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Course Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Phone" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="flex items-center justify-center text-center">Update</Button>
            </form>
        </Form>
    )
}

export default Updateform
