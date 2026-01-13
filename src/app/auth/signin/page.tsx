import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | Pluto",
  description: "Access your community energy dashboard",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
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

      <div className="w-full lg:w-1/2">
        <div className="flex h-full flex-col justify-center p-8 lg:p-12">
          {/* Authentication disabled: bypass sign-in */}
          <div className="mb-6 rounded-lg bg-yellow-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-neutral-800">
              Authentication disabled
            </h3>
            <p className="text-neutral-700">
              The application is running without authentication. Click "Continue
              to App" to proceed as a demo user.
            </p>
          </div>

          <Link href="/">
            <button
              type="button"
              className="mb-6 w-full rounded-lg bg-neutral-800 px-5 py-3 text-xl text-neutral-50 hover:bg-neutral-700 sm:text-2xl"
            >
              Continue to App
            </button>
          </Link>

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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
