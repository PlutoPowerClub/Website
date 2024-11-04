import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Protected",
  description: "This is a protected page",
};

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <div>
      This is a protected route.
      <br />
      You will only see this if you are authenticated.
    </div>
  );
}
