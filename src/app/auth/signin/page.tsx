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
    <div className="flex items-center justify-center text-neutral-800">
      <div className="bg-red-50 w-full rounded-2xl border border-stroke shadow-lg">
        <div className="flex-start flex items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="p-4">
              <Image
                src="/images/surface.jpg"
                width={800}
                height={400}
                alt="the surface of the planet Pluto"
                className="h-1/2 rounded-xl object-scale-down p-8"
              ></Image>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <div className="p-6 sm:p-8">
              <p className="mb-5 max-w-md text-2xl font-medium sm:mb-8 sm:text-4xl">
                Sign in to visit Pluto.
              </p>
              <Form />
              <div className="mt-4 rounded-xl bg-neutral-50 p-4 sm:mt-8">
                <h2 className="mb-1 text-xl font-semibold text-neutral-800 sm:text-2xl">
                  Demo Account
                </h2>
                <div className="space-y-2">
                  <p className="text-body sm:text-xl">
                    Email:
                    <br />
                    <span className="font-medium text-neutral-800">
                      jackkershaw@protonmail.com
                    </span>
                  </p>
                  <p className="text-body sm:text-xl">
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
      </div>
    </div>
  );
};

export default SignIn;
