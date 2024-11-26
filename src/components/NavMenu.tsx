"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button className="text-xl sm:text-2xl" onClick={() => signOut()}>
          {" "}
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <>
        <button className="text-xl sm:text-2xl" onClick={() => signIn()}>
          Sign in
        </button>
      </>
    </>
  );
}

export default function NavMenu() {
  return (
    <div className="flex flex-row justify-between bg-indigo-100 py-5 font-bold text-neutral-800 sm:py-10">
      <Link href="/">
        <h1 className="text-3xl sm:text-4xl">Pluto </h1>
      </Link>
      <AuthButton />
    </div>
  );
}
