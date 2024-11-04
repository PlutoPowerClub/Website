import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Energy Tips",
  description: "Helpful energy tips to help you save energy.",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-2 lg:flex-row">
        <div className="flex flex-col gap-2">
          <ul>
            <li>
              Maximise your energy usage with this helpful guide on how to save
              energy. (https://octopus.energy/blog/energy-saving-tips/)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
