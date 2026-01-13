import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Server",
  description: "This is a server action",
};

export default async function ServerActionPage() {
  const whoAmI = async () => {
    "use server";
    // Auth disabled — return demo identity
    return "Demo User";
  };
}
