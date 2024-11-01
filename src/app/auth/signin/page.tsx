import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import DefaultLayout from "@/app/DefaultLayout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to Pluto",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout pageName="Sign In">
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="p-20">
              <Image
                src="/images/surface.jpg"
                alt="Image of the surface of the planet Pluto"
                width="500"
                height="1000"
                className="mx-auto rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <form className="space-y-6">
                <div>
                  <label className="text-3xl font-bold text-black">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-3xl font-bold text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                >
                  Sign In
                </button>

                <div className="text-center">
                  <p>
                    Don't have an account?{" "}
                    <Link href="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
