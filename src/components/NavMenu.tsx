"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        className="rounded-lg bg-neutral-800 px-5 py-2 text-xl text-neutral-50 hover:bg-neutral-700 sm:text-2xl"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }
  return (
    <button
      className="rounded-lg bg-neutral-800 px-5 py-2 text-xl text-neutral-50 hover:bg-neutral-700 sm:text-2xl"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}

export default function NavMenu() {
  return (
    <div className="flex flex-row items-center justify-between bg-indigo-100 py-4 font-bold text-neutral-800 sm:py-5">
      <Link href="/">
        <h1 className="text-3xl sm:text-4xl">Pluto</h1>
      </Link>
      <AuthButton />
    </div>
  );
}
