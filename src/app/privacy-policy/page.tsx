import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Pluto Power Open Source Dashboard",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="flex flex-col gap-2">
          Explanation of how your data is gathered/used
        </div>
      </div>
    </>
  );
}
