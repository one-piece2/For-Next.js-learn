import CommentBtn from "@/modules/home/comment-btn";
import Image from "next/image";
import PostList from "./post-list";

const Content = () => {
  return (
    <>
      <Image
        src="/images/bitcoin-banner.jpeg"
        className="w-full rounded-lg border border-gray-200"
        width={1584}
        height={396}
        alt="bitcoin-banner"
      />
      <h1 className="text-2xl font-bold mt-2 text-gray-900">@bitcoin</h1>
      <p className="text-sm text-gray-600 mt-2">
        Bitcoin is a decentralized digital currency that enables instant,
        peer-to-peer transactions without intermediaries. It is based on
        blockchain technology, which is a distributed ledger that records
        transactions in a secure and transparent manner.
      </p>
      <div className="w-full mt-8">
        <CommentBtn />
      </div>

      <PostList />
    </>
  );
};

export default Content;
