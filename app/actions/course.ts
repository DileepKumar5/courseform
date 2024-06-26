"use server"

import { createformSchema } from "@/components/Createform"
import { deleteformSchema } from "@/components/Deleteform"
import { updateformSchema } from "@/components/Updateform"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

export const coursecreation = async (values: z.infer<typeof createformSchema>) => {
    console.log(values)
    const coursecreation = await prisma.coursemodel.create({
        data:{
            name: values.name,
            coursename: values.coursename,
            email: values.email,
            phone: values.phone,
        }
        
    })
    console.log(coursecreation)

}
export const coursedeletion = async (values: z.infer<typeof deleteformSchema>) => {
    console.log(values)
    const coursedelete = await prisma.coursemodel.deleteMany({
       where: {
        id: values.id,
       }
        
    })
    console.log(coursedelete)

}
export const courseupdation = async (values: z.infer<typeof updateformSchema>) => {
    console.log(values)
    const coursedelete = await prisma.coursemodel.update({
       where: {
        id: values.id,
       },
       data:{
        name: values.name,
        coursename: values.coursename,
        email: values.email,
        phone: values.phone,
    }
        
    })
    console.log(coursedelete)

}