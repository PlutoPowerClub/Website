import { Metadata } from "next";
import Image from "next/image";
import Form from "./form";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to Pluto",
};

const SignIn: React.FC = () => {
  return (
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
            <Form />
            <div className="py-10 text-left">
              <h1 className="text-xl text-black">
                {" "}
                Don't have an account? Use the folowing test values:{" "}
              </h1>
              <div>
                <p className="font-bold text-black">
                  Email: jackkershaw@protonmail.com
                </p>
                <p className="font-bold text-black">Password: Test1!Test1!</p>
                Later you'll be able to {""}
                <Link href="/auth/signup" className="text-primary">
                  sign up.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
