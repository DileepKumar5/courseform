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
import { coursecreation } from "@/app/actions/course"

export const createformSchema = z.object({
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

const Createform = () => {
     // 1. Define your form.
  const form = useForm<z.infer<typeof createformSchema>>({
    resolver: zodResolver(createformSchema),
    defaultValues: {
      name: "",
      coursename: "",
      email: "",
      phone: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof createformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    coursecreation(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col  justify-center">
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
      <Button type="submit" className="flex items-center justify-center">Create</Button>
    </form>
  </Form>
  )
}

export default Createform
