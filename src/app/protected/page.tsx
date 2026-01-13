export const metadata = {
  title: "Protected",
  description: "This is a protected page",
};

export default async function ProtectedRoute() {
  // Auth disabled — always accessible
  return (
    <div>
      This is a protected route.
      <br />
      Authentication is disabled — everyone can see this page.
    </div>
  );
}
