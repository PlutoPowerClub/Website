import { Metadata } from "next";
import Image from "next/image";
import Form from "./form";

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
