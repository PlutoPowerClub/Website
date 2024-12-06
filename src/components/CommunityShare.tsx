import Link from "next/link";

const CommunityBuild = () => {
  return (
    <div className=" border-stroke pt-7.5 shadow-default sm:px-7.5 mt-0 rounded-sm border bg-neutral-50 px-5 pb-5 ">
      <h1 className="mb-4 text-3xl font-bold text-black">Share</h1>
      <div className="flex flex-row justify-normal gap-10">
        <p className="text-xl text-black">Share these results:</p>
        <div className="flex flex-row justify-between space-x-5 text-2xl">
          <Link
            href={`https://twitter.com/intent/tweet?text=&url=https://plutowebsite.vercel.app/`}
            title="Share on Twitter"
          >
            <span className="icon-[mdi--twitter] hover:text-black"></span>
          </Link>
          <Link
            href={`https://wa.me/?text=https://plutowebsite.vercel.app/`}
            title="Share on WhatsApp"
          >
            <span className="icon-[mdi--whatsapp] hover:text-black"></span>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=https://plutowebsite.vercel.app/`}
            title="Share on Facebook"
          >
            <span className="icon-[mdi--facebook] hover:text-black"></span>
          </Link>
          <Link
            href={`mailto:?subject=&body=Check out this site:https://plutowebsite.vercel.app/
          )}`}
            title="Share via Email"
          >
            <span className="icon-[mdi--email] hover:text-black"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityBuild;
