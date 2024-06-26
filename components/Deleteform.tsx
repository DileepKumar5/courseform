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
import { coursedeletion } from "@/app/actions/course"

export const deleteformSchema = z.object({
  id: z.string().nonempty(),

})

const Deleteform = () => {
     // 1. Define your form.
  const form = useForm<z.infer<typeof deleteformSchema>>({
    resolver: zodResolver(deleteformSchema),
    defaultValues: {
      id: "",

    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof deleteformSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    coursedeletion(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col  justify-center">
      <FormField
        control={form.control}
        name="id"
        render={({ field }) => (
          <FormItem>
            <FormLabel>ID</FormLabel>
            <FormControl>
              <Input placeholder="Enter Your ID" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
     
      <Button type="submit" className="flex items-center justify-center">Delete</Button>
    </form>
  </Form>
  )
}

export default Deleteform
