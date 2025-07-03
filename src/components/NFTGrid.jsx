import NFTCard from "./NFTCard";
import dummyNFTs from "../data/dummyNFTs";

function NFTGrid() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {dummyNFTs.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}

export default NFTGrid;
