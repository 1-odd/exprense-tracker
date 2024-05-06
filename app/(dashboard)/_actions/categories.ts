'use server'

import prisma from "@/lib/prisma";
import { CreateCategorySchema, CreateCategorySchemaType } from "@/zodSchema/categories";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCaegory(form : CreateCategorySchemaType){
    const parsedBody = CreateCategorySchema.safeParse(form);
    if(!parsedBody.success){
        throw new Error("bad request....")
    }

    const user = await currentUser();
    if(!user){
        redirect('/sign-in')
    }

    const {name , icon ,type } = parsedBody.data ;

    const catergory = await prisma.category.create({
        data:{
            userId: user.id,
            name,
            icon,
            type,
            
        }
    })
    return catergory;
}