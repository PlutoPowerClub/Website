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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col justify-start">
        <label className="pb-4 text-3xl font-bold text-black">Email</label>
        <input
          name="email"
          type="email"
          placeholder=""
          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="flex flex-col justify-start">
        <label className="pb-4 text-3xl font-bold text-black">Password</label>
        <input
          name="password"
          type="password"
          placeholder=""
          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
      >
        Sign In
      </button>
    </form>
  );
}
