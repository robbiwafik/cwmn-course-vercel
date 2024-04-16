import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/client"
import schema from "../schema"


interface Props {
    params: {id: string}
}

export async function GET(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })

    if (!user)
        return NextResponse.json({error: "User not found"}, {status: 404})
        
    return NextResponse.json({id: params.id, name: 'John'})
}

export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });
    
    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })
    if (!user)
        return NextResponse.json({ error: "User with the given id does not exist." }, { status: 404 });
    
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    })
    
    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUniqueOrThrow({
        where: { id: params.id }
    })

    await prisma.user.delete({
        where: { id: user.id }
    })

    return NextResponse.json({});
}