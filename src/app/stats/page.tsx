import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Stats For Nerds",
  description: "Jump into the nerdy details of our open source dashboard.",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="flex flex-col gap-2">
          How we've calculated energy usage and price estimates
        </div>
        <div>suggestion form or just email</div>
      </div>
    </>
  );
}
