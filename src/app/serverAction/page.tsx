import { getServerSession } from "next-auth";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Server",
  description: "This is a server action",
};

export default async function ServerActionPage() {
  const whoAmI = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not Logged In";
  };
}
