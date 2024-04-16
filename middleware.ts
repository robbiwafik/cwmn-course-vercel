import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";

export default middleware;

export const config = {
    // *: zero or more parameters
    // +: on or more parameters
    // ?: zero or one parameter
    matcher: ['/users/:id*']
}