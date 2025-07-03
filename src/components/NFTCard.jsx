import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NFTCard({ nft }) {
  const [listedPrice, setListedPrice] = useState(null);

  useEffect(() => {
    const listings = JSON.parse(localStorage.getItem("prover_listings")) || {};
    if (listings[nft.id]) {
      setListedPrice(listings[nft.id]);
    }
  }, [nft.id]);

  return (
    <Link to={`/nft/${nft.id}`}>
      <div className="bg-gray-800 p-3 rounded hover:bg-gray-700 transition">
        <img src={nft.image} alt={nft.name} className="rounded" />
        <h3 className="mt-2 text-lg font-bold">{nft.name}</h3>
        <p className="text-sm text-gray-400">
          {listedPrice ? `Listed: ${listedPrice} ETH` : "Not listed"}
        </p>
      </div>
    </Link>
  );
}

export default NFTCard;
