import { redirect } from "next/navigation";
import Dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
const MainDashboard = Dynamic(
  () => import("@/components/dashboardPage/Dashboard"),
);
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to Pluto",
};

export default async function Home() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
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
