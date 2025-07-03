import { Link } from "react-router-dom";

function NFTCard({ nft }) {
  return (
    <Link to={`/nft/${nft.id}`}>
      <div className="bg-gray-800 p-3 rounded hover:bg-gray-700 transition">
        <img src={nft.image} alt={nft.name} className="rounded" />
        <h3 className="mt-2 text-lg font-bold">{nft.name}</h3>
        <p className="text-sm text-gray-400">
          {nft.price ? `Listed: ${nft.price} ETH` : "Not listed"}
        </p>
      </div>
    </Link>
  );
}

export default NFTCard;
