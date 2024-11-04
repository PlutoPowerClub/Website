import Dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
const MainDashboard = Dynamic(
  () => import("@/components/dashboardPage/Dashboard"),
  {
    ssr: false,
  },
);
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Pluto",
};

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      {session?.user?.name ? (
        <div className="pb-4 text-3xl font-bold text-black">
          Welcome {session?.user?.name}!
        </div>
      ) : (
        <div></div>
      )}
      <MainDashboard />
    </>
  );
}
