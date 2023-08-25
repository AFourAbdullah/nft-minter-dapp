import React, { useState } from "react";
import ResponsiveForm from "./Form";
import MintForm from "./MintNFtForm";

const Home = () => {
  const [hasIpfsUrl, setHasIpfsUrl] = useState(false);
  return (
    <div className="mt-10 w-[70vw] h-screen flex flex-col gap-10">
      {!hasIpfsUrl ? (
        <h2 className="text-center font-semibold">
          Already Has A Ipfs url??
          <span
            className="text-blue-900 cursor-pointer text-center"
            onClick={() => setHasIpfsUrl(true)}
          >
            Mint Your Nft
          </span>
        </h2>
      ) : (
        <h2
          className="text-blue-900 cursor-pointer text-center font-semibold"
          onClick={() => setHasIpfsUrl(false)}
        >
          Upload Your file to Ipfs
        </h2>
      )}

      {hasIpfsUrl ? <MintForm /> : <ResponsiveForm />}
    </div>
  );
};

export default Home;
