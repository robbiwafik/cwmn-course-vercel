"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data } = useSession();

  return (
    <div className="navbar bg-base-100">
      <Link href="/users" className="btn-ghost text-xl mr-2 font-poppins">
        Users
      </Link>
      <Link href="/products" className="btn-ghost text-xl mr-2">
        Products
      </Link>
      <Link href="/admin" className="btn-ghost text-xl mr-2">
        Admin
      </Link>
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="btn btn-ghost text-xl">
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <div>
          {data.user!.name}
          <Link href="/api/auth/signout" className="ml-3">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
