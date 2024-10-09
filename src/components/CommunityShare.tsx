import Link from "next/link";

const CommunityBuild = () => {
  return (
    <div className=" mt-0 rounded-sm border border-stroke bg-white bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 ">
      <h1 className="mb-4 text-3xl font-bold text-black">Share</h1>
      <p className="text-gray-700 text-lg lg:text-xl">Share these results:</p>
      <div className="">
        <Link
          href={`https://twitter.com/intent/tweet?text=&url=`}
          title="Share on Twitter"
        >
          <span className="icon-[mdi--twitter]"></span>
        </Link>
        <Link href={`https://wa.me/?text=`} title="Share on WhatsApp">
          <span className="icon-[mdi--whatsapp]"></span>
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=`}
          title="Share on Facebook"
        >
          <span className="icon-[mdi--facebook]"></span>
        </Link>
        <Link
          href={`mailto:?subject=&body=Check out this article:
          )}`}
          title="Share via Email"
        >
          <span className="icon-[mdi--email]"></span>
        </Link>
      </div>
    </div>
  );
};

export default CommunityBuild;
