import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const data = {
        email: body.email,
        password: body.password
    }

    const validation = schema.safeParse(data);
    if (!validation.success) return NextResponse.json({ error: validation.error.errors }, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { email: data.email }
    });
    if (user) return NextResponse.json({ error: "User with the given email is already exist."}, { status: 400 });

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.user.create({
        data: {
            email: data.email,
            hashedPassword
        }
    });

    return NextResponse.json({ email: newUser.email }, { status: 201 });
}