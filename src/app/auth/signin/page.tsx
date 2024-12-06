import { Metadata } from "next";
import Image from "next/image";
import Form from "./form";

export const metadata: Metadata = {
  title: "Sign In | StarFishEnergy",
  description: "Access your community energy dashboard",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex max-h-screen items-center justify-center text-neutral-800">
      <div className="border-stroke w-full rounded-2xl border bg-red-50 shadow-lg">
        <div className="flex">
          <div className="w-full flex-col justify-center lg:w-1/2 lg:px-10 lg:py-10">
            <div className="w-full p-6 py-5 lg:max-w-xl ">
              <p className="text-2xl font-bold tracking-tight sm:mb-10 sm:text-5xl xl:text-6xl">
                Sign in to visit Pluto.
              </p>
              <Form />
              <div className="mt-4 rounded-xl bg-neutral-50 p-4 lg:mt-8">
                <h2 className="mb-1 text-xl font-semibold text-neutral-800 sm:text-2xl ">
                  Demo Account
                </h2>
                <div className="space-y-2 lg:space-y-3">
                  <p className="text-body sm:text-xl xl:text-2xl">
                    Email:
                    <br />
                    <span className="font-medium text-neutral-800">
                      jackkershaw@protonmail.com
                    </span>
                  </p>
                  <p className="text-body sm:text-xl xl:text-2xl">
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
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-full w-full">
              <Image
                src="/images/surface.png"
                alt="Surface of Pluto."
                fill
                className="rounded-xl rounded-l-none object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
