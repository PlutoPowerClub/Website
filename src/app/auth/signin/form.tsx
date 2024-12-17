"use client";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function Form(): JSX.Element {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await signIn("cognito", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-neutral-800">
      <div className="flex flex-col justify-start">
        <label className="pb-2 text-xl font-bold sm:text-2xl ">Email</label>
        <input
          name="email"
          type="email"
          placeholder=""
          className="border-stroke w-full rounded-lg border bg-neutral-50 p-4"
        />
      </div>
      <div className="flex flex-col justify-start">
        <label className="pb-2 text-xl font-bold sm:text-2xl ">Password</label>
        <input
          name="password"
          type="password"
          placeholder=""
          className="border-stroke w-full rounded-lg border bg-neutral-50 p-4"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-neutral-800 px-5 py-2 text-xl text-neutral-50 hover:bg-neutral-700 sm:text-2xl"
      >
        Sign In
      </button>
    </form>
  );
}
