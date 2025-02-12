import { Metadata } from "next";
import Image from "next/image";
import Form from "./form";

export const metadata: Metadata = {
  title: "Sign In | Pluto",
  description: "Access your community energy dashboard",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-full flex-col justify-center lg:w-1/2 lg:justify-between lg:p-2">
        <div className="w-full p-6 py-5 lg:max-w-xl">
          <p className="mb-4 text-2xl font-bold tracking-tight sm:mb-8 sm:text-5xl xl:text-6xl">
            Sign in to visit Pluto.
          </p>
          <Form />
          <div className="mt-4 rounded-xl bg-neutral-50 p-4 lg:mt-8">
            <h2 className="mb-1 text-xl font-semibold text-neutral-800 sm:text-2xl">
              No credentials? Use the demo account:
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
  );
};

export default SignIn;
