import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Form from "./form";

export const metadata: Metadata = {
  title: "Sign In | Pluto",
  description: "Access your community energy dashboard",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-full flex-col justify-center space-y-6 p-8 lg:w-1/2 lg:justify-between lg:p-12">
        <div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            Welcome to Pluto.
          </h1>
          <div className="space-y-4 text-lg text-neutral-800">
            <p>
              Welcome to Pluto, your community solar energy platform. We're
              building a future where neighbourhoods power themselves through
              shared solar energy.
            </p>
            <p>
              By joining Pluto, you become part of a network of households,
              businesses, and community groups working together to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Generate and share clean solar energy</li>
              <li>Reduce energy costs for everyone</li>
              <li>Fund local community projects</li>
              <li>Track your community's environmental impact</li>
            </ul>
            <p className="mt-6 text-xl font-semibold">
              Join us in powering a brighter, more sustainable future for your
              community.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden w-1/2  lg:block">
        <div className="flex h-full flex-col justify-center p-12">
          <Form />
          <h2 className="my-4 text-xl font-semibold text-neutral-800">
            Don't have an account?
          </h2>
          <Link href="/auth/signup">
            <button
              type="submit"
              className="w-20 rounded-lg bg-neutral-800 px-5 py-2 text-xl text-neutral-50 hover:bg-neutral-700 sm:text-2xl"
            >
              Join
            </button>
          </Link>
          <div className="mt-8 rounded-xl bg-neutral-50 p-6 shadow-sm">
            <div className="space-y-3">
              <h2 className="mb-4 text-xl font-semibold text-neutral-800">
                Demo Account
              </h2>
              <p className="text-lg">
                Email:
                <br />
                <span className="font-medium text-neutral-800">
                  jackkershaw@protonmail.com
                </span>
              </p>
              <p className="text-lg">
                Password:
                <br />
                <span className="font-medium text-neutral-800">
                  Test1!Test1!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
