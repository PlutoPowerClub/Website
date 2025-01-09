import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 flex w-full rounded-xl bg-neutral-50 p-6 shadow-lg">
      <div className="max-w-6xl">
        <h3 className="text-xl font-semibold text-neutral-800">Quick Links</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <Link
              href="/"
              className="text-md text-neutral-800 hover:text-indigo-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/invites"
              className="text-md text-neutral-800 hover:text-indigo-600"
            >
              Invite Neighbours
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-md text-neutral-800 hover:text-indigo-600"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
