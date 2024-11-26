import { Metadata } from "next";
import Image from "next/image";
import Form from "./form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | StarFishEnergy",
  description: "Access your community energy dashboard",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full rounded-2xl border border-stroke bg-white shadow-lg">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="relative h-full p-10">
              <Image
                src="/images/surface.jpg"
                alt="Image of the surface of the planet Pluto"
                width={800}
                height={1000}
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
              <div className="absolute bottom-12 left-12 max-w-sm rounded-xl bg-white/90 p-6 backdrop-blur">
                <h2 className="mb-2 text-2xl font-bold text-black">
                  Join Pluto's Community Energy Network
                </h2>
                <p className="text-body">
                  Monitor and manage your household energy consumption while
                  contributing to a sustainable future.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <div className="p-8 sm:p-12.5 xl:p-17.5">
              <div className="mb-10">
                <h1 className="mb-3 text-3xl font-bold text-black">
                  Welcome to Pluto
                </h1>
                <p className="text-body">
                  Sign in to continue to your dashboard
                </p>
              </div>

              <Form />

              <div className="mt-12 rounded-xl bg-gray-2 p-6">
                <h2 className="mb-4 text-lg font-semibold text-black">
                  Demo Account
                </h2>
                <div className="space-y-2">
                  <p className="text-body">
                    Email:{" "}
                    <span className="font-medium text-black">
                      jackkershaw@protonmail.com
                    </span>
                  </p>
                  <p className="text-body">
                    Password:{" "}
                    <span className="font-medium text-black">Test1!Test1!</span>
                  </p>
                </div>
                <div className="mt-4 text-sm text-body">
                  New user?{" "}
                  <Link
                    href="/auth/signup"
                    className="font-medium text-primary hover:underline"
                  >
                    Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
