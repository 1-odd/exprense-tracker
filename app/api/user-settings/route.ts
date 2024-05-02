import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest){

    const user = await currentUser();
    if(!user){
        redirect('/sign-in')
    }
    let userSettings = await prisma.userSettings.findUnique({
        where:{
            userId:user.id
        }
    })
    if(!userSettings){
        userSettings = await prisma.userSettings.create({
            data:{
                userId:user.id,
                currency:"IND"
            }
        })
    }
    revalidatePath("/")
    return NextResponse.json(userSettings);
}