import Link from "next/link";
import ComponentLayout from "@/components/componentLayout";

const CommunityBuild = () => {
  return (
    <ComponentLayout>
      <h1 className="mb-4 text-3xl font-semibold text-neutral-800">
        Share your results
      </h1>
      <div className="flex flex-row justify-normal gap-10">
        <div className="flex flex-row justify-between space-x-5 text-2xl">
          <Link
            href={`https://twitter.com/intent/tweet?text=&url=https://plutowebsite.vercel.app/`}
            title="Share on Twitter"
          >
            <span className="icon-[mdi--twitter] hover:text-neutral-600"></span>
          </Link>
          <Link
            href={`https://wa.me/?text=https://plutowebsite.vercel.app/`}
            title="Share on WhatsApp"
          >
            <span className="icon-[mdi--whatsapp] hover:text-neutral-600"></span>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=https://plutowebsite.vercel.app/`}
            title="Share on Facebook"
          >
            <span className="icon-[mdi--facebook] hover:text-neutral-600"></span>
          </Link>
          <Link
            href={`mailto:?subject=&body=Check out this site:https://plutowebsite.vercel.app/
          )}`}
            title="Share via Email"
          >
            <span className="icon-[mdi--email] hover:text-neutral-600"></span>
          </Link>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default CommunityBuild;
