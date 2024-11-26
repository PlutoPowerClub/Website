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
      <div className="bg-red-50 xl:bg w-full rounded-2xl border border-stroke shadow-lg">
        <div className="flex items-center justify-center sm:py-5 xl:justify-start xl:px-5">
          <div className="w-full p-6 py-5 sm:p-8 md:max-w-xl">
            <p className="mb-5 text-2xl font-medium sm:mb-12 sm:text-5xl">
              Sign in to visit Pluto.
            </p>
            <Form />
            <div className="mt-4 rounded-xl bg-neutral-50 p-4 sm:mt-12">
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
          <div className="min-h-[800px] overflow-hidden">
            <Image
              src="/images/surface.png"
              alt="Surface of Pluto. The photo has had a duotone filter of indigo and red applied."
              height={800}
              width={1200}
              className="rounded-2xl object-cover p-10"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
